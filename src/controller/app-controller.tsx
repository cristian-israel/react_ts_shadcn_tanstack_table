import { PreferencesController } from "./config/preferences-controller."

export function AppController({ children }: { children: React.ReactNode }) {
	return (
		<>
			<PreferencesController />
			{children}
		</>
	)
}
