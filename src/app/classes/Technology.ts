class Technology {

  get name(): string {
    return this._name;
  }

  get knowledgeLevel(): number {
    return this._knowledgeLevel;
  }

  private readonly _name: string;
  private readonly _knowledgeLevel: number;

  constructor(name: string, knowledgeLevel: number) {
    this._name = name;
    this._knowledgeLevel = knowledgeLevel;
  }
}

export { Technology };
