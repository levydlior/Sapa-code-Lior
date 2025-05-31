export function formatEventDate(dateInput: string | Date) {
  const parts =
    typeof dateInput === "string"
      ? dateInput.split("-").map(Number)
      : [
          dateInput.getFullYear(),
          dateInput.getMonth() + 1,
          dateInput.getDate(),
        ];

  const localDate = new Date(parts[0], parts[1] - 1, parts[2]);

  const day = localDate.getDate();
  const weekday = localDate.toLocaleDateString("en-US", { weekday: "long" });
  const month = localDate.toLocaleDateString("en-US", { month: "long" });
  const year = localDate.getFullYear();

  const getOrdinal = (n: number) => {
    if (n % 10 === 1 && n % 100 !== 11) return "st";
    if (n % 10 === 2 && n % 100 !== 12) return "nd";
    if (n % 10 === 3 && n % 100 !== 13) return "rd";
    return "th";
  };

  return {
    weekday,
    month,
    day,
    suffix: getOrdinal(day),
    year,
  };
}
