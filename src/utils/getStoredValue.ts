function getStoredValue<T extends string>(
    key: string,
    allowedValues: readonly T[],
    defaultValue: T
  ): T {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(key);
      if (stored !== null) {
        try {
          const parsed = JSON.parse(stored);
          if (allowedValues.includes(parsed)) {
            return parsed as T;
          }
        } catch {
          if (allowedValues.includes(stored as T)) {
            return stored as T;
          }
        }
      }
    }
    return defaultValue;
  }


export default getStoredValue