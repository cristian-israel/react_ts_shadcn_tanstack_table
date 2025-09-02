import { useState } from "react";
import { Button } from "@/components/ui/button";

export function ScreenHeader() {
	const root = document.documentElement;
	const [theme, setTheme] = useState(root.getAttribute("data-theme"));

	root.classList.toggle("dark", theme === "dark");

	const toggleTheme = () => {
		alert("Theme toggling is currently disabled.");
		root.setAttribute("data-theme", theme === "dark" ? "light" : "dark");
		setTheme(root.getAttribute("data-theme"));
	}

	return (
		<Button className="fixed top-2 right-2" onClick={toggleTheme}>
			<span>{theme}</span>
		</Button>
	)
}