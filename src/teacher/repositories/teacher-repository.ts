import { Teacher } from '../entities/teacher.entity';

export abstract class TeacherRepository {
  abstract getTeachers(): Promise<Teacher[]>;
}
