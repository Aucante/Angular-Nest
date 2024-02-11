import { Module } from '@nestjs/common';
import { UserCryptocurrencyService } from './user-cryptocurrency.service';
import { UserCryptocurrencyController } from './user-cryptocurrency.controller';

@Module({
  providers: [UserCryptocurrencyService],
  controllers: [UserCryptocurrencyController]
})
export class UserCryptocurrencyModule {}
