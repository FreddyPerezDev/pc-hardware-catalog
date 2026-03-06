import { memo } from "react";
import { useCartContext } from "../contexts/CartContext";
import { useFavoritesContext } from "../contexts/FavoritesContext";
import type { HardwareItem } from "../types";

interface HardwareCardProps {
	hardwareItem: HardwareItem;
}

export const HardwareCard = memo(function HardwareCard({
	hardwareItem,
}: HardwareCardProps) {
	const { addToCart } = useCartContext();
	const { isFavorite, toggleFavorite } = useFavoritesContext();
	const { id, name, brand, category, price, specs, inStock } = hardwareItem;
	const favorite = isFavorite(id);

	return (
		<article className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-sky-500/50 transition-colors flex flex-col">
			<div className="relative h-44 bg-slate-700/60 flex items-center justify-center overflow-hidden">
				{!inStock && (
					<div className="absolute inset-0 bg-slate-900/70 flex items-center justify-center z-10">
						<span className="text-slate-300 text-xs font-bold tracking-widest uppercase border border-slate-500 px-3 py-1 rounded">
							Agotado
						</span>
					</div>
				)}
				<span
					className="text-slate-600 font-black text-3xl uppercase tracking-widest select-none opacity-30"
					aria-hidden="true"
				>
					{brand}
				</span>
				<button
					type="button"
					onClick={() => toggleFavorite(id)}
					aria-label={favorite ? "Quitar de favoritos" : "Agregar a favoritos"}
					className={`absolute top-3 right-3 w-8 h-8 rounded-full bg-slate-800/80 backdrop-blur-sm flex items-center justify-center transition-colors z-20 ${
						favorite ? "text-rose-400" : "text-slate-400 hover:text-rose-400"
					}`}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="15"
						height="15"
						fill={favorite ? "currentColor" : "none"}
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						aria-hidden="true"
						viewBox="0 0 24 24"
					>
						<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78" />
					</svg>
				</button>
				<span className="sr-only">{category}</span>
			</div>

			<div className="p-4 flex flex-col flex-1">
				<p className="text-xs text-slate-400 mb-1">{brand}</p>
				<h2 className="text-slate-50 font-semibold text-sm leading-snug line-clamp-2 mb-3 min-h-10">
					{name}
				</h2>

				<ul
					className="flex flex-wrap gap-1.5 mb-4"
					aria-label="Especificaciones"
				>
					{specs.map((spec) => (
						<li
							key={spec}
							className="text-xs text-slate-300 bg-slate-700 px-2 py-0.5 rounded"
						>
							{spec}
						</li>
					))}
				</ul>

				<div className="flex items-center justify-between mt-auto pt-2 border-t border-slate-700">
					<div>
						{inStock ? (
							<p className="flex items-center gap-1.5 text-xs text-emerald-500 mb-1.5">
								<span
									className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"
									aria-hidden="true"
								/>
								Disponible
							</p>
						) : (
							<p className="flex items-center gap-1.5 text-xs text-slate-400 mb-1.5">
								<span
									className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0"
									aria-hidden="true"
								/>
								Agotado
							</p>
						)}
						<p className="text-xl font-bold text-slate-50">${price}</p>
					</div>

					<button
						type="button"
						onClick={() => addToCart(id)}
						disabled={!inStock}
						aria-label={`Agregar ${name} al carrito`}
						className="w-10 h-10 rounded-lg bg-sky-500 hover:bg-sky-400 disabled:bg-slate-600 disabled:cursor-not-allowed flex items-center justify-center text-white transition-colors shrink-0"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="17"
							height="17"
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
					</button>
				</div>
			</div>
		</article>
	);
});
