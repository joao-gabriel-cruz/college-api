-- CreateTable
CREATE TABLE "teacher" (
    "id_teacher" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "teacher_pkey" PRIMARY KEY ("id_teacher")
);

-- CreateTable
CREATE TABLE "student" (
    "id_student" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "student_pkey" PRIMARY KEY ("id_student")
);

-- CreateTable
CREATE TABLE "subject" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "id_teacher" TEXT NOT NULL,
    "id_student" TEXT NOT NULL,

    CONSTRAINT "subject_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "teacher" ADD CONSTRAINT "teacher_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "student" ADD CONSTRAINT "student_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "subject" ADD CONSTRAINT "subject_id_teacher_fkey" FOREIGN KEY ("id_teacher") REFERENCES "teacher"("id_teacher") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "subject" ADD CONSTRAINT "subject_id_student_fkey" FOREIGN KEY ("id_student") REFERENCES "student"("id_student") ON DELETE RESTRICT ON UPDATE CASCADE;
