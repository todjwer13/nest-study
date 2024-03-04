import { Body, Controller, Post, Get, Param } from '@nestjs/common';
import { TestbookService } from './testbook.service';
import { CreateTestBookDto } from 'src/_common/dtos/createTestBook.dto';
import { TestBook } from 'src/_common/entities/testbook.entity';

@Controller('testbook')
export class TestbookController {
  constructor(private testBookservice: TestbookService) {}

  @Post()
  async createTestBook(@Body() bookData: CreateTestBookDto): Promise<string> {
    return await this.testBookservice.createTestBook(bookData);
  }

  @Get()
  async findAllTestBook(): Promise<TestBook[]> {
    return await this.testBookservice.findAllTestBook();
  }

  @Get(':id')
  async findOneTestBook(@Param('id') bookId: number): Promise<TestBook> {
    return await this.testBookservice.findOneTestBook(bookId);
  }
}
