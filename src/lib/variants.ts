export type VariantMap<T extends string> = Record<T, string>;

export function variant<T extends string>(
  map: VariantMap<T>,
  value: T,
): string {
  return map[value];
}
