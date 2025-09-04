import { RenderCodeBlock } from "@/components/interfaces/interface-code-block";

export default function TestsTabs() {
	const tests = [];

	return (
		<div>
			<RenderCodeBlock code={tests} />
		</div>
	)
}
