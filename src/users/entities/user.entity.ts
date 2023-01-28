export type UserProps = {
  id: string;
  name: string;
  email: string;
  password: string;
  role: 'admin' | 'teacher' | 'student';
};

export class User {
  private props: UserProps;
  constructor(private userProps: UserProps) {
    this.props = this.userProps;
  }

  get User() {
    return this.props;
  }
}
