import type { Brand, Category, FilterState } from "../types";

const categories: {
	id: string;
	label: string;
	count: number;
	value: Category;
}[] = [
	{ id: "cpu", label: "Procesadores (CPU)", count: 3, value: "CPU" },
	{ id: "motherboard", label: "Placas Base", count: 2, value: "Motherboard" },
	{ id: "gpu", label: "Tarjetas Gráficas (GPU)", count: 3, value: "GPU" },
	{ id: "ram", label: "Memoria (RAM)", count: 3, value: "RAM" },
	{ id: "storage", label: "Almacenamiento", count: 2, value: "Storage" },
	{ id: "psu", label: "Fuentes de Poder (PSU)", count: 2, value: "PSU" },
	{ id: "cooler", label: "Refrigeración", count: 2, value: "Cooler" },
];

const brands: { id: string; label: Brand }[] = [
	{ id: "amd", label: "AMD" },
	{ id: "nvidia", label: "NVIDIA" },
	{ id: "intel", label: "Intel" },
	{ id: "asus", label: "Asus" },
	{ id: "msi", label: "MSI" },
	{ id: "corsair", label: "Corsair" },
	{ id: "gskill", label: "G.Skill" },
	{ id: "kllisre", label: "Kllisre" },
	{ id: "crucial", label: "Crucial" },
	{ id: "samsung", label: "Samsung" },
	{ id: "deepcool", label: "DeepCool" },
	{ id: "noctua", label: "Noctua" },
];

interface FiltersSidebarProps {
	filters: FilterState;
	onToggleCategory: (category: Category) => void;
	onMaxPriceChange: (price: number) => void;
	onToggleBrand: (brand: Brand) => void;
	onClearFilters: () => void;
	isOpen: boolean;
	onClose: () => void;
}

export function FiltersSidebar({
	filters,
	onToggleCategory,
	onMaxPriceChange,
	onToggleBrand,
	onClearFilters,
	isOpen,
	onClose,
}: FiltersSidebarProps) {
	return (
		<>
			{isOpen && (
				<div
					className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 md:hidden"
					onClick={onClose}
					aria-hidden="true"
				/>
			)}

			<aside
				className={`fixed top-0 left-0 h-full w-72 z-60 transition-transform duration-300 ease-in-out bg-slate-800 border-r border-slate-700 p-5 overflow-y-auto shrink-0 md:sticky md:top-14 md:w-60 md:h-[calc(100vh-3.5rem)] md:z-auto md:transition-none ${
					isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
				}`}
			>
				<div className="flex items-center justify-between mb-6">
					<div className="flex items-center gap-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="15"
							height="15"
							fill="none"
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2.5"
							aria-hidden="true"
							className="text-slate-400"
							viewBox="0 0 24 24"
						>
							<path d="M4 6h16M8 12h8m-5 6h2" />
						</svg>
						<h2 className="font-semibold text-slate-50">Filtros</h2>
					</div>
					<div className="flex items-center gap-2">
						<button
							type="button"
							onClick={onClearFilters}
							className="text-sky-500 text-sm font-medium hover:text-sky-400 transition-colors"
						>
							Limpiar todo
						</button>
						<button
							type="button"
							onClick={onClose}
							aria-label="Cerrar filtros"
							className="md:hidden w-7 h-7 flex items-center justify-center rounded-lg text-slate-400 hover:text-slate-50 hover:bg-slate-700 transition-colors"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="15"
								height="15"
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
				</div>

				<section className="mb-7" aria-labelledby="categories-label">
					<h3
						id="categories-label"
						className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3"
					>
						Categorías
					</h3>
					<ul className="space-y-3">
						{categories.map((category) => (
							<li
								key={category.id}
								className="flex items-center justify-between"
							>
								<label
									htmlFor={category.id}
									className="flex items-center gap-2.5 cursor-pointer"
								>
									<input
										type="checkbox"
										name={category.id}
										id={category.id}
										checked={filters.categories.includes(category.value)}
										onChange={() => onToggleCategory(category.value)}
										className="w-4 h-4 rounded accent-sky-500 cursor-pointer"
									/>
									<span className="text-sm text-slate-300">
										{category.label}
									</span>
								</label>
								<span className="text-xs text-slate-500">{category.count}</span>
							</li>
						))}
					</ul>
				</section>

				<section className="mb-7" aria-labelledby="price-range-label">
					<div className="flex items-center justify-between mb-3">
						<h3
							id="price-range-label"
							className="text-xs font-semibold uppercase tracking-widest text-slate-400"
						>
							Rango de precio
						</h3>
						<span className="text-xs font-semibold text-sky-500">
							$0 – ${filters.maxPrice.toLocaleString()}
						</span>
					</div>
					<label htmlFor="price" className="sr-only">
						Rango de precio
					</label>
					<input
						type="range"
						name="price"
						id="price"
						min="0"
						max="2000"
						step="10"
						value={filters.maxPrice}
						onChange={(e) => onMaxPriceChange(Number(e.target.value))}
						className="w-full accent-sky-500 cursor-pointer"
					/>
					<div className="flex justify-between mt-2">
						<span className="text-xs text-slate-500">$0</span>
						<span className="text-xs text-slate-500">$2000</span>
					</div>
				</section>

				<section aria-labelledby="brands-label">
					<h3
						id="brands-label"
						className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3"
					>
						Marcas
					</h3>
					<ul className="space-y-3">
						{brands.map((brand) => (
							<li key={brand.id}>
								<label
									htmlFor={brand.id}
									className="flex items-center gap-2.5 cursor-pointer"
								>
									<input
										type="checkbox"
										name={brand.id}
										id={brand.id}
										checked={filters.brands.includes(brand.label)}
										onChange={() => onToggleBrand(brand.label)}
										className="w-4 h-4 rounded accent-sky-500 cursor-pointer"
									/>
									<span className="text-sm text-slate-300">{brand.label}</span>
								</label>
							</li>
						))}
					</ul>
				</section>
			</aside>
		</>
	);
}
