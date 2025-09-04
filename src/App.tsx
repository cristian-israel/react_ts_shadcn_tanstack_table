import { AppController } from "./controller/app-controller"
import { HeaderScreen } from "./screens/home/header/header-screen"
import { ContentScreen } from "./screens/home/content/content-screen"

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-background">
      <AppController>
        <HeaderScreen />
        <ContentScreen />
      </AppController>
    </div>
  )
}

export default App
