export type Category =
	| "CPU"
	| "Motherboard"
	| "RAM"
	| "GPU"
	| "Storage"
	| "Cooler"
	| "PSU";

export type Brand =
	| "AMD"
	| "NVIDIA"
	| "Intel"
	| "Asus"
	| "MSI"
	| "Corsair"
	| "G.Skill"
	| "Kllisre"
	| "Crucial"
	| "Samsung"
	| "DeepCool"
	| "Noctua";

export type SortBy = "featured" | "price-asc" | "price-desc" | "newest";

export interface HardwareItem {
	id: string;
	name: string;
	brand: Brand;
	category: Category;
	price: number;
	specs: string[];
	inStock: boolean;
}

export interface FilterState {
	search: string;
	categories: Category[];
	maxPrice: number;
	brands: Brand[];
	sortBy: SortBy;
}
