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
import { NinjasService } from './ninjas.service';

@Controller('ninjas')
export class NinjasController {
  constructor(private ninjaservice: NinjasService) {}
  @Get()
  getNingas(@Query('weapen') weapen: 'stars' | 'nunchucks') {
    return this.ninjaservice.getNingas(weapen);
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
