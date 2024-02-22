export function getNextAndPrevKeys<T>(
  obj: object,
  currentKey: keyof T,
): { next: keyof T | null; prev: keyof T | null } {
  const keys = Object.keys(obj) as Array<keyof T>;
  const currentIndex = keys.indexOf(currentKey);

  // Ensure the current key exists
  if (currentIndex === -1) {
    return { next: null, prev: null };
  }

  const nextIndex = currentIndex + 1;
  const prevIndex = currentIndex - 1;

  const nextKey = keys[nextIndex] !== undefined ? keys[nextIndex] : null;
  const prevKey = keys[prevIndex] !== undefined ? keys[prevIndex] : null;

  return { next: nextKey, prev: prevKey };
}

export function getRandomKey<T>(obj: object): keyof T {
  const keys = Object.keys(obj) as Array<keyof T>; // Get all keys of the object
  const randomIndex = Math.floor(Math.random() * keys.length); // Generate a random index based on the number of keys
  return keys[randomIndex]; // Return a random key
}
