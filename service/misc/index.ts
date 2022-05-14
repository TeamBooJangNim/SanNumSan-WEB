export const getDateString = (date: Date) => {
  const fillZero = (target: number, count: number) => target.toString().padStart(count, '0');
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  return [fillZero(year, 4), fillZero(month, 2), fillZero(day, 2)].join('.');
};
