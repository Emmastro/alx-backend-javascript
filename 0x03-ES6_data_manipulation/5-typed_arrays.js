export default function createInt8TypedArray(position, length, value) {
  if (position >= length) throw Error('Position outside range');

  const buffer = new ArrayBuffer(length);
  const view = new DataView(buffer, 0, 10);

  try {
    view.setInt8(position, value);
    return view;
  } catch (e) {
    throw Error('Position outside range');
  }
};
