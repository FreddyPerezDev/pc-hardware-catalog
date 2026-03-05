import type { HardwareItem } from "../types";

export const mockHardwareData: HardwareItem[] = [
	// --- Procesadores (CPU) ---
	{
		id: "cpu-001",
		name: "AMD Ryzen 5 5600G",
		brand: "AMD",
		category: "CPU",
		price: 139.99,
		specs: ["6 Cores", "12 Threads", "3.9 GHz Base", "Radeon Graphics"],
		inStock: true,
	},
	{
		id: "cpu-002",
		name: "Intel Core i5-13400F",
		brand: "Intel",
		category: "CPU",
		price: 185.0,
		specs: ["10 Cores", "16 Threads", "2.5 GHz Base", "LGA 1700"],
		inStock: true,
	},
	{
		id: "cpu-003",
		name: "AMD Ryzen 7 7800X3D",
		brand: "AMD",
		category: "CPU",
		price: 399.0,
		specs: ["8 Cores", "16 Threads", "4.2 GHz Base", "AM5", "3D V-Cache"],
		inStock: false,
	},

	// --- Placas Base (Motherboard) ---
	{
		id: "mobo-001",
		name: "Asus Prime B550M-A AC",
		brand: "Asus",
		category: "Motherboard",
		price: 129.99,
		specs: ["Micro-ATX", "AM4", "PCIe 4.0", "Wi-Fi 5"],
		inStock: true,
	},
	{
		id: "mobo-002",
		name: "MSI MAG B650 TOMAHAWK WIFI",
		brand: "MSI",
		category: "Motherboard",
		price: 219.99,
		specs: ["ATX", "AM5", "DDR5", "Wi-Fi 6E"],
		inStock: true,
	},

	// --- Memoria RAM ---
	{
		id: "ram-001",
		name: "Kllisre DDR4 16GB",
		brand: "Kllisre",
		category: "RAM",
		price: 35.5,
		specs: ["16GB (1x16GB)", "DDR4", "3200 MHz", "CL16"],
		inStock: true,
	},
	{
		id: "ram-002",
		name: "Corsair Vengeance LPX 32GB",
		brand: "Corsair",
		category: "RAM",
		price: 74.99,
		specs: ["32GB (2x16GB)", "DDR4", "3600 MHz", "CL18"],
		inStock: true,
	},
	{
		id: "ram-003",
		name: "G.Skill Trident Z5 RGB 32GB",
		brand: "G.Skill",
		category: "RAM",
		price: 119.99,
		specs: ["32GB (2x16GB)", "DDR5", "6000 MHz", "RGB"],
		inStock: false,
	},

	// --- Tarjetas de Video (GPU) --- NUEVO
	{
		id: "gpu-001",
		name: "NVIDIA GeForce RTX 4060",
		brand: "NVIDIA",
		category: "GPU",
		price: 299.99,
		specs: ["8GB GDDR6", "DLSS 3", "Ray Tracing", "PCIe 4.0"],
		inStock: true,
	},
	{
		id: "gpu-002",
		name: "AMD Radeon RX 7600",
		brand: "AMD",
		category: "GPU",
		price: 269.99,
		specs: ["8GB GDDR6", "FSR 2.0", "Navi 33", "PCIe 4.0"],
		inStock: true,
	},
	{
		id: "gpu-003",
		name: "ASUS ROG Strix RTX 4090",
		brand: "Asus",
		category: "GPU",
		price: 1999.99,
		specs: ["24GB GDDR6X", "Ada Lovelace", "Massive Cooler"],
		inStock: false,
	},

	// --- Almacenamiento (Storage) ---
	{
		id: "storage-001",
		name: "Crucial P3 Plus 512GB",
		brand: "Crucial",
		category: "Storage",
		price: 45.99,
		specs: ["512GB", "M.2 NVMe", "PCIe Gen4 x4", "Up to 4700MB/s"],
		inStock: true,
	},
	{
		id: "storage-002",
		name: "Samsung 980 PRO 1TB",
		brand: "Samsung",
		category: "Storage",
		price: 89.99,
		specs: ["1TB", "M.2 NVMe", "PCIe Gen4 x4", "Up to 7000MB/s"],
		inStock: true,
	},

	// --- Enfriamiento (Cooler) ---
	{
		id: "cooler-001",
		name: "DEEPCOOL AG400",
		brand: "DeepCool",
		category: "Cooler",
		price: 29.99,
		specs: ["Air Cooler", "120mm Fan", "4 Heatpipes", "TDP 220W"],
		inStock: true,
	},
	{
		id: "cooler-002",
		name: "Noctua NH-D15",
		brand: "Noctua",
		category: "Cooler",
		price: 109.95,
		specs: ["Air Cooler", "Dual 140mm Fans", "Premium Heatsink"],
		inStock: true,
	},

	// --- Fuentes de Poder (PSU) ---
	{
		id: "psu-001",
		name: "MSI MAG A650BN",
		brand: "MSI",
		category: "PSU",
		price: 59.99,
		specs: ["650W", "80 Plus Bronze", "Non-Modular", "120mm Fan"],
		inStock: true,
	},
	{
		id: "psu-002",
		name: "Corsair RM850x",
		brand: "Corsair",
		category: "PSU",
		price: 149.99,
		specs: ["850W", "80 Plus Gold", "Fully Modular", "Zero RPM Mode"],
		inStock: true,
	},
];
