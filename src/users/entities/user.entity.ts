export type UserProps = {
  id: string;
  name: string;
  email: string;
  password: string;
  role: "admin" | "teacher" | "student";
};

export class User {
  constructor(private userProps: UserProps) {}
}
