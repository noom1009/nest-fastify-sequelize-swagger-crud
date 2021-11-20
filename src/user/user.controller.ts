import {
  Controller,
  Body,
  Get,
  Param,
  Post,
  Put,
  Delete,
  Patch,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.model';
import { ApiParam, ApiTags } from '@nestjs/swagger';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Get()
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }
  @Get('/:id')
  @ApiParam({ name: 'id' })
  findOne(@Param() params): Promise<User> {
    return this.userService.findOne(params.id);
  }
/*
  @Get('/:studentId')
  getStudentById(@Param('studentId') studentId: String) {
    console.log(studentId);
    return `Get Student By Id ${studentId}`;
  }
  @Post()
  CreateStudent(
    @Body()
    body: {
      name: string;
      description: string;
      date: Date;
      author: string;
      Idcard: number;
    },
    @Body('name') name: string,
  ) {
    console.log(body);
    return `Create Student ${JSON.stringify(body)}`;
  }

  @Put('/:studentId')
  updateStudentBy(@Param('studentId') studentId: String) {
    console.log(studentId);
    return ' Updata PUT method for Update Database by ID Update ทั้งหมด';
  }

  @Patch('/:studentId')
  updateStudentByColoum() {
    return ' Updata PATCH method for Update Database by ID Method PATCH ใช้ Update บางฟิลด์ ';
  }

  @Delete('/:studentId')
  deleteStudentById() {
    return ' Delete database by Id';
  }

  @Get('/:studentId/:subjectId')
  getStudentByIdAndSubject(
    @Param('studentId') studentId: String,
    @Param('subjectId') subjectId: String,
  ) {
    console.log(studentId);
    return `Get Student By Id ${studentId} and Subject code ${subjectId}`;
  }
  */
}
