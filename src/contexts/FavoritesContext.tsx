import {
	createContext,
	useContext,
	useMemo,
	type ReactNode,
} from "react";
import { useFavorites } from "../hooks/useFavorites";

interface FavoritesContextValue {
	favoritesCount: number;
	toggleFavorite: (id: string) => void;
	isFavorite: (id: string) => boolean;
}

const FavoritesContext = createContext<FavoritesContextValue | null>(null);

export function FavoritesProvider({ children }: { children: ReactNode }) {
	const { toggleFavorite, isFavorite, favoritesCount } = useFavorites();

	const value = useMemo<FavoritesContextValue>(
		() => ({ toggleFavorite, isFavorite, favoritesCount }),
		[toggleFavorite, isFavorite, favoritesCount],
	);

	return (
		<FavoritesContext.Provider value={value}>
			{children}
		</FavoritesContext.Provider>
	);
}

export function useFavoritesContext(): FavoritesContextValue {
	const ctx = useContext(FavoritesContext);
	if (!ctx)
		throw new Error(
			"useFavoritesContext must be used inside FavoritesProvider",
		);
	return ctx;
}
