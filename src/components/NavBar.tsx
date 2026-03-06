import { useEffect, useState } from "react";
import { useCartContext } from "../contexts/CartContext";
import { useFavoritesContext } from "../contexts/FavoritesContext";

interface SearchInputProps {
	id: string;
	value: string;
	onChange: (value: string) => void;
}

function SearchInput({ id, value, onChange }: SearchInputProps) {
	const [localValue, setLocalValue] = useState(value);

	useEffect(() => {
		const timer = setTimeout(() => onChange(localValue), 300);
		return () => clearTimeout(timer);
	}, [localValue, onChange]);

	return (
		<div className="relative">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
				aria-hidden="true"
				className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none"
				viewBox="0 0 24 24"
			>
				<circle cx="11" cy="11" r="8" />
				<path d="m21 21-4.35-4.35" />
			</svg>
			<label htmlFor={id} className="sr-only">
				Búsqueda
			</label>
			<input
				type="search"
				name="search"
				id={id}
				placeholder="Buscar producto..."
				value={localValue}
				onChange={(e) => setLocalValue(e.target.value)}
				className="w-full bg-slate-700 text-slate-50 placeholder:text-slate-400 rounded-lg pl-9 pr-4 py-2 text-sm border border-slate-600 focus:outline-none focus:border-sky-500 transition-colors"
			/>
		</div>
	);
}

interface NavBarProps {
	search: string;
	onSearchChange: (value: string) => void;
	onLogoClick: () => void;
	searchResetKey: number;
}

export function NavBar({
	search,
	onSearchChange,
	onLogoClick,
	searchResetKey,
}: NavBarProps) {
	const { cartCount, openCart } = useCartContext();
	const { favoritesCount } = useFavoritesContext();

	return (
		<header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-50">
			<div className="flex items-center h-14 px-4 md:px-6 gap-4">
				<button
					type="button"
					onClick={onLogoClick}
					className="shrink-0 flex items-center gap-2 hover:opacity-80 transition-opacity"
					aria-label="Inicio — limpiar filtros"
				>
					<div className="flex items-center justify-center w-8 h-8 rounded-md bg-sky-500">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="17"
							height="17"
							fill="none"
							stroke="#fff"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2.5"
							aria-hidden="true"
							viewBox="0 0 24 24"
						>
							<rect width="20" height="14" x="2" y="3" rx="2" />
							<path d="M8 21h8m-4-4v4" />
						</svg>
					</div>
					<span className="hidden sm:inline text-xl font-bold text-slate-50 tracking-tight">
						Pc Hardware
					</span>
				</button>

				<div className="hidden md:flex flex-1 justify-center px-6">
					<div className="w-full max-w-md">
						<SearchInput
							key={`desktop-${searchResetKey}`}
							id="search-desktop"
							value={search}
							onChange={onSearchChange}
						/>
					</div>
				</div>

				<nav
					className="flex items-center gap-5 ml-auto md:ml-0"
					aria-label="Acciones de usuario"
				>
					<button
						type="button"
						onClick={openCart}
						className="relative text-slate-400 hover:text-slate-50 transition-colors"
						aria-label="Abrir carrito de compras"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="22"
							height="22"
							fill="none"
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							aria-hidden="true"
							viewBox="0 0 24 24"
						>
							<circle cx="8" cy="21" r="1" />
							<circle cx="19" cy="21" r="1" />
							<path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
						</svg>
						{cartCount > 0 && (
							<span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-sky-500 text-white text-[9px] font-bold flex items-center justify-center leading-none">
								{cartCount > 99 ? "99+" : cartCount}
							</span>
						)}
					</button>

					<button
						type="button"
						className="relative text-slate-400 hover:text-rose-400 transition-colors"
						aria-label="Favoritos"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="22"
							height="22"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							viewBox="0 0 24 24"
							aria-hidden="true"
							fill={favoritesCount > 0 ? "currentColor" : "none"}
							className={favoritesCount > 0 ? "text-rose-400" : ""}
						>
							<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78" />
						</svg>
						{favoritesCount > 0 && (
							<span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-rose-500 text-white text-[9px] font-bold flex items-center justify-center leading-none">
								{favoritesCount > 99 ? "99+" : favoritesCount}
							</span>
						)}
					</button>

					<div className="h-9 w-9 rounded-full bg-linear-to-tr from-sky-500 to-indigo-500 p-0.5 cursor-pointer shrink-0">
						<img
							className="rounded-full w-full h-full object-cover"
							src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgX2M_BQasG_AoPsmQNLdt9jeepaSbSoFxhCnlfC02UUCjaw6_gAHy9HwBVYRAi1vUeTP_N4az98JLZfARo3puCIaM-D1cIPEjhwsHD211NTc1R8ISgTGOm0Z3a-4i-WOIgqKp7PdMv6TZMF2wZGKJ5b_g1cE-T9ZvRHbeBM0vwY4jxNP3mIHXSccdxcEaA-tcWm7J87lNxC8zYwgr6kvfGtkJ1wGs0NaHRj2wX7yDkXSQsAyCJ3wnf-A93dPF7L8Tz-hufrakFU8"
							alt="Foto de perfil estático"
						/>
					</div>
				</nav>
			</div>

			<div className="md:hidden px-4 pb-3">
				<SearchInput
					key={`mobile-${searchResetKey}`}
					id="search-mobile"
					value={search}
					onChange={onSearchChange}
				/>
			</div>
		</header>
	);
}
