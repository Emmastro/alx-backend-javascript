export default function getListStudentIds(arrayArg) {
  if (!Array.isArray(arrayArg)) {
    return [];
  }
  return arrayArg.map((item) => {
    return item.id;
  });
}
