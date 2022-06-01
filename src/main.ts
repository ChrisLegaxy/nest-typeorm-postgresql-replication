import { Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { coreSetup } from "./bootstraps/core-setup";
import { swaggerSetup } from "./bootstraps/swagger-setup";

(async () => {
  const app = await NestFactory.create(AppModule);
  const port = await app.get(ConfigService).get<number>("application.port");

  coreSetup(app);
  swaggerSetup(app);

  await app.listen(port);
  Logger.log(`Server running on PORT ${port}`, "NestApplication");
})();
