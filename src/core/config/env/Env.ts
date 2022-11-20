import { Environment } from "@core/config/env";

const metaEnv = import.meta.env;
const DEVELOPMENT_MODE_DEFAULT = "development";

export const Env: Environment = {
  DEVELOPMENT_MODE: metaEnv.DEVELOPMENT_MODE || DEVELOPMENT_MODE_DEFAULT,
};
