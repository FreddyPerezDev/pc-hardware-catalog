function HardwareCardSkeleton() {
	return (
		<div className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 flex flex-col animate-pulse">
			<div className="h-44 bg-slate-700/70" />

			<div className="p-4 flex flex-col flex-1 gap-3">
				<div className="flex items-center justify-between">
					<div className="h-5 w-20 bg-slate-700 rounded-full" />
					<div className="h-4 w-16 bg-slate-700 rounded" />
				</div>

				<div className="space-y-2">
					<div className="h-4 bg-slate-700 rounded w-full" />
					<div className="h-4 bg-slate-700 rounded w-3/4" />
				</div>

				<div className="space-y-1.5 mt-1">
					<div className="h-3 bg-slate-700 rounded w-full" />
					<div className="h-3 bg-slate-700 rounded w-5/6" />
					<div className="h-3 bg-slate-700 rounded w-4/6" />
				</div>

				<div className="flex items-center justify-between mt-auto pt-3 border-t border-slate-700/50">
					<div className="h-6 w-20 bg-slate-700 rounded" />
					<div className="h-9 w-32 bg-slate-700 rounded-lg" />
				</div>
			</div>
		</div>
	);
}

export function HardwareGridSkeleton() {
	return (
		<>
			<div className="flex items-start justify-between mb-6 gap-4 animate-pulse">
				<div className="space-y-2">
					<div className="h-7 w-52 bg-slate-700 rounded" />
					<div className="h-4 w-36 bg-slate-700 rounded" />
				</div>
				<div className="h-9 w-40 bg-slate-700 rounded-lg shrink-0 mt-1" />
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
				{(["sk-1", "sk-2", "sk-3", "sk-4", "sk-5", "sk-6"] as const).map(
					(k) => (
						<HardwareCardSkeleton key={k} />
					),
				)}
			</div>
		</>
	);
}
