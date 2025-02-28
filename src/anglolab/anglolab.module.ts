import { Module } from '@nestjs/common';
import { AnglolabController } from './anglolab.controller';

@Module({
    controllers: [AnglolabController]
})
export class AnglolabModule { }
