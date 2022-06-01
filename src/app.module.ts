import { Module } from "@nestjs/common";

import { UserModule } from "./modules/user/user.module";
import { ConfigModule } from "@nestjs/config";

import applicationConfig from "@/configs/application.config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DatabaseService } from "./services/database.service";
import databaseConfig from "./configs/database.config";

const commonModules = [
  ConfigModule.forRoot({
    isGlobal: true,
    load: [applicationConfig, databaseConfig],
  }),
  TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    useClass: DatabaseService
  }),
];
const modules = [UserModule];

@Module({
  imports: [...commonModules, ...modules],
})
export class AppModule {}
