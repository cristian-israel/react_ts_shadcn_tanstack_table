import { AppController } from "./controller/app-controller"
import { ContentScreen } from "./screens/home/content/content-screen"
import { ToggleThemeScreen } from "./screens/home/preferences/toggle-theme-screen"

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-background">
      <AppController>
        <ToggleThemeScreen />
        <ContentScreen />
      </AppController>
    </div>
  )
}

export default App
