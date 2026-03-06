import { mockHardwareData } from "../data/mockData";
import type { HardwareItem } from "../types";

export async function fetchCatalog(): Promise<HardwareItem[]> {
	return new Promise((resolve) => {
		setTimeout(() => resolve(mockHardwareData), 3000);
	});
}

export function findItemById(id: string): HardwareItem | undefined {
	return mockHardwareData.find((h) => h.id === id);
}
