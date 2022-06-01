import * as cookieParser from "cookie-parser";

import { INestApplication, ValidationPipe } from "@nestjs/common";

export const coreSetup = (app: INestApplication) => {
  app.enableCors();
  app.use(cookieParser());
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
      forbidUnknownValues: true,
    }),
  );
};
