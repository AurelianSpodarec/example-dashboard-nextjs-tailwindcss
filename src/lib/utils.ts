import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatDate = (date: Date) => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long", // Adds the weekday (e.g., "Tuesday")
    month: "long",   // Full month name (e.g., "April")
    day: "numeric",  // Day of the month
    year: "numeric", // Full year (e.g., "2023")
    hour: "2-digit", // 2-digit hour
    minute: "2-digit", // 2-digit minute
    hour12: true,    // Use 12-hour clock (AM/PM)
  };

  return new Intl.DateTimeFormat("en-US", options).format(date);
}
