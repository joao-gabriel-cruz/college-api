export class User {
  constructor(
    public id: string,
    public name: string,
    public email: string,
    public password: string,
    public role: 'ADMIN' | 'STUDENT' | 'TEACHER',
  ) {}
}
