import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { CartProvider } from "./contexts/CartContext";
import { FavoritesProvider } from "./contexts/FavoritesContext";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<CartProvider>
			<FavoritesProvider>
				<App />
			</FavoritesProvider>
		</CartProvider>
	</StrictMode>,
);
