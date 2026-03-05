import { FiltersSidebar } from "./components/FiltersSidebar";
import { HardwareCard } from "./components/HardwareCard";
import { NavBar } from "./components/NavBar";
import { Pagination } from "./components/Pagination";
import { mockHardwareData } from "./data/mockData";

export default function App() {
	return (
		<div className="min-h-screen bg-slate-900 text-slate-50">
			<NavBar />
			<div className="flex">
				<FiltersSidebar />
				<main className="flex-1 min-w-0 p-6">
					<div className="flex items-start justify-between mb-6 gap-4">
						<div>
							<h1 className="text-2xl font-bold text-slate-50">
								Resultado de Búsqueda
							</h1>
							<p className="text-slate-400 text-sm mt-1">
								Mostrando 24 resultados para{" "}
								<span className="text-slate-50 font-medium">"Ryzen"</span>
							</p>
						</div>
						<div className="flex items-center gap-2 shrink-0 mt-1">
							<label htmlFor="sort" className="text-slate-400 text-sm">
								Ordenar por:
							</label>
							<select
								id="sort"
								name="sort"
								className="bg-slate-800 text-slate-50 border border-slate-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-sky-500 cursor-pointer"
							>
								<option>Destacados</option>
								<option>Precio: De menor a mayor</option>
								<option>Precio: De mayor a menor</option>
								<option>Más recientes</option>
							</select>
						</div>
					</div>

					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
						{mockHardwareData.map((item) => (
							<HardwareCard
								key={item.id}
								hardwareItem={item}
								onAddCart={(id) => {
									console.log("Added to cart:", id);
								}}
							/>
						))}
					</div>

					<div className="mt-10 flex justify-center">
						<Pagination />
					</div>
				</main>
			</div>
		</div>
	);
}
