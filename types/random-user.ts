export interface NameObject {
  title: string;
  first: string;
  last: string;
}

export interface LoginObject {
  uuid: string;
  username: string;
  password: string;
  salt: string;
  md5: string;
  sha1: string;
  sha256: string;
}

export interface RegisteredObject {
  date: string;
  age: number;
}

export interface RandomUserObject {
  gender: string;
  name: NameObject;
  email: string;
  login: LoginObject;
  registered: RegisteredObject;
}

export interface RandomUserResponse {
  results: RandomUserObject[];
}
