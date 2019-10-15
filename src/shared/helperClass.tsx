export class Helper {

  public static addClassesToClassList(classes: string[] | string, classListBase: HTMLElement) {
    if (Array.isArray(classes) && classes.every(c => c && typeof c === "string")) {
      classListBase.classList.add(...classes);
    } else if (typeof classes === "string") {
      classListBase.classList.add(classes);
    }
  }
}
