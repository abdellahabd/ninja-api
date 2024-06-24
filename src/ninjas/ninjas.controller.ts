import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  ValidationPipe,
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
  getNinja(@Param('id') id: string) {
    return this.ninjaservice.getNinja(+id);
  }

  @Post()
  createninja(@Body(new ValidationPipe()) createninja: CreateNinjaDto) {
    return this.ninjaservice.createninja(createninja);
  }

  @Put(':id')
  updateninja(@Param('id') id: string, @Body() updateninja: UpdateNinjaDto) {
    return this.ninjaservice.updateninja(+id, updateninja);
  }

  @Delete(':id')
  deleteninja(@Param('id') id: string) {
    return this.ninjaservice.removeninja(+id);
  }
}
