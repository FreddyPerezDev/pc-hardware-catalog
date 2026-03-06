import { useState, useCallback } from "react";

export function useFavorites() {
	const [favorites, setFavorites] = useState<Set<string>>(new Set());

	const toggleFavorite = useCallback((id: string) => {
		setFavorites((prev) => {
			const next = new Set(prev);
			if (next.has(id)) {
				next.delete(id);
			} else {
				next.add(id);
			}
			return next;
		});
	}, []);

	const isFavorite = useCallback(
		(id: string): boolean => favorites.has(id),
		[favorites],
	);

	return { toggleFavorite, isFavorite, favoritesCount: favorites.size };
}
