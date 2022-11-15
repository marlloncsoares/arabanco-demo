import { ColorsMap } from "@core/presentation";

export class ColorsController {
  private static currentTheme: "WHITE" | "DARK" = "WHITE";
  private static whiteTheme: ColorsMap = {
    primary: "#540D6E",
    primaryLighter: "",
    primaryDarker: "",
    secondary: "#EE4266",
    secondaryLighter: "",
    secondaryDarker: "",
    tertiary: "#FFD23F",
    quaternary: "#3BCEAC",
    quinary: "#0EAD69",
    senary: "#FBFBFB",
    septenary: "#FB7793",
    black: "#000000",
    white: "#ffffff",
    success: "#0EAD69",
    error: "#cf000f",
    text: "#525252",
    grey: "#e9e9e9",
    disabled: "#dfdfdf",
    placeholder: "#cccccc",
  };

  public static colors: ColorsMap = this.whiteTheme;

  public static useWhiteTheme = () => {
    this.currentTheme = "WHITE";
    this.colors = this.whiteTheme;
  };

  public static useDarkTheme = () => {
    this.currentTheme = "DARK";
  };

  public static getCurrentTheme = () => {
    return this.currentTheme;
  };
}
