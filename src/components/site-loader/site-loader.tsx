import { Component, Element, Prop, State, Watch, h, Host } from "@stencil/core";
import { MatchResults, LocationSegments } from "@inspirationlabs/router";
import { LinkRelTypes } from "../../types/LinkRelTypes";
import { OpenGraphTypes } from "../../types/OpenGraphTypes";
import { GraphData } from "../../types/GraphData";
import { LangData } from "../../types/LangData";

@Component({
  tag: "site-loader",
  styleUrl: "site-loader.css",
})
export class SiteLoader {
  /**
   * The basedomain for the project
   */
  @Prop() baseDomain = "https://stencil-seo-starter.com";
  /**
   * The current element
   */
  @Element() el: HTMLSiteLoaderElement;
  /**
   * Watch the router match
   */
  @Prop() match: MatchResults;
  /**
   * The page string
   */
  @Prop() page: string;
  /**
   * The location segments set by the router
   */
  @Prop() location?: LocationSegments;

  /**
   * @description The current dataset fetched by the site-loader
   */
  @State() data;

  /**
   *
   * @param match
   */
  @Watch("match")
  async computePath(match: MatchResults) {
    return new Promise(resolve => {
      this.fetchPageContent(this.getPathname(match)).then(() => {
        resolve();
      });
    });
  }

  /**
   * Fetches the content from the json endpoint
   * @param url the url which should be fetched
   */

  /**
   * Fetches the content from the json endpoint
   * @param url the url which should be fetched
   */
  private async fetchPageContent(url?: string) {
    const baseUrl = "";
    const contentsPath = "/assets/docs";
    const fetchUrl = url;
    let fullFetchUrl = "";

    // replace double slashes in path of they exist to prevent errors
    const renderedPath = (contentsPath + fetchUrl + "/index.json").replace("//", "/");
    // check if the page is defined as static or not. For static pages we load content from index.json, otherwise from CMS
    fullFetchUrl = baseUrl + renderedPath;

    return this.fetchData(fullFetchUrl, this.handleDefaultRequestResponse, []);
  }

  /**
   * handle response of request to cms or .json file
   *
   * @param res
   * @param staticContent - true for .json file, false - cms
   */
  private handleDefaultRequestResponse(res) {
    if (res.status == 404) {
      this.data = {
        type: 404,
      };
      return;
    }
    return res
      .json()
      .then(jsondata => {
        if (jsondata) {
          this.data = jsondata;
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  /**
   * perform request to fetch data
   *
   * @param fetchUrl
   * @param handleResponseCb
   * @param handleResponseParams
   */
  private async fetchData(fetchUrl: string, handleResponseCb, handleResponseParams) {
    try {
      const res = await fetch(fetchUrl, {});

      return handleResponseCb.apply(this, [res, ...handleResponseParams]);
    } catch (err) {
      console.log(err);
    }
  }

  /**
   *
   * @param match
   */

  /**
   *
   * @param match
   */
  private getPathname(match?: MatchResults) {
    let pathname;
    let currMatch: MatchResults = this.match;
    if (match) {
      currMatch = match;
    }
    if (!currMatch) {
      pathname = window.location.pathname;
      if (pathname.endsWith("/")) {
        pathname = pathname.substring(0, pathname.length - 1);
      }
    } else {
      pathname = currMatch.url;
    }
    return pathname;
  }

  /**
   * WillLoad function which loads the page contents
   */
  componentWillLoad() {
    return new Promise(resolve => {
      this.fetchPageContent(this.getPathname()).then(() => {
        resolve();
      });
    });
  }

  /**
   * Render the widget elements
   * @param data The data received from json
   */

  /**
   * Render the widget elements
   * @param data The data received from json
   */
  private renderItems(data) {
    let Tag = "Div";
    if (data.type) {
      Tag = data.type;
    }
    const slot = [];
    const slots = {};
    if (data.data && data.data.items) {
      data.data.items.map(item => {
        if (item.slot) {
          if (!slots[item.slot]) {
            slots[item.slot] = [];
          }
          slots[item.slot].push(this.renderItems(item));
        } else {
          slot.push(<div class="item">{this.renderItems(item)}</div>);
        }
      });
    }
    return (
      <Tag data={data.data}>
        {slot.length ? <div>{slot}</div> : null}
        {Object.keys(slots).length
          ? Object.keys(slots).map(key => {
              const contents = slots[key];
              return <div slot={key}>{contents}</div>;
            })
          : null}
      </Tag>
    );
  }

  /**
   * Remove old link rel types in the header to prevent header duplication
   * @param type LinkRelTypes
   */
  private removeOldMetaLinks(type: LinkRelTypes) {
    // @todo specify correct type
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const links: any = document.head.querySelectorAll('link[rel="' + type + '"]');

    for (const el of links) {
      document.head.removeChild(el);
    }
  }

  /**
   * Render the title meta tag
   * @param title The title string
   */
  private renderTitle(title: string) {
    const metaEl = document.head.querySelector("meta[charset]");
    let titleEl = document.head.querySelector("title");
    if (!titleEl) {
      titleEl = document.createElement("title");
      document.head.insertBefore(titleEl, metaEl.nextSibling);
    }
    titleEl.text = title;
  }

  /**
   *
   * @param description The meta description string
   */
  private renderDescription(description: string) {
    const titleEl = document.head.querySelector("title");
    let descEl = document.head.querySelector('meta[name="Description"]');
    if (!descEl) {
      descEl = document.createElement("meta");
      descEl.setAttribute("name", "description");
      document.head.insertBefore(descEl, titleEl.nextSibling);
    }
    descEl.setAttribute("content", description);
  }

  /**
   * Render the langs in the data to add hreflang header
   * @param langs
   */
  private renderHrefLangs(langs: LangData[]) {
    const hreflangs = [];
    for (const langel of langs) {
      const tag = {
        tag: "link",
        attributes: {
          rel: "alternate",
          hreflang: langel.language,
          href: langel.url,
        },
      };
      hreflangs.push(tag);
    }
    return hreflangs;
  }

  /**
   * Render the header tag for opengraphdata
   * @param graphdata GraphData
   */
  private renderOpengraph(graphdata: GraphData) {
    const ogtags = [];
    for (const elkey in graphdata) {
      if (OpenGraphTypes[elkey]) {
        const name = "og:" + elkey;
        const tag = {
          tag: "meta",
          attributes: {
            property: name,
            content: graphdata[elkey],
          },
        };
        ogtags.push(tag);
      }
    }
    return ogtags;
  }

  // /**
  //  * Removes existing opengraph tags
  //  */
  private removeOpengraph() {
    // @todo specify correct type
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const ogTags: any[] = Array.from(document.head.querySelectorAll("meta[property]"));
    for (const tag of ogTags) {
      if (tag.attributes && tag.attributes.property) {
        const property = tag.attributes.property;
        if (property && property.nodeValue && property.nodeValue.startsWith("og:")) {
          document.head.removeChild(tag);
        }
      }
    }
  }

  /**
   * Render the headers
   */
  private renderHeaderData() {
    let header = [];
    if (this.data) {
      this.renderTitle(this.data.title);
      this.renderDescription(this.data.description);
      if (this.data.meta) {
        if (this.data.meta.opengraph) {
          header = header.concat(this.renderOpengraph(this.data.meta.opengraph));
        }
      }
      if (this.data.languages && this.data.language.length > 0) {
        header = header.concat(this.renderHrefLangs(this.data.languages));
      }
      if (this.data.url) {
        const tag = {
          tag: "link",
          attributes: {
            rel: "canonical",
            href: this.baseDomain + this.data.url,
          },
        };
        header.push(tag);
      }
    }
    return header;
  }

  /**
   * converts the jsx and adds it to the header
   */
  private renderHeader() {
    this.removeOldMetaLinks(LinkRelTypes.alternate);
    this.removeOldMetaLinks(LinkRelTypes.canonical);
    this.removeOpengraph();
    const headers = this.renderHeaderData();
    for (const head of headers) {
      if (head.tag) {
        const el: HTMLMetaElement = document.createElement(head.tag);
        for (const attr of Object.keys(head.attributes)) {
          el.setAttribute(attr, head.attributes[attr]);
          document.head.appendChild(el);
        }
      }
    }
  }

  /**
   * Change the language tag to the current language
   */

  /**
   * Change the language tag to the current language
   */
  private renderHtmlLangTag() {
    if (this.data && this.data.language) {
      document.querySelector("html").lang = this.data.language;
    } else {
      document.querySelector("html").lang = "en";
    }
  }

  /**
   * The main render function
   */
  render() {
    // should stay here to remove old headers
    this.renderHeader();
    this.renderHtmlLangTag();
    if (this.data && this.data.data) {
      const output = [];
      if (this.data.menu && this.data.menu.main) {
        output.push(<il-menu-main data={this.data.menu.main}></il-menu-main>);
      }
      this.data.data.map(item => {
        output.push(this.renderItems(item));
      });
      if (this.data.menu && this.data.menu.footer) {
        output.push(<il-menu-footer data={this.data.menu.footer}></il-menu-footer>);
      }
      return (
        <Host>
          {output.map(out => {
            return out;
          })}
        </Host>
      );
    }
  }
}
