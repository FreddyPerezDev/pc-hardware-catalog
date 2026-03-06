import { useLayoutEffect, useState } from "react";
import { CartPanel } from "./components/CartPanel";
import { FiltersSidebar } from "./components/FiltersSidebar";
import { HardwareCard } from "./components/HardwareCard";
import { HardwareGridSkeleton } from "./components/HardwareCardSkeleton";
import { NavBar } from "./components/NavBar";
import { Pagination } from "./components/Pagination";
import { useFilters } from "./hooks/useFilters";
import type { SortBy } from "./types";

export default function App() {
	const {
		filters,
		paginatedItems,
		totalCount,
		totalPages,
		currentPage,
		isLoading,
		goToPage,
		setSearch,
		toggleCategory,
		setMaxPrice,
		toggleBrand,
		setSortBy,
		clearFilters,
	} = useFilters();

	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	// biome-ignore lint/correctness/useExhaustiveDependencies: currentPage triggers scroll, not used in body
	useLayoutEffect(() => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}, [currentPage]);

	return (
		<div className="min-h-screen bg-slate-900 text-slate-50">
			<CartPanel />
			<NavBar
				search={filters.search}
				onSearchChange={setSearch}
				onLogoClick={clearFilters}
			/>
			<div className="flex">
				<FiltersSidebar
					filters={filters}
					onToggleCategory={toggleCategory}
					onMaxPriceChange={setMaxPrice}
					onToggleBrand={toggleBrand}
					onClearFilters={clearFilters}
					isOpen={isSidebarOpen}
					onClose={() => setIsSidebarOpen(false)}
				/>
				<main className="flex-1 min-w-0 p-4 md:p-6">
					{isLoading ? (
						<HardwareGridSkeleton />
					) : (
						<>
							<div className="flex flex-wrap items-start justify-between mb-6 gap-3">
								<div>
									<h1 className="text-xl md:text-2xl font-bold text-slate-50">
										Catálogo de Hardware
									</h1>
									<p className="text-slate-400 text-sm mt-1">
										{totalCount === 0
											? "Sin resultados"
											: `Mostrando ${totalCount} producto${totalCount !== 1 ? "s" : ""}`}
										{filters.search && (
											<>
												{" "}
												para{" "}
												<span className="text-slate-50 font-medium">
													"{filters.search}"
												</span>
											</>
										)}
									</p>
								</div>
								<div className="flex items-center gap-3 shrink-0 mt-1 flex-wrap">
									<button
										type="button"
										onClick={() => setIsSidebarOpen(true)}
										className="md:hidden flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-700 border border-slate-600 text-slate-300 text-sm hover:border-sky-500 hover:text-sky-400 transition-colors"
										aria-label="Abrir filtros"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="14"
											height="14"
											fill="none"
											stroke="currentColor"
											strokeWidth="2.5"
											strokeLinecap="round"
											strokeLinejoin="round"
											viewBox="0 0 24 24"
											aria-hidden="true"
										>
											<path d="M4 6h16M8 12h8m-5 6h2" />
										</svg>
										Filtros
										{(filters.categories.length > 0 ||
											filters.brands.length > 0) && (
											<span className="w-4 h-4 rounded-full bg-sky-500 text-white text-[9px] font-bold flex items-center justify-center">
												{filters.categories.length + filters.brands.length}
											</span>
										)}
									</button>
									<label htmlFor="sort" className="text-slate-400 text-sm">
										Ordenar por:
									</label>
									<select
										id="sort"
										name="sort"
										value={filters.sortBy}
										onChange={(e) => setSortBy(e.target.value as SortBy)}
										className="bg-slate-800 text-slate-50 border border-slate-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-sky-500 cursor-pointer"
									>
										<option value="featured">Destacados</option>
										<option value="price-asc">Precio: De menor a mayor</option>
										<option value="price-desc">Precio: De mayor a menor</option>
										<option value="newest">Más recientes</option>
									</select>
								</div>
							</div>

							{paginatedItems.length === 0 ? (
								<div className="flex flex-col items-center justify-center py-24 text-center">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="48"
										height="48"
										fill="none"
										stroke="currentColor"
										strokeWidth="1.5"
										strokeLinecap="round"
										strokeLinejoin="round"
										viewBox="0 0 24 24"
										aria-hidden="true"
										className="text-slate-600 mb-4"
									>
										<circle cx="11" cy="11" r="8" />
										<path d="m21 21-4.35-4.35M11 8v6M8 11h6" />
									</svg>
									<p className="text-slate-300 font-semibold text-lg mb-1">
										Sin resultados
									</p>
									<p className="text-slate-500 text-sm mb-5">
										Ningún producto coincide con los filtros seleccionados.
									</p>
									<button
										type="button"
										onClick={clearFilters}
										className="px-4 py-2 rounded-lg bg-sky-500 hover:bg-sky-400 text-white text-sm font-medium transition-colors"
									>
										Limpiar filtros
									</button>
								</div>
							) : (
								<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
									{paginatedItems.map((item) => (
										<HardwareCard key={item.id} hardwareItem={item} />
									))}
								</div>
							)}

							{totalPages > 1 && (
								<div className="mt-10 flex justify-center">
									<Pagination
										currentPage={currentPage}
										totalPages={totalPages}
										onPageChange={goToPage}
									/>
								</div>
							)}
						</>
					)}
				</main>
			</div>
		</div>
	);
}
