import {
	createContext,
	useCallback,
	useContext,
	useMemo,
	useState,
	type ReactNode,
} from "react";
import { useCart } from "../hooks/useCart";
import type { CartEntry } from "../hooks/useCart";

interface CartContextValue {
	cartEntries: CartEntry[];
	cartCount: number;
	cartTotal: number;
	isOpen: boolean;
	openCart: () => void;
	closeCart: () => void;
	addToCart: (id: string) => void;
	removeFromCart: (id: string) => void;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
	const { addToCart, removeFromCart, cartEntries, cartCount, cartTotal } =
		useCart();
	const [isOpen, setIsOpen] = useState(false);

	const openCart = useCallback(() => setIsOpen(true), []);
	const closeCart = useCallback(() => setIsOpen(false), []);

	const value = useMemo<CartContextValue>(
		() => ({
			cartEntries,
			cartCount,
			cartTotal,
			isOpen,
			openCart,
			closeCart,
			addToCart,
			removeFromCart,
		}),
		[
			cartEntries,
			cartCount,
			cartTotal,
			isOpen,
			openCart,
			closeCart,
			addToCart,
			removeFromCart,
		],
	);

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCartContext(): CartContextValue {
	const ctx = useContext(CartContext);
	if (!ctx) throw new Error("useCartContext must be used inside CartProvider");
	return ctx;
}
