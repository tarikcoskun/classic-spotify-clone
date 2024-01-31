export function clamp(min: number, val: number, max: number) {
  val = +val;
  min = +min;
  max = +max;
  min = min === min ? min : 0;
  max = max === max ? max : 0;

  if (val === val) {
    val = val <= max ? val : max;
    val = val >= min ? val : min;
  }

  return val;
}
