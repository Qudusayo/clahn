import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function formatDate(dateString: string) {
	const date = new Date(dateString);

	const day = date.getDate();
	const month = date.toLocaleString("default", { month: "short" });
	const year = date.getFullYear();

	const dayWithSuffix =
		day +
		(day % 10 === 1 && day !== 11
			? "st"
			: day % 10 === 2 && day !== 12
				? "nd"
				: day % 10 === 3 && day !== 13
					? "rd"
					: "th");

	return `${dayWithSuffix} ${month}, ${year}`;
}

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}
