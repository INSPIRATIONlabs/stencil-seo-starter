import { Component, Prop, Element } from '@stencil/core';


@Component({
    tag: 'il-section',
    styleUrl: 'il-section.css'
})
export class IlSection {

  @Prop() data: any;
  @Element() el: HTMLElement;

  componentWillUpdate() {
    this.el.className = 'hydrated'; // TO BE DISCUSSED: Only because when component is updating, there are still old classes which we don't need...That's why i set the default "hydrated"
  }

  private addClassesToClassList(classes:string[] | string) {
    if(Array.isArray(classes) && classes.every(c => c && typeof c === 'string')) {
      this.el.classList.add(...classes);
    } else if (typeof this.data.classes === 'string') {
      this.el.classList.add(classes as string);
    }
  }

  render() {
    if (this.data) {
      if(this.data.classes) {
        this.addClassesToClassList(this.data.classes);
      }
      return (
        <section id={this.data.htmlId}>
          <div>
            {
              this.data.title
              ? <h1>{this.data.title}</h1>
              : null
            }
            <slot name="start" />
            {
              this.data.content
              ? <div class="content" innerHTML={this.data.content}></div>
              : null
            }
            <slot />
            {/* {
              this.data.items
              ? (this.data.items.map((item) => {
                  if (item.type) {
                      const Tag:any = item.type;
                      return <Tag data={item.data}></Tag>
                  }
                  {item}
              }))
              : null
            } */}
          </div>
        </section>
      );
    }
  }
}
