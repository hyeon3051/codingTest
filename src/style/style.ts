import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    basicWidth: string;

    color: {
    lightBlue: string;
    blue: string;
    gray: string;
    lightgray: string;
    yellow: string;
    };
  }
}
 