import { Component, h } from '@stencil/core';
import '@inspirationlabs/router';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css'
})
export class AppRoot {

  private loaderProps = {
    baseDomain: 'https://stencil-router-starter1.com'
  }

  render() {
    return (
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url='/fakeloremipsumdoloreset' component='il-home'></stencil-route>
              <stencil-route component='site-loader' componentProps={this.loaderProps}/>
            </stencil-route-switch>
          </stencil-router>
    );
  }
}
