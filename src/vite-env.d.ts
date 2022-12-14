/// <reference types="vite/client" />

export type DevelopmentModeType = "development" | "homolog" | "production";

interface ImportMetaEnv {
  readonly DEVELOPMENT_MODE: DevelopmentModeType;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
