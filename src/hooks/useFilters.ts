import { useCallback, useEffect, useMemo, useReducer } from "react";
import { fetchCatalog } from "../services/catalog";
import type {
	Brand,
	Category,
	FilterState,
	HardwareItem,
	SortBy,
} from "../types";

const ITEMS_PER_PAGE = 6;

const INITIAL_FILTERS: FilterState = {
	search: "",
	categories: [],
	maxPrice: 2000,
	brands: [],
	sortBy: "featured",
};

type State = {
	filters: FilterState;
	currentPage: number;
	items: HardwareItem[];
	isLoading: boolean;
};

type Action =
	| { type: "SET_SEARCH"; payload: string }
	| { type: "TOGGLE_CATEGORY"; payload: Category }
	| { type: "SET_MAX_PRICE"; payload: number }
	| { type: "TOGGLE_BRAND"; payload: Brand }
	| { type: "SET_SORT_BY"; payload: SortBy }
	| { type: "GO_TO_PAGE"; payload: number }
	| { type: "CLEAR" }
	| { type: "SET_ITEMS"; payload: HardwareItem[] };

const INITIAL_STATE: State = {
	filters: INITIAL_FILTERS,
	currentPage: 1,
	items: [],
	isLoading: true,
};

function filtersReducer(state: State, action: Action): State {
	switch (action.type) {
		case "SET_SEARCH":
			return {
				...state,
				filters: { ...state.filters, search: action.payload },
				currentPage: 1,
			};
		case "TOGGLE_CATEGORY": {
			const categories = state.filters.categories.includes(action.payload)
				? state.filters.categories.filter((c) => c !== action.payload)
				: [...state.filters.categories, action.payload];
			return {
				...state,
				filters: { ...state.filters, categories },
				currentPage: 1,
			};
		}
		case "SET_MAX_PRICE":
			return {
				...state,
				filters: { ...state.filters, maxPrice: action.payload },
				currentPage: 1,
			};
		case "TOGGLE_BRAND": {
			const brands = state.filters.brands.includes(action.payload)
				? state.filters.brands.filter((b) => b !== action.payload)
				: [...state.filters.brands, action.payload];
			return {
				...state,
				filters: { ...state.filters, brands },
				currentPage: 1,
			};
		}
		case "SET_SORT_BY":
			return {
				...state,
				filters: { ...state.filters, sortBy: action.payload },
				currentPage: 1,
			};
		case "GO_TO_PAGE":
			return { ...state, currentPage: action.payload };
		case "CLEAR":
			return { ...state, filters: INITIAL_FILTERS, currentPage: 1 };
		case "SET_ITEMS":
			return { ...state, items: action.payload, isLoading: false };
		default:
			return state;
	}
}

export function useFilters() {
	const [state, dispatch] = useReducer(filtersReducer, INITIAL_STATE);
	const { filters, currentPage, items, isLoading } = state;

	useEffect(() => {
		fetchCatalog().then((data) =>
			dispatch({ type: "SET_ITEMS", payload: data }),
		);
	}, []);

	const filteredItems = useMemo(() => {
		let result = items;

		if (filters.search.trim()) {
			const q = filters.search.toLowerCase();
			result = result.filter(
				(item) =>
					item.name.toLowerCase().includes(q) ||
					item.brand.toLowerCase().includes(q) ||
					item.category.toLowerCase().includes(q) ||
					item.specs.some((s) => s.toLowerCase().includes(q)),
			);
		}

		if (filters.categories.length > 0) {
			result = result.filter((item) =>
				filters.categories.includes(item.category),
			);
		}

		result = result.filter((item) => item.price <= filters.maxPrice);

		if (filters.brands.length > 0) {
			result = result.filter((item) => filters.brands.includes(item.brand));
		}

		const sorted = [...result];
		switch (filters.sortBy) {
			case "price-asc":
				sorted.sort((a, b) => a.price - b.price);
				break;
			case "price-desc":
				sorted.sort((a, b) => b.price - a.price);
				break;
			case "newest":
				sorted.reverse();
				break;
			default:
				break;
		}

		return sorted;
	}, [filters, items]);

	const { totalPages, safeCurrentPage } = useMemo(() => {
		const total = Math.max(1, Math.ceil(filteredItems.length / ITEMS_PER_PAGE));
		const safe = Math.min(currentPage, total);
		return { totalPages: total, safeCurrentPage: safe };
	}, [filteredItems.length, currentPage]);

	const paginatedItems = useMemo(() => {
		const start = (safeCurrentPage - 1) * ITEMS_PER_PAGE;
		return filteredItems.slice(start, start + ITEMS_PER_PAGE);
	}, [filteredItems, safeCurrentPage]);

	const setSearch = useCallback(
		(search: string) => dispatch({ type: "SET_SEARCH", payload: search }),
		[],
	);
	const toggleCategory = useCallback(
		(category: Category) =>
			dispatch({ type: "TOGGLE_CATEGORY", payload: category }),
		[],
	);
	const setMaxPrice = useCallback(
		(maxPrice: number) =>
			dispatch({ type: "SET_MAX_PRICE", payload: maxPrice }),
		[],
	);
	const toggleBrand = useCallback(
		(brand: Brand) => dispatch({ type: "TOGGLE_BRAND", payload: brand }),
		[],
	);
	const setSortBy = useCallback(
		(sortBy: SortBy) => dispatch({ type: "SET_SORT_BY", payload: sortBy }),
		[],
	);
	const goToPage = useCallback(
		(page: number) => dispatch({ type: "GO_TO_PAGE", payload: page }),
		[],
	);
	const clearFilters = useCallback(() => dispatch({ type: "CLEAR" }), []);

	return {
		filters,
		paginatedItems,
		totalCount: filteredItems.length,
		totalPages,
		currentPage: safeCurrentPage,
		isLoading,
		goToPage,
		setSearch,
		toggleCategory,
		setMaxPrice,
		toggleBrand,
		setSortBy,
		clearFilters,
	};
}
