import { Module } from '@nestjs/common';
import { TestbookController } from './testbook.controller';
import { TestbookService } from './testbook.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestBook } from 'src/_common/entities/testbook.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TestBook])],
  controllers: [TestbookController],
  providers: [TestbookService],
})
export class TestbookModule {}
