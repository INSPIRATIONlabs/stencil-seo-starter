import { Component, Prop, Element, h } from "@stencil/core";
import { Helper } from "../../shared/helperClass";

@Component({
  tag: "il-section",
  styleUrl: "il-section.css",
})
export class IlSection {
  /**
   * Data for the section
   */
  @Prop() data;

  @Element() el: HTMLIlSectionElement;

  componentWillUpdate() {
    this.el.className = "hydrated"; // TO BE DISCUSSED: Only because when component is updating, there are still old classes which we don't need...That's why i set the default "hydrated"
  }

  render() {
    if (this.data) {
      if (this.data.classes) {
        Helper.addClassesToClassList(this.data.classes, this.el);
      }
      return (
        <section id={this.data.htmlId}>
          <div>
            {this.data.title ? <h1>{this.data.title}</h1> : null}
            <slot name="start" />
            {this.data.content ? <div class="content" innerHTML={this.data.content}></div> : null}
            <slot />
          </div>
        </section>
      );
    }
  }
}
