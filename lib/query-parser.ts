/**
 * Converts a string-like value from a query param to pure number.
 *
 * @param maybeString A string or an array of string
 */
export function parseNumber(maybeString?: string | string[]) {
  if (maybeString) {
    if (Array.isArray(maybeString)) {
      const [num] = maybeString;
      return Number(num);
    }

    return Number(maybeString);
  }

  return undefined;
}

/**
 * Converts a string-like value from a query param to pure string.
 *
 * @param maybeString A string or an array of string
 */
export function parseString(maybeString?: string | string[]) {
  if (maybeString) {
    if (Array.isArray(maybeString)) {
      const [string] = maybeString;
      return string;
    }

    return maybeString;
  }

  return undefined;
}
