export function Pagination() {
	return (
		<nav aria-label="Paginación de resultados">
			<ul className="flex items-center gap-1">
				<li>
					<button
						type="button"
						aria-label="Página anterior"
						className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 text-slate-400 hover:border-sky-500 hover:text-sky-500 flex items-center justify-center transition-colors"
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
							<path d="m15 18-6-6 6-6" />
						</svg>
					</button>
				</li>
				<li>
					<button
						type="button"
						aria-current="page"
						aria-label="Página 1, página actual"
						className="w-9 h-9 rounded-lg bg-sky-500 text-white font-semibold text-sm flex items-center justify-center"
					>
						1
					</button>
				</li>
				<li>
					<button
						type="button"
						aria-label="Página 2"
						className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 text-slate-400 hover:border-sky-500 hover:text-sky-500 text-sm flex items-center justify-center transition-colors"
					>
						2
					</button>
				</li>
				<li>
					<button
						type="button"
						aria-label="Página 3"
						className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 text-slate-400 hover:border-sky-500 hover:text-sky-500 text-sm flex items-center justify-center transition-colors"
					>
						3
					</button>
				</li>
				<li aria-hidden="true">
					<span className="w-9 h-9 flex items-center justify-center text-slate-400 text-sm select-none">
						...
					</span>
				</li>
				<li>
					<button
						type="button"
						aria-label="Página 6"
						className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 text-slate-400 hover:border-sky-500 hover:text-sky-500 text-sm flex items-center justify-center transition-colors"
					>
						6
					</button>
				</li>
				<li>
					<button
						type="button"
						aria-label="Página siguiente"
						className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 text-slate-400 hover:border-sky-500 hover:text-sky-500 flex items-center justify-center transition-colors"
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
							<path d="m9 18 6-6-6-6" />
						</svg>
					</button>
				</li>
			</ul>
		</nav>
	);
}
