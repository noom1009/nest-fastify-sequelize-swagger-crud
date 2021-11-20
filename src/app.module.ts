import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { User } from './user/user.model';
@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'irisgroup',
      database: 'yfhs',
      models: [User],
    }),
    UserModule,
  ],
  controllers: [UserController],
  providers: [AppService, UserService],
})
export class AppModule {}
