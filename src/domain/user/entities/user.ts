import { Identifier } from "@core/types";

export default class User {
  idUser?: Identifier;
  user?: string;

  constructor(props: User, idUser?: string) {
    this.idUser = idUser;
    Object.assign(this, props);
  }
}
