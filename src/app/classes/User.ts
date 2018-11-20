import {Role} from './Role';

class User {
    get email(): string {
      return this._email;
    }
    get firstName(): string {
      return this._firstName;
    }
    get lastName(): string {
      return this._lastName;
    }

    get roles(): Array<Role> {
      return this._roles;
    }

    private _id: string;
    private readonly _firstName: string;
    private readonly _lastName: string;
    private readonly _email: string;
    private readonly _password: string;
    private readonly _roles: Array<Role> = [];

    constructor(id: string, firstName: string, lastName: string, email: string, password: string, roles: Array<Role>) {
        this._id = id;
        this._firstName = firstName;
        this._lastName = lastName;
        this._email = email;
        this._password = password;
        this._roles = roles;
    }
}

export {User};
