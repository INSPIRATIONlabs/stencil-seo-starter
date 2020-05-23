import { Component, Listen, Prop, Element, h } from "@stencil/core";
import { Helper } from "../../shared/helperClass";

@Component({
  tag: "il-menu-main",
  styleUrl: "il-menu-main.css",
})
export class IlMenuMain {
  /**
   * Add the data to the component
   */
  @Prop() data;

  @Element() el: HTMLIlMenuMainElement;

  componentWillUpdate() {
    // TO BE DISCUSSED: Only because when component is updating, there are still old classes which we don't need...That's why i set the default "hydrated"
    this.el.className = "hydrated";
  }

  render() {
    if (this.data) {
      if (this.data.classes) {
        Helper.addClassesToClassList(this.data.classes, this.el);
      }
      return (
        <header>
          <div class="container">
            <nav>
              <stencil-route-link url="/" anchorTitle="INSPIRATIONlabs | web - software - dialogue" anchorClass="brand">
                <svg
                  class="large"
                  width="356"
                  height="31"
                  viewBox="0 0 356 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0)">
                    <path
                      d="M337.801 11.1999C340.801 14.6999 343.501 17.1999 346.701 17.1999C350.001 17.3999 352.901 14.7999 353.101 11.4999C353.301 8.1999 350.701 5.2999 347.401 5.0999C347.201 5.0999 346.901 5.0999 346.701 5.0999C343.501 5.0999 340.801 7.5999 337.801 11.1999ZM321.801 2.1999C316.901 2.1999 312.901 6.1999 312.901 11.0999C312.901 15.9999 316.901 19.9999 321.801 19.9999C327.301 19.9999 331.101 15.4999 334.901 11.0999C331.101 6.6999 327.301 2.1999 321.801 2.1999ZM321.801 22.2999C315.601 22.4999 310.501 17.5999 310.301 11.4999C310.101 5.3999 315.001 0.0999023 321.101 -0.100098C321.301 -0.100098 321.501 -0.100098 321.801 -0.100098C328.201 -0.100098 332.501 4.8999 336.401 9.3999C339.601 5.6999 342.701 2.7999 346.701 2.7999C350.701 2.7999 355.301 5.9999 355.301 11.0999C355.301 16.1999 350.801 19.3999 346.701 19.3999C342.601 19.3999 339.601 16.4999 336.401 12.7999C332.501 17.2999 328.201 22.2999 321.801 22.2999Z"
                      fill="#00AEEF"
                    />
                    <path
                      d="M30.1004 30.4002H33.0004V0.400153H30.3004V25.4002H30.2004L16.0004 0.400153H11.4004V30.4002H14.0004V2.70015H14.1004L30.1004 30.4002ZM42.0004 7.80015C42.0004 4.30015 44.4004 2.30015 47.9004 2.30015C51.7004 2.30015 54.0004 4.60015 55.1004 7.90015L57.5004 7.20015C56.4004 2.80015 52.4004 -0.199847 47.9004 0.000153326C42.3004 0.000153326 39.3004 3.30015 39.3004 7.80015C39.3004 17.7002 55.5004 14.6002 55.5004 22.6002C55.5004 26.2002 53.3004 28.6002 49.5004 28.6002C44.8004 28.6002 42.1004 26.6002 40.9004 22.0002L38.4004 22.8002C40.1004 28.3002 43.3004 30.8002 49.1004 30.8002C54.0004 30.8002 58.2004 28.0002 58.2004 22.9002C58.2004 18.6002 56.5004 16.5002 48.1004 13.4002C42.6004 11.3002 42.0004 9.80015 42.0004 7.80015ZM80.8004 8.80015C80.8004 12.7002 78.6004 14.9002 73.4004 14.9002H67.1004V2.70015H73.4004C78.6004 2.70015 80.8004 4.90015 80.8004 8.80015ZM83.6004 8.80015C83.6004 3.80015 80.6004 0.400153 73.5004 0.400153H64.5004V30.4002H67.2004V17.1002H73.5004C80.6004 17.1002 83.6004 13.8002 83.6004 8.80015ZM90.0004 30.4002H92.7004V0.400153H90.0004V30.4002ZM111.4 14.5002H104V2.70015H111.4C115.7 2.70015 117.9 4.90015 117.9 8.60015C117.9 12.3002 115.4 14.5002 111.4 14.5002ZM121.8 30.5002L114.4 16.3002C118.7 15.2002 120.6 12.6002 120.6 8.70015C120.6 3.80015 117.3 0.600153 111.4 0.600153H101.3V30.6002H104V16.7002H111.8L118.8 30.4002L121.8 30.5002ZM142.6 18.5002H132.6L137.5 2.80015H137.6L142.6 18.5002ZM149.1 30.5002L139.6 0.500153H135.4L125.8 30.5002H128.7L131.8 20.7002H143.1L146.1 30.5002H149.1ZM159.3 2.70015H168.2V0.500153H147.7V2.70015H156.6V30.4002H159.3V2.70015ZM173.9 30.4002H176.6V0.400153H173.9V30.4002ZM204 15.4002C204 23.8002 200.4 28.6002 194.9 28.6002C189.4 28.6002 185.8 23.9002 185.8 15.4002C185.8 6.90015 189.4 2.20015 194.9 2.20015C200.4 2.20015 204 7.00015 204 15.4002ZM206.7 15.4002C206.7 6.60015 202.4 0.000153326 194.9 0.000153326C187.4 0.000153326 183 6.60015 183 15.4002C183 24.2002 187.3 30.8002 194.8 30.8002C202.3 30.8002 206.7 24.3002 206.7 15.4002ZM236.9 30.4002V0.400153H231.8V25.4002L217.6 0.400153H213V30.4002H215.7V2.70015H215.8L231.8 30.4002H236.9ZM253.2 24.7002C252.1 25.6002 250.1 27.0002 248.5 27.0002C247.2 27.1002 246.1 26.1002 246 24.8002C246 24.7002 246 24.6002 246 24.4002C246 21.4002 249.8 20.7002 253.2 20.0002V24.7002ZM253.8 30.4002H258.8C258.5 29.4002 258.4 28.3002 258.4 27.3002V17.1002C258.4 10.6002 255.9 8.50015 250.1 8.40015C247 8.30015 243.4 10.1002 242 12.3002L245.3 14.8002C246.3 13.1002 248.1 12.1002 250 12.1002C251.8 12.1002 253.2 13.0002 253.2 14.7002V16.5002C244.8 17.5002 240.8 20.1002 240.8 25.0002C240.7 28.0002 243 30.6002 246.1 30.7002C246.3 30.7002 246.5 30.7002 246.7 30.7002C249.1 30.7002 251.5 29.9002 253.4 28.4002L253.8 30.4002ZM277.5 19.6002C277.5 24.2002 275.8 26.7002 272.7 26.7002C270.5 26.7002 269.8 25.6002 268.7 24.8002V14.4002C269.7 13.3002 271.2 12.6002 272.7 12.6002C275.7 12.5002 277.5 15.0002 277.5 19.6002ZM282.6 19.0002C282.6 13.7002 279.5 8.40015 274 8.40015C272 8.50015 270.1 9.30015 268.8 10.8002H268.7V0.400153H263.6V30.4002H267.6L268.2 28.1002C270 29.9002 271.7 30.8002 274.1 30.8002C279.7 30.8002 282.6 25.8002 282.6 19.0002ZM297.1 14.5002L300.4 11.7002C298.5 9.60015 295.7 8.40015 292.8 8.40015C289.1 8.40015 285.7 10.6002 285.7 14.7002C285.7 22.2002 296.5 20.9002 296.5 24.6002C296.5 26.1002 295.2 27.1002 293.4 27.1002C291.2 27.1002 289.6 25.6002 288.4 24.0002L284.9 26.6002C286.7 29.4002 289.8 31.0002 293.1 31.0002C297.6 31.0002 301 29.0002 301 24.5002C301 16.6002 290.2 18.2002 290.2 14.5002C290.2 13.2002 291.1 12.4002 293.1 12.4002C294.8 12.2002 296.1 13.4002 297.1 14.5002Z"
                      class="il-text"
                    />
                    <path d="M2.7 0.399902H0V30.3999H2.7V0.399902Z" class="il-text" />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect width="355.3" height="30.8" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <svg
                  class="small"
                  width="124"
                  height="31"
                  viewBox="0 0 124 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M54.4399 16.97H12.9099V18.8H54.4399V16.97Z" fill="#009FE3" />
                  <path d="M68.93 0.77002H63.78V30.75H68.93V0.77002Z" class="il-text" />
                  <path d="M3.56007 0.77002H0.820068V30.75H3.56007V0.77002Z" class="il-text" />
                  <path
                    d="M105.73 11.5201C108.75 15.0001 111.4 17.5701 114.59 17.5701C117.65 17.5701 120.95 15.2601 120.95 11.5201C120.95 7.78011 117.65 5.47011 114.59 5.47011C111.4 5.47011 108.76 8.04011 105.73 11.5201ZM89.69 2.58011C84.63 2.58011 80.51 6.59011 80.51 11.5101C80.51 16.4301 84.63 20.4401 89.69 20.4401C95.15 20.4401 99.04 15.9101 102.79 11.5101C99.04 7.12011 95.15 2.58011 89.69 2.58011ZM89.69 22.6801C83.4 22.6801 78.28 17.6701 78.28 11.5201C78.28 5.36011 83.4 0.360107 89.69 0.360107C96.06 0.360107 100.43 5.32011 104.27 9.81011C107.5 6.13011 110.6 3.24011 114.6 3.24011C118.73 3.24011 123.19 6.40011 123.19 11.5201C123.19 16.6401 118.73 19.8001 114.6 19.8001C110.6 19.8001 107.5 16.9101 104.27 13.2301C100.42 17.7201 96.06 22.6801 89.69 22.6801Z"
                    fill="#009FE3"
                  />
                </svg>
              </stencil-route-link>
              <div class="menu__main__priority">
                {this.data && this.data.items
                  ? this.data.items.map((item) => {
                      return (
                        <stencil-route-link anchorClass="menu__main__action" url={item.href} anchorTitle={item.title}>
                          {item.title}
                        </stencil-route-link>
                      );
                    })
                  : undefined}
                <slot />
              </div>
            </nav>
          </div>
        </header>
      );
    }
  }

  @Listen("scroll", { target: "window" })
  handleScroll() {
    if (window.scrollY > 10) {
      this.el.classList.add("scrolled");
    } else {
      this.el.classList.remove("scrolled");
    }
  }
}
