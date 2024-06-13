import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('ninjas')
export class NinjasController {
  @Get()
  getNingas() {
    return 'hello';
  }

  @Get(':id')
  getoneninja(@Param('id') id: string) {
    return { id };
  }

  @Post()
  createninja() {
    return {};
  }

  @Put(':id')
  updateninja() {}

  @Delete(':id')
  deleteninja() {}
}
