import { RenderCodeBlock } from "@/components/interfaces/interface-code-block";

export default function RemindersTabs() {
	const reminders = [];

	return (
		<div>
			<RenderCodeBlock code={reminders} />
		</div>
	)
}
