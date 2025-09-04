import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useUserData } from "@/store/app/users-store";
import { UserStoreSchema, UserStoreType } from "@/store/app/users-store-types";
import { toast } from "sonner";

export default function UsersTabs() {
	const users = useUserData();

	const form = useForm<UserStoreType>({
		resolver: zodResolver(UserStoreSchema),
	})

	function onSubmit(data: UserStoreType) {
		toast("You submitted the following values", {
			description: (
				<pre className="mt-2 w-[320px] rounded-md bg-neutral-950 p-4">
					<code className="text-white">{JSON.stringify(data, null, 2)}</code>
				</pre>
			),
		})
	}

	return (
		<div className="flex flex-col space-y-8">
			<div className="space-y-4">
				<h1>Add user</h1>

				<Form {...form}>
					<form className="grid grid-cols-2 gap-4" onSubmit={form.handleSubmit(onSubmit)}>
						{keyofUserType.map((key) => {
							const label = key.charAt(0).toUpperCase() + key.slice(1);

							return (
								<div className="flex flex-col space-y-2 text-muted-foreground">
									<Label
										htmlFor={key}
										className="text-sm">{label}
									</Label>

									<Input
										id={key}
										type="text"
										placeholder={label} />
								</div>
							)
						})}

						<Button
							type="submit"
							className="col-span-2"
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
						<p><strong>Tags:</strong> {user.tags.join(", ")}</p>
					</div>
				)) : (
					<p className="text-muted-foreground">No users available.</p>
				)}
			</div>
		</div>
	)
}
