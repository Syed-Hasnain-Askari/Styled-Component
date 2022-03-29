declare module "*.jpg" {
    export default "" as string;
  }
  declare module "*.png" {
    export default "" as string;
  }
  declare module '*.svg' {
    const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    export default content;
  }
  declare module "styled-components" {
    export default string;
  }
  // declare module 'react' {
  //   interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
  //     // extends React's HTMLAttributes
  //     custom?: string;
  //   }
  // }

