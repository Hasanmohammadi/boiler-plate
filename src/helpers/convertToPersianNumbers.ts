function convertToPersianNumbers(input: string, addZero = true): string {
  const persianNumbers = '۰۱۲۳۴۵۶۷۸۹';

  return input.replace(/\d+/g, (match) => {
    const persianMatch = match
      .split('')
      .map((digit) => persianNumbers[parseInt(digit, 10)])
      .join('');
    return match.length === 1 && addZero
      ? `۰${persianMatch}`
      : persianMatch;
  });
}

export default convertToPersianNumbers;
