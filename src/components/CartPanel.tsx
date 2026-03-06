import { useMemo } from "react";
import { useCartContext } from "../contexts/CartContext";

export function CartPanel() {
	const {
		isOpen,
		closeCart,
		cartEntries,
		cartTotal,
		addToCart,
		removeFromCart,
	} = useCartContext();

	const totalQty = useMemo(
		() => cartEntries.reduce((s, e) => s + e.quantity, 0),
		[cartEntries],
	);

	return (
		<>
			<div
				className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
					isOpen
						? "opacity-100 pointer-events-auto"
						: "opacity-0 pointer-events-none"
				}`}
				onClick={closeCart}
				aria-hidden="true"
			/>

			<aside
				aria-label="Carrito de compras"
				aria-hidden={!isOpen}
				className={`fixed right-0 top-0 h-full w-80 z-60 bg-slate-800 border-l border-slate-700 flex flex-col shadow-2xl transform transition-transform duration-300 ease-in-out ${
					isOpen ? "translate-x-0" : "translate-x-full"
				}`}
			>
				<div className="flex items-center justify-between px-5 py-4 border-b border-slate-700">
					<div className="flex items-center gap-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="18"
							height="18"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							viewBox="0 0 24 24"
							aria-hidden="true"
							className="text-slate-400"
						>
							<circle cx="8" cy="21" r="1" />
							<circle cx="19" cy="21" r="1" />
							<path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
						</svg>
						<h2 className="font-semibold text-slate-50">Carrito</h2>
						{totalQty > 0 && (
							<span className="text-[11px] bg-sky-500 text-white px-2 py-0.5 rounded-full font-bold">
								{totalQty}
							</span>
						)}
					</div>
					<button
						type="button"
						onClick={closeCart}
						aria-label="Cerrar carrito"
						className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-400 hover:text-slate-50 hover:bg-slate-700 transition-colors"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							viewBox="0 0 24 24"
							aria-hidden="true"
						>
							<path d="M18 6 6 18M6 6l12 12" />
						</svg>
					</button>
				</div>

				{cartEntries.length === 0 ? (
					<div className="flex-1 flex flex-col items-center justify-center gap-3 text-slate-500 px-5">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="44"
							height="44"
							fill="none"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
							viewBox="0 0 24 24"
							aria-hidden="true"
							className="text-slate-600"
						>
							<circle cx="8" cy="21" r="1" />
							<circle cx="19" cy="21" r="1" />
							<path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
						</svg>
						<p className="text-sm font-medium text-slate-400">
							Tu carrito está vacío
						</p>
						<p className="text-xs text-center">
							Agrega productos usando el botón en cada tarjeta.
						</p>
					</div>
				) : (
					<>
						<ul className="flex-1 overflow-y-auto divide-y divide-slate-700/60">
							{cartEntries.map(({ item, quantity }) => (
								<li key={item.id} className="px-5 py-4 flex items-start gap-3">
									<div className="w-11 h-11 rounded-lg bg-slate-700 flex items-center justify-center shrink-0">
										<span className="text-slate-500 text-[10px] font-black uppercase tracking-widest">
											{item.brand.slice(0, 3)}
										</span>
									</div>

									<div className="flex-1 min-w-0">
										<p className="text-slate-200 text-xs font-medium leading-snug line-clamp-2">
											{item.name}
										</p>
										<p className="text-sky-400 text-sm font-bold mt-1">
											${(item.price * quantity).toLocaleString()}
										</p>
										{quantity > 1 && (
											<p className="text-slate-500 text-xs">
												${item.price.toLocaleString()} c/u
											</p>
										)}
									</div>

									<div className="flex items-center gap-1 shrink-0 mt-0.5">
										<button
											type="button"
											onClick={() => removeFromCart(item.id)}
											aria-label={`Quitar una unidad de ${item.name}`}
											className="w-6 h-6 rounded bg-slate-700 hover:bg-slate-600 text-slate-300 text-sm flex items-center justify-center transition-colors"
										>
											−
										</button>
										<span className="w-6 text-center text-slate-50 text-sm font-semibold">
											{quantity}
										</span>
										<button
											type="button"
											onClick={() => addToCart(item.id)}
											aria-label={`Agregar otra unidad de ${item.name}`}
											className="w-6 h-6 rounded bg-slate-700 hover:bg-slate-600 text-slate-300 text-sm flex items-center justify-center transition-colors"
										>
											+
										</button>
									</div>
								</li>
							))}
						</ul>

						<div className="px-5 py-4 border-t border-slate-700">
							<div className="flex justify-between items-center mb-4">
								<span className="text-slate-400 text-sm">Total</span>
								<span className="text-slate-50 font-bold text-lg">
									${cartTotal.toLocaleString()}
								</span>
							</div>
							<button
								type="button"
								className="w-full py-2.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-white font-semibold text-sm transition-colors"
							>
								Finalizar compra
							</button>
						</div>
					</>
				)}
			</aside>
		</>
	);
}
