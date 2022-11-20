export type DevelopmentModeType = "development" | "homolog" | "production";
export interface Environment {
  readonly DEVELOPMENT_MODE: DevelopmentModeType;
}
