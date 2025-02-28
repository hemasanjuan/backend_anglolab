import { Controller, Get } from '@nestjs/common';

@Controller('anglolab')
export class AnglolabController {

    @Get()
    getAllAnglolab() {
        return 'Hola AngloLAb';
    }

}
