export function NavBar() {
	return (
		<header className="flex items-center justify-between bg-slate-800 border-b border-slate-700 px-6 py-3 sticky top-0 z-50 h-14">
			<div className="flex items-center gap-2 shrink-0">
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
				<h1 className="text-xl font-bold text-slate-50 tracking-tight">
					Pc Hardware
				</h1>
			</div>

			<div className="flex-1 max-w-md mx-8">
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
					<label htmlFor="search" className="sr-only">
						Búsqueda
					</label>
					<input
						type="search"
						name="search"
						id="search"
						placeholder="Ryzen"
						className="w-full bg-slate-700 text-slate-50 placeholder:text-slate-400 rounded-lg pl-9 pr-4 py-2 text-sm border border-slate-600 focus:outline-none focus:border-sky-500 transition-colors"
					/>
				</div>
			</div>

			<nav className="flex items-center gap-4" aria-label="Acciones de usuario">
				<a
					href="/"
					className="relative text-slate-400 hover:text-slate-50 transition-colors"
					aria-label="Carrito de compras"
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
					<span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-sky-500 text-white text-[9px] font-bold flex items-center justify-center leading-none">
						3
					</span>
				</a>

				<button
					type="button"
					className="text-slate-400 hover:text-slate-50 transition-colors"
					aria-label="Notificaciones"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="22"
						height="22"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
						viewBox="0 0 24 24"
						aria-hidden="true"
					>
						<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
						<path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
					</svg>
				</button>

				<div className="h-9 w-9 rounded-full bg-linear-to-tr from-sky-500 to-indigo-500 p-0.5 cursor-pointer shrink-0">
					<img
						className="rounded-full w-full h-full object-cover"
						src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgX2M_BQasG_AoPsmQNLdt9jeepaSbSoFxhCnlfC02UUCjaw6_gAHy9HwBVYRAi1vUeTP_N4az98JLZfARo3puCIaM-D1cIPEjhwsHD211NTc1R8ISgTGOm0Z3a-4i-WOIgqKp7PdMv6TZMF2wZGKJ5b_g1cE-T9ZvRHbeBM0vwY4jxNP3mIHXSccdxcEaA-tcWm7J87lNxC8zYwgr6kvfGtkJ1wGs0NaHRj2wX7yDkXSQsAyCJ3wnf-A93dPF7L8Tz-hufrakFU8"
						alt="Foto de perfil estático"
					/>
				</div>
			</nav>
		</header>
	);
}
