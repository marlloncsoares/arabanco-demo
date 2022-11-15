export interface ColorsMap {
  primary: string;
  primaryLighter: string;
  primaryDarker: string;
  secondary: string;
  secondaryLighter: string;
  secondaryDarker: string;
  tertiary: string;
  quaternary: string;
  quinary: string;
  senary: string;
  septenary: string;
  black: string;
  white: string;
  success: string;
  error: string;
  text: string;
  grey: string;
  disabled: string;
  placeholder: string;
}

export type ColorsOptions = keyof ColorsMap & string;
