import { RenderCodeBlock } from "@/components/interfaces/interface-code-block"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function ScreenContent() {
	return (
		<Card className="max-w-4xl w-full h-[80vh]">
			<Tabs defaultValue="account" className="w-full">
				<CardHeader className="w-full">
					<TabsList>
						<TabsTrigger value="account">Data</TabsTrigger>
						<TabsTrigger value="password">Password</TabsTrigger>
					</TabsList>
				</CardHeader>

				<CardContent>
					<TabsContent value="account"><RenderCodeBlock code={[]} /></TabsContent>
					<TabsContent value="password">Change your password here.</TabsContent>
				</CardContent>
			</Tabs>
		</Card>
	)
}
