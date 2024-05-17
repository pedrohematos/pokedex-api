import { Injectable } from '@nestjs/common';

@Injectable()
export class SpeciesService {
  async findOne(name: string): Promise<any> {
    return 'Implementing';
  }

  async findOneWithTranslation(name: string): Promise<any> {
    return 'Implementing';
  }
}
