import { AppController } from "./controller/app-controller"
import { ScreenHeader } from "./screens/home/header/header-screen"
import { ScreenContent } from "./screens/home/content/content-screen"

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-background">
      <AppController>
        <ScreenHeader />
        <ScreenContent />
      </AppController>
    </div>
  )
}

export default App
