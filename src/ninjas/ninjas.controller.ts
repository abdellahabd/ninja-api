import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';

@Controller('ninjas')
export class NinjasController {
  @Get()
  getNingas(@Query('type') type: string) {
    return { type };
  }

  @Get(':id')
  getoneninja(@Param('id') id: string) {
    return { id };
  }

  @Post()
  createninja(@Body() createninja: CreateNinjaDto) {
    return { name: createninja.name };
  }

  @Put(':id')
  updateninja(@Param('id') id: string, @Body() updateninja: UpdateNinjaDto) {
    return { id: id, name: updateninja.name };
  }

  @Delete(':id')
  deleteninja() {}
}
