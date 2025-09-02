import { Card, CardHeader } from "./components/ui/card"
import { ScreenHeader } from "./screens/home/header/screen-header"

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-background">
      <ScreenHeader />

      <Card className="max-w-4xl w-full">
        <CardHeader>
          <h1 className="text-3xl font-bold ">
            Table
          </h1>
        </CardHeader>
      </Card>
    </div>
  )
}

export default App
