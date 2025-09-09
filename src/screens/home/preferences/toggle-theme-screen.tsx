import { Moon, Sun } from "lucide-react";

import { usePreferencesStoreData, usePreferencesStoreMethods } from "@/store/config/preferences-store";
import { Button } from "@/components/ui/button";

export function ToggleThemeScreen() {
	const toggleTheme = usePreferencesStoreMethods("toggleTheme");
	const theme = usePreferencesStoreData("theme");

	return (
		<Button className="fixed top-2 right-2" onClick={toggleTheme}>
			{theme === "dark" ? <Sun /> : <Moon />}
		</Button>
	)
}