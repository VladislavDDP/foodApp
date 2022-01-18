export class User {
  public id: number;
  public username: string;
  public email: string;
  public createdAt: Date;
  public updatedAt: Date;

  public constructor(id: number, username: string, email: string, createdAt: string, updatedAt: string) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.createdAt = new Date(createdAt);
    this.updatedAt = new Date(updatedAt);
  }
}
