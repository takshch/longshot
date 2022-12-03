const UNITS = ['TH', 'M', 'B', 'T'];

export const humanizeNumber = (num: string) => {
  const zeroSplits = num.split('0');

  let count = 0;
  if (zeroSplits.length > 0) {
    count = zeroSplits.length - 1;
  }

  if (count < 3) return num;

  count = count - 2

  for (let index = 0; index < count; index++) {
    zeroSplits.pop();
  }

  const leadingNum = zeroSplits.join('') || 0

  return `${leadingNum}${UNITS[count - 3] || ''}`;
}