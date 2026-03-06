interface PaginationProps {
	currentPage: number;
	totalPages: number;
	onPageChange: (page: number) => void;
}

function getPageRange(
	current: number,
	total: number,
): (number | "ellipsis-start" | "ellipsis-end")[] {
	if (total <= 7) {
		return Array.from({ length: total }, (_, i) => i + 1);
	}

	const pages: (number | "ellipsis-start" | "ellipsis-end")[] = [1];

	if (current > 3) {
		pages.push("ellipsis-start");
	}

	const rangeStart = Math.max(2, current - 1);
	const rangeEnd = Math.min(total - 1, current + 1);

	for (let i = rangeStart; i <= rangeEnd; i++) {
		pages.push(i);
	}

	if (current < total - 2) {
		pages.push("ellipsis-end");
	}

	pages.push(total);

	return pages;
}

export function Pagination({
	currentPage,
	totalPages,
	onPageChange,
}: PaginationProps) {
	const pageRange = getPageRange(currentPage, totalPages);

	return (
		<nav aria-label="Paginación de resultados">
			<ul className="flex items-center gap-1">
				<li>
					<button
						type="button"
						onClick={() => onPageChange(currentPage - 1)}
						disabled={currentPage === 1}
						aria-label="Página anterior"
						className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 text-slate-400 hover:border-sky-500 hover:text-sky-500 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center transition-colors"
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

				{pageRange.map((item) =>
					item === "ellipsis-start" || item === "ellipsis-end" ? (
						<li key={item} aria-hidden="true">
							<span className="w-9 h-9 flex items-center justify-center text-slate-400 text-sm select-none">
								...
							</span>
						</li>
					) : (
						<li key={item}>
							<button
								type="button"
								onClick={() => onPageChange(item)}
								aria-label={`Página ${item}${item === currentPage ? ", página actual" : ""}`}
								aria-current={item === currentPage ? "page" : undefined}
								className={
									item === currentPage
										? "w-9 h-9 rounded-lg bg-sky-500 text-white font-semibold text-sm flex items-center justify-center"
										: "w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 text-slate-400 hover:border-sky-500 hover:text-sky-500 text-sm flex items-center justify-center transition-colors"
								}
							>
								{item}
							</button>
						</li>
					),
				)}

				<li>
					<button
						type="button"
						onClick={() => onPageChange(currentPage + 1)}
						disabled={currentPage === totalPages}
						aria-label="Página siguiente"
						className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 text-slate-400 hover:border-sky-500 hover:text-sky-500 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center transition-colors"
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
