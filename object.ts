export function objectKeys<T extends object>(obj: T): (keyof T)[] {
  return Object.keys(obj) as (keyof T)[];
}

export function mapRecord<
  T1 extends { [key in string | number | symbol]: unknown },
  T2 extends { [key in keyof T1]: unknown },
>(obj: T1, fn: (key: keyof T1, value: T1[keyof T1]) => T2[keyof T1]): T2 {
  return objectKeys(obj).reduce(
    (acc, key) => ({ ...acc, [key]: fn(key, obj[key]) }),
    {} as T2,
  );
}
