function getStoredValue<T extends string>(
  key: string,
  allowedValues: readonly T[],
  defaultValue: T,
   storageKey: string = 'app-state' 
): T {
  if (typeof window !== 'undefined') {
    try {
      const stored = localStorage.getItem(storageKey);
      if (stored !== null) {
        const parsed = JSON.parse(stored);
        const storedValue = parsed?.state?.[key] ?? parsed;
        
        if (allowedValues.includes(storedValue)) {

          return storedValue as T;
        }
      }
    } catch (e) {
      console.warn(`Could not parse localStorage key "${key}":`, e);
    }
  }
  return defaultValue;
}


export default getStoredValue