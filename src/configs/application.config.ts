import { registerAs } from "@nestjs/config";

export interface ExpressApplicationConfig {
  port: number;
}

export default registerAs(
  "application",
  (): ExpressApplicationConfig => ({
    port: parseInt(process.env.PORT) || 3000,
  }),
);
