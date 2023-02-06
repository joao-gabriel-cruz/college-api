import { PrismaService } from 'src/database/prisma.service';
import { Teacher } from 'src/teacher/entities/teacher.entity';

export class TeacherRepository implements TeacherRepository {
  constructor(private prisma: PrismaService) {}

  getTeachers(): Promise<Teacher[]> {
    return this.prisma.teacher.findMany();
  }
}
