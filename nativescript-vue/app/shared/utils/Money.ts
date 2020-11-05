export class Money {
  public constructor(private _cents: number) {}

  public format(decimals = false): string {
    return `$${this._cents / 100}${decimals ? '.00' : ''}`;
  }
}
