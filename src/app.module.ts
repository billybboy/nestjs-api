import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
  }), UserModule, BookmarkModule, AuthModule, PrismaModule],
})
export class AppModule {}
