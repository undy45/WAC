/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface EeAmbulanceWlList {
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
}
declare global {
    interface HTMLEeAmbulanceWlListElement extends Components.EeAmbulanceWlList, HTMLStencilElement {
    }
    var HTMLEeAmbulanceWlListElement: {
        prototype: HTMLEeAmbulanceWlListElement;
        new (): HTMLEeAmbulanceWlListElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLElementTagNameMap {
        "ee-ambulance-wl-list": HTMLEeAmbulanceWlListElement;
        "my-component": HTMLMyComponentElement;
    }
}
declare namespace LocalJSX {
    interface EeAmbulanceWlList {
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface IntrinsicElements {
        "ee-ambulance-wl-list": EeAmbulanceWlList;
        "my-component": MyComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "ee-ambulance-wl-list": LocalJSX.EeAmbulanceWlList & JSXBase.HTMLAttributes<HTMLEeAmbulanceWlListElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
        }
    }
}
