import { Injectable } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';

@Injectable()
export class NinjasService {
  private ninjas = [
    { id: 0, name: 'ninjas1', weapon: 'stars' },
    { id: 1, name: 'ninjas2', weapon: 'nunchucks' },
  ];
  getNingas(weapon?: 'stars' | 'nunchucks') {
    if (weapon) {
      return this.ninjas.filter((ninjas) => ninjas.weapon == weapon);
    }
    return this.ninjas;
  }
  getNinja(id: number) {
    const ninja = this.ninjas.find((ninja) => ninja.id == id);

    if (!ninja) {
      throw new Error('ninija not found');
    }

    return ninja;
  }

  createninja(ninjacreated: CreateNinjaDto) {
    const NewNinja = { ...ninjacreated, id: Date.now() };
    this.ninjas.push(NewNinja);
    return NewNinja;
  }

  updateninja(id: number, updateninja: UpdateNinjaDto) {
    this.ninjas = this.ninjas.map((ninja) => {
      if (ninja.id == id) {
        return { ...updateninja, ...ninja };
      }
      return ninja;
    });
  }

  removeninja(id: number) {
    const removeninja = this.getNinja(id);
    this.ninjas = this.ninjas.filter((ninja) => ninja.id !== id);
    return removeninja;
  }
}
