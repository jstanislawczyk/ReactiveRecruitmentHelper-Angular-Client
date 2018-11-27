class Role {

  get authority(): string {
    return this._authority;
  }

  private readonly _authority: string;

  constructor(authority: string) {
    this._authority = authority;
  }
}

export { Role };
