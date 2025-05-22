export default function getFormattedDate(date: Date | undefined) {
  if (!date) return;

  const currentDate = new Date(date);

  let year = currentDate.getFullYear();

  let month = (1 + currentDate.getMonth()).toString();
  month = month.length > 1 ? month : '0' + month;

  let day = currentDate.getDate().toString();
  day = day.length > 1 ? day : '0' + day;

  return day + '/' + month + '/' + year;
}
