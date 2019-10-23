/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface AppRoot {}
  interface IlMenuMain {
    /**
    * Add the data to the component
    */
    'data': any;
  }
  interface IlSection {
    /**
    * Data for the section
    */
    'data': any;
  }
}

declare global {


  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };

  interface HTMLIlMenuMainElement extends Components.IlMenuMain, HTMLStencilElement {}
  var HTMLIlMenuMainElement: {
    prototype: HTMLIlMenuMainElement;
    new (): HTMLIlMenuMainElement;
  };

  interface HTMLIlSectionElement extends Components.IlSection, HTMLStencilElement {}
  var HTMLIlSectionElement: {
    prototype: HTMLIlSectionElement;
    new (): HTMLIlSectionElement;
  };
  interface HTMLElementTagNameMap {
    'app-root': HTMLAppRootElement;
    'il-menu-main': HTMLIlMenuMainElement;
    'il-section': HTMLIlSectionElement;
  }
}

declare namespace LocalJSX {
  interface AppRoot {}
  interface IlMenuMain {
    /**
    * Add the data to the component
    */
    'data'?: any;
  }
  interface IlSection {
    /**
    * Data for the section
    */
    'data'?: any;
  }

  interface IntrinsicElements {
    'app-root': AppRoot;
    'il-menu-main': IlMenuMain;
    'il-section': IlSection;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'app-root': LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
      'il-menu-main': LocalJSX.IlMenuMain & JSXBase.HTMLAttributes<HTMLIlMenuMainElement>;
      'il-section': LocalJSX.IlSection & JSXBase.HTMLAttributes<HTMLIlSectionElement>;
    }
  }
}


