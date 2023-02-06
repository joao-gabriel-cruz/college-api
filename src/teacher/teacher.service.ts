import { Injectable } from '@nestjs/common';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { TeacherRepository } from './repositories/teacher-repository';

@Injectable()
export class TeacherService {
  constructor(private teacherRepository: TeacherRepository) {}
  create(createTeacherDto: CreateTeacherDto) {
    return 'This action adds a new teacher';
  }

  findAll() {
    return this.teacherRepository.getTeachers();
  }

  findOne(id: number) {
    return `This action returns a #${id} teacher`;
  }

  update(id: number, updateTeacherDto: UpdateTeacherDto) {
    return `This action updates a #${id} teacher`;
  }

  remove(id: number) {
    return `This action removes a #${id} teacher`;
  }
}
