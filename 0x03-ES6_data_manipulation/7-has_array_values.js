export default function hasValuesFromArray() {
  return array.every((item) => set.has(item));
}
