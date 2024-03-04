import { BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTestBookDto } from 'src/_common/dtos/createTestBook.dto';
import { TestBook } from 'src/_common/entities/testbook.entity';
import { Repository } from 'typeorm';

export class TestbookService {
  constructor(
    @InjectRepository(TestBook)
    private testBookRepository: Repository<TestBook>,
  ) {}

  async createTestBook(bookData: CreateTestBookDto): Promise<string> {
    await this.testBookRepository.save(bookData);
    return '정상 등록되었습니다.';
  }

  async findAllTestBook(): Promise<TestBook[]> {
    return await this.testBookRepository.find();
  }

  async findOneTestBook(bookId: number): Promise<TestBook> {
    const findOneData = await this.testBookRepository.findOne({
      where: { id: bookId },
    });
    if (!findOneData)
      throw new BadRequestException({ message: '등록되지 않은 책입니다.' });
    return findOneData;
  }
}
