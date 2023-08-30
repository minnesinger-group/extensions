export type NonOptionalKeys<T, R extends Required<T> = Required<T>> = {
  [key in keyof T]: T[key] extends R[key] ? key : never;
}[keyof T];

export type IsOptional<T> = NonOptionalKeys<T> extends undefined ? true : false;
