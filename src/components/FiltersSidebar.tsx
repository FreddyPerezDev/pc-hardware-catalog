const categories = [
	{ id: "cpu", label: "Processors (CPU)", count: 3 },
	{ id: "motherboard", label: "Motherboards", count: 2 },
	{ id: "gpu", label: "Graphics Cards (GPU)", count: 3 },
	{ id: "ram", label: "Memory (RAM)", count: 3 },
	{ id: "storage", label: "Storage", count: 2 },
	{ id: "psu", label: "Power Supplies (PSU)", count: 2 },
	{ id: "cooler", label: "Cooling", count: 2 },
];

const brands = [
	{ id: "amd", label: "AMD", count: 3 },
	{ id: "nvidia", label: "NVIDIA", count: 1 },
	{ id: "intel", label: "Intel", count: 1 },
	{ id: "asus", label: "Asus", count: 2 },
	{ id: "msi", label: "MSI", count: 2 },
	{ id: "corsair", label: "Corsair", count: 2 },
	{ id: "gskill", label: "G.Skill", count: 1 },
	{ id: "kllisre", label: "Kllisre", count: 1 },
	{ id: "crucial", label: "Crucial", count: 1 },
	{ id: "samsung", label: "Samsung", count: 1 },
	{ id: "deepcool", label: "DeepCool", count: 1 },
	{ id: "noctua", label: "Noctua", count: 1 },
];

export function FiltersSidebar() {
	return (
		<aside className="w-60 shrink-0 bg-slate-800 border-r border-slate-700 p-5 sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto">
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
				<button
					type="button"
					className="text-sky-500 text-sm font-medium hover:text-sky-400 transition-colors"
				>
					Limpiar todo
				</button>
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
						<li key={category.id} className="flex items-center justify-between">
							<label
								htmlFor={category.id}
								className="flex items-center gap-2.5 cursor-pointer"
							>
								<input
									type="checkbox"
									name={category.id}
									id={category.id}
									className="w-4 h-4 rounded accent-sky-500 cursor-pointer"
								/>
								<span className="text-sm text-slate-300">{category.label}</span>
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
					<span className="text-xs font-semibold text-sky-500">$0 – $2000</span>
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
					defaultValue="1000"
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
									className="w-4 h-4 rounded accent-sky-500 cursor-pointer"
								/>
								<span className="text-sm text-slate-300">{brand.label}</span>
							</label>
						</li>
					))}
				</ul>
			</section>
		</aside>
	);
}
