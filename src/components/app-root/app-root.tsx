import { Component, h } from "@stencil/core";
import "@inspirationlabs/router";
import "@inspirationlabs/il-site-loader";

@Component({
  tag: "app-root",
  styleUrl: "app-root.css",
})
export class AppRoot {
  private loaderProps = {
    baseDomain: "https://stencil-router-starter.com",
  };

  render() {
    return (
      <stencil-router>
        <stencil-route-switch scrollTopOffset={0}>
          <stencil-route component="il-site-loader" componentProps={this.loaderProps} />
        </stencil-route-switch>
      </stencil-router>
    );
  }
}
