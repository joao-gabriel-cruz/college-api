/*
  Warnings:

  - A unique constraint covering the columns `[register]` on the table `student` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[register]` on the table `teacher` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `corse` to the `student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `register` to the `student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `course` to the `teacher` table without a default value. This is not possible if the table is not empty.
  - Added the required column `register` to the `teacher` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "student" ADD COLUMN     "corse" TEXT NOT NULL,
ADD COLUMN     "register" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "teacher" ADD COLUMN     "course" TEXT NOT NULL,
ADD COLUMN     "register" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "student_register_key" ON "student"("register");

-- CreateIndex
CREATE UNIQUE INDEX "teacher_register_key" ON "teacher"("register");
