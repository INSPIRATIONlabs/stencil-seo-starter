const headChildrenPriorities = ['meta', 'title', 'link'];

const filteredHeadChildren = Array.from(document.head.children)
    .filter(el => headChildrenPriorities.includes(el.nodeName.toLowerCase()));

filteredHeadChildren.sort((a, b) => {
    if (a.nodeName.toLowerCase() === 'title') {

        return -1
    } else if (a.nodeName.toLowerCase() === 'meta'
        && b.nodeName.toLowerCase() === 'link') {

        return -1;
    } else if (a.nodeName.toLowerCase() === 'link'
        && b.nodeName.toLowerCase() !== 'link') {

        return 1;
    } else {
        return 0;
    }
});
filteredHeadChildren.sort((a) => {
    if (a.nodeName.toLowerCase() === 'meta'
        && a.getAttributeNames().includes('charset')) {

        return -1;
    } else if (a.nodeName.toLowerCase() === 'link'
        && !a.getAttributeNames().includes('rel')) {
        return 1;
    } else {
        return 0;
    }
});

while (filteredHeadChildren.length > 0) {
    document.head.insertBefore(filteredHeadChildren.pop(), document.head.childNodes[0]);
}

let ssrId = 0;
let textNodes = new Map();
const setSsrV = function (el) {
    if (el && el.classList.contains('hydrated')) {
        el.setAttribute('ssrv', ssrId++);
    }
    for (const child of el.children) {
        setSsrV(child);
    }
};

for (const child of document.body.children) {
    setSsrV(child);
}

for (const element of document.body.getElementsByTagName('*')) {
    const parent = element.parentElement.closest('.hydrated');
    const parentId = parent ? parent.getAttribute('ssrv') : null;
    for (const child of element.childNodes) {
        if (child.nodeType === 3 && !child['s-cr'] && !textNodes.has(child)) {
            textNodes.set(child, parent);
        }
    }
    if (parentId) {
        const childIdx = Array.from(element.parentElement.children).findIndex((entry) => entry === element);
        element.setAttribute('ssrc', [parentId, childIdx].join('.'));
    }
}

Array.from(textNodes.keys()).forEach((node) => {
    if (node.nodeValue && node.nodeValue.trim()) {
        const parent = textNodes.get(node);
        const parentId = parent ? parent.getAttribute('ssrv') : null;
        const childIdx = Array.from(node.parentElement.childNodes).findIndex((entry) => entry === node);
        if (parentId) {
            node.parentElement.insertBefore(document.createComment(['s', parentId, childIdx].join('.')), node);
            node.parentElement.insertBefore(document.createComment('/'), node.nextSibling);
            node.parentElement.insertBefore(document.createTextNode(' '), node.nextSibling);
        }
    }
});

document.querySelector('html').setAttribute('ssr', new Date().toISOString());
