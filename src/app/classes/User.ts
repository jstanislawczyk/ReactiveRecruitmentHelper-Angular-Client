import { Role } from './Role';

class User {
  get _id(): string {
    return this.__id;
  }

  get email(): string {
    return this._email;
  }

  get firstName(): string {
    return this._firstName;
  }

  get lastName(): string {
    return this._lastName;
  }

  get active(): boolean {
    return this._active;
  }

  get roles(): Array<Role> {
    return this._roles;
  }

  private readonly __id: string;
  private readonly _firstName: string;
  private readonly _lastName: string;
  private readonly _email: string;
  private readonly _password: string;
  private readonly _active: boolean;
  private readonly _roles: Array<Role> = [];

  constructor(id: string, firstName: string, lastName: string, email: string, password: string, active: boolean, roles: Array<Role>) {
      this.__id = id;
      this._firstName = firstName;
      this._lastName = lastName;
      this._email = email;
      this._password = password;
      this._active = active;
      this._roles = roles;
  }
}

export { User };
