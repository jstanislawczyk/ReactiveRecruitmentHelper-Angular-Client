class Role {
  get authority(): string {
    return this._authority;
  }

  private readonly _authority: string;
}

export {Role};
