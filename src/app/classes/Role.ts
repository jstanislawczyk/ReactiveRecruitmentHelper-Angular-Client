class Role {
  get authority(): string {
    return this._authority;
  }

  private _authority: string;
}

export {Role};
