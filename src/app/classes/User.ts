class User {
    private id: string;
    private firstName: string;
    private lastName: string;
    private email: string;
    private password: string;

    constructor(id: string, firstName: string, lastName: string, email: string, password: string) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }

    getId() {
        return this.id;
    }

    getFirstName() {
        return this.firstName;
    }

    getLastName() {
        return this.lastName;
    }

    getEmail() {
        return this.email;
    }

    getPassword() {
        return this.password;
    }

    setId(id: string) {
        return this.id = id;
    }

    setFirstName(firstName: string) {
        return this.firstName = firstName;
    }

    setLastName(lastName: string) {
        return this.lastName = lastName;
    }

    setEmail(email: string) {
        return this.email = email;
    }

    setPassword(password: string) {
        return this.password = password;
    }
}

export {User}
