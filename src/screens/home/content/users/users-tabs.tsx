import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useUserActions, useUserData } from "@/store/app/users-store";
import { UserStoreSchema, UserStoreType } from "@/store/app/users-store-types";
import { Switch } from "@/components/ui/switch";

export default function UsersTabs() {
	const users = useUserData();
	const addUser = useUserActions("addUser");

	const form = useForm<UserStoreType>({
		resolver: zodResolver(UserStoreSchema),
		defaultValues: {
			active: true,
		}
	})

	function onSubmit(data: UserStoreType) {
		// toast("You submitted the following values", {
		// 	description: (
		// 		<pre className="mt-2 w-[320px] rounded-md bg-neutral-950 p-4">
		// 			<code className="text-white">{JSON.stringify(data, null, 2)}</code>
		// 		</pre>
		// 	),
		// })
		alert(JSON.stringify(data, null, 2));
	}

	return (
		<div className="flex flex-col space-y-8">
			<div className="space-y-4">
				<h1>Add user</h1>

				<Form {...form}>
					<form className="grid grid-cols-2 gap-4" onSubmit={form.handleSubmit(onSubmit)}>

						<FormField
							control={form.control}
							name="name"
							render={({ field }) => (
								<FormItem className="flex flex-col text-muted-foreground col-span-2">
									<FormLabel htmlFor={field.name}>Name</FormLabel>
									<FormControl>
										<Input placeholder="Enter the user's full name" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						>
						</FormField>

						<FormField
							control={form.control}
							name="age"
							render={({ field }) => (
								<FormItem className="flex flex-col text-muted-foreground">
									<FormLabel htmlFor={field.name}>Age</FormLabel>
									<FormControl>
										<Input placeholder="Enter the user's age" type="number" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						>
						</FormField>

						<FormField
							control={form.control}
							name="active"
							render={({ field }) => (
								<FormItem className="flex flex-col text-muted-foreground">
									<FormLabel htmlFor={field.name}>Active</FormLabel>
									<FormControl>
										<Switch
											checked={field.value}
											onCheckedChange={field.onChange}
											aria-readonly
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						>
						</FormField>

						{/* <div className="flex flex-col text-muted-foreground">
							<Label htmlFor={"tags"} className="text-sm">
								Tags
							</Label>

							<Input
								id={"tags"}
								type="text"
								placeholder={"Tags"} />
						</div> */}


						<Button
							type="submit"
							className="col-span-2 mt-4"
						>
							Add User
						</Button>
					</form>
				</Form>
			</div>

			<Separator />

			<div>
				<h1>Users</h1>

				{!!users.length ? users.map((user) => (
					<div key={user.id} className="p-2 border-b">
						<p><strong>ID:</strong> {user.id}</p>
						<p><strong>Name:</strong> {user.name}</p>
						<p><strong>Active:</strong> {user.active ? "Yes" : "No"}</p>
						{/* <p><strong>Tags:</strong> {user.tags.join(", ")}</p> */}
					</div>
				)) : (
					<p className="text-muted-foreground">No users available.</p>
				)}
			</div>
		</div>
	)
}
