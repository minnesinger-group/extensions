export function mapRecord<T extends Record<string, TV>, TV, R>(
  obj: T,
  fn: <K extends keyof T>(key: K, value: T[K]) => R,
): { [key in keyof T]: R } {
  return Object.entries(obj).reduce(
    (acc, [key, value]) => ({ ...acc, [key]: fn(key, value as T[typeof key]) }),
    {} as { [key in keyof T]: R },
  );
}
