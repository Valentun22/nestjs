import { forwardRef, Module } from '@nestjs/common';

import { ArticleModule } from '../article/article.module';
import { AuthModule } from '../auth/auth.module';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { FileStorageService } from "../file-storage/services/file-storage.service";

@Module({
  imports: [ArticleModule, forwardRef(() => AuthModule), FileStorageService],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
