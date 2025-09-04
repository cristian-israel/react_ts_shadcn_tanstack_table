import { JSX } from "react"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import UsersTabs from "./users/users-tabs"
import RemindersTabs from "./reminders/reminders-tabs"
import TestsTabs from "./tests/tests-tabs"

type ConfigContentsKeysType = "users" | "reminders" | "tests";

type ConfigContentsType = Array<{
	value: ConfigContentsKeysType,
	title: string,
	component: JSX.Element
}>

const ConfigContents: ConfigContentsType = [
	{ value: "users", title: "Users", component: <UsersTabs /> },
	{ value: "reminders", title: "Reminders", component: <RemindersTabs /> },
	{ value: "tests", title: "Tests", component: <TestsTabs /> },
]

export function ContentScreen() {
	return (
		<Card className="max-w-4xl w-full h-[80vh]">
			<Tabs defaultValue="users" className="w-full">
				<CardHeader className="w-full">
					<TabsList>
						{ConfigContents.map(({ value, title }) => (
							<TabsTrigger id={value} value={value}>
								{title}
							</TabsTrigger>
						))}
					</TabsList>
				</CardHeader>

				<CardContent>
					{ConfigContents.map(({ component, value }) => (
						<TabsContent value={value}>
							{component}
						</TabsContent>
					))}
				</CardContent>
			</Tabs>
		</Card>
	)
}
