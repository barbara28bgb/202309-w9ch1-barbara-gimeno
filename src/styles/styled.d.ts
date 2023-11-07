import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      cardBackground: string;
      mainBackground: string;
      mainFont: string;
    };
    typography: {
      mainFontFamily: string;
      propertiesSize: string;
      titleSize: string;
      headerSize: string;
    };
  }
}
