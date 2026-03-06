import { useCallback, useMemo, useState } from "react";
import { findItemById } from "../services/catalog";
import type { HardwareItem } from "../types";

export interface CartEntry {
	item: HardwareItem;
	quantity: number;
}

export function useCart() {
	const [cart, setCart] = useState<Record<string, number>>({});

	const addToCart = useCallback((id: string) => {
		setCart((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));
	}, []);

	const removeFromCart = useCallback((id: string) => {
		setCart((prev) => {
			if (!prev[id]) return prev;
			if (prev[id] === 1) {
				const { [id]: _removed, ...rest } = prev;
				return rest;
			}
			return { ...prev, [id]: prev[id] - 1 };
		});
	}, []);

	const cartEntries = useMemo<CartEntry[]>(
		() =>
			Object.entries(cart)
				.filter(([, qty]) => qty > 0)
				.flatMap(([id, quantity]) => {
					const item = findItemById(id);
					return item ? [{ item, quantity }] : [];
				}),
		[cart],
	);

	const cartCount = useMemo(
		() => Object.values(cart).reduce((sum, qty) => sum + qty, 0),
		[cart],
	);

	const cartTotal = useMemo(
		() =>
			cartEntries.reduce(
				(sum, { item, quantity }) => sum + item.price * quantity,
				0,
			),
		[cartEntries],
	);

	return { addToCart, removeFromCart, cartEntries, cartCount, cartTotal };
}
