function formatDate(inputDate) {
  if (!inputDate) return "aN.aN.NaN";
  const date = new Date(inputDate);
  if (isNaN(date.getTime())) return "aN.aN.NaN"; 
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear().toString();
  return `${day}.${month}.${year}`;
}