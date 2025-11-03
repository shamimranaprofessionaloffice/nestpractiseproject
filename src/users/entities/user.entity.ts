export enum Role {
  User = 'user',
  Admin = 'admin',
}
export class User {
  id: number;
  email: string;
  password: string;
  roles: Role[];
}
