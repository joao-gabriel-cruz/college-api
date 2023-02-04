import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TeacherModule } from './teacher/teacher.module';
import { StudentModule } from './student/student.module';

@Module({
  imports: [UsersModule, TeacherModule, StudentModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
