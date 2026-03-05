export type Category =
	| "CPU"
	| "Motherboard"
	| "RAM"
	| "GPU"
	| "Storage"
	| "Cooler"
	| "PSU";

export interface HardwareItem {
	id: string;
	name: string;
	brand: string;
	category: Category;
	price: number;
	specs: string[]; // Ej: ["6 Cores", "3.9 GHz", "AM4"]
	inStock: boolean;
}

export interface FilterState {
	search: string;
	category: Category | "ALL";
	minPrice: number;
	maxPrice: number;
	brand: string;
}
