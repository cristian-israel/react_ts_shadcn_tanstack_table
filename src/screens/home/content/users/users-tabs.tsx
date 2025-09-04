import { RenderCodeBlock } from "@/components/interfaces/interface-code-block";
import { useUserData } from "@/store/app/users-store";

export default function UsersTabs() {
	const users = useUserData();

	return (
		<div>
			<RenderCodeBlock code={users} />
		</div>
	)
}
