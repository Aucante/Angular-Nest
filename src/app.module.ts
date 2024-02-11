import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config'
import { CryptocurrencyModule } from './cryptocurrency/cryptocurrency.module';
import { UserCryptocurrencyModule } from './user-cryptocurrency/user-cryptocurrency.module';

@Module({
  imports: [
      AuthModule,
      PrismaModule,
      ConfigModule.forRoot({isGlobal : true}),
      CryptocurrencyModule,
      UserCryptocurrencyModule
  ],
})
export class AppModule {}
