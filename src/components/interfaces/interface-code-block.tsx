"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CheckIcon, CopyIcon } from "lucide-react";
import type { ComponentProps, HTMLAttributes, ReactNode } from "react";
import { createContext, useContext, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
	oneDark,
	oneLight,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import { toast } from "sonner";

type CodeBlockContextType = {
	code: string;
};

const CodeBlockContext = createContext<CodeBlockContextType>({
	code: "",
});

export type CodeBlockProps = HTMLAttributes<HTMLDivElement> & {
	code: string;
	language: string;
	showLineNumbers?: boolean;
};

export const CodeBlock = ({
	code,
	language,
	showLineNumbers = false,
	className,
	...props
}: CodeBlockProps) => (
	<CodeBlockContext.Provider value={{ code }}>
		<div
			className={cn(
				"relative w-full overflow-hidden rounded-md border bg-background text-foreground select-text",
				className
			)}
			{...props}
		>
			<div className="relative">
				<SyntaxHighlighter
					className="overflow-hidden dark:hidden"
					codeTagProps={{
						className: "font-mono text-sm",
					}}
					customStyle={{
						margin: 0,
						padding: "1rem",
						fontSize: "0.875rem",
						background: "hsl(var(--background))",
						color: "hsl(var(--foreground))",
					}}
					language={language}
					lineNumberStyle={{
						color: "hsl(var(--muted-foreground))",
						paddingRight: "1rem",
						minWidth: "2.5rem",
					}}
					showLineNumbers={showLineNumbers}
					style={oneLight}
				>
					{code}
				</SyntaxHighlighter>
				<SyntaxHighlighter
					className="hidden overflow-hidden dark:block"
					codeTagProps={{
						className: "font-mono text-sm",
					}}
					customStyle={{
						margin: 0,
						padding: "1rem",
						fontSize: "0.875rem",
						background: "hsl(var(--background))",
						color: "hsl(var(--foreground))",
					}}
					language={language}
					lineNumberStyle={{
						color: "hsl(var(--muted-foreground))",
						paddingRight: "1rem",
						minWidth: "2.5rem",
					}}
					showLineNumbers={showLineNumbers}
					style={oneDark}
				>
					{code}
				</SyntaxHighlighter>
				<div className="absolute top-2 right-2 flex items-center gap-2">
					<CodeBlockCopyButton />
				</div>
			</div>
		</div>
	</CodeBlockContext.Provider>
);

export type CodeBlockCopyButtonProps = ComponentProps<typeof Button> & {
	onCopy?: () => void;
	onError?: (error: Error) => void;
	timeout?: number;
};

export const CodeBlockCopyButton = ({
	children,
	className,
	...props
}: CodeBlockCopyButtonProps) => {
	const [isCopied, setIsCopied] = useState(false);
	const { code } = useContext(CodeBlockContext);

	const copyToClipboard = async () => {
		if (typeof window === "undefined" || !navigator.clipboard.writeText) {
			toast.error("Clipboard API not available");
			return;
		}

		try {
			await navigator.clipboard.writeText(code);
			setIsCopied(true);
			toast.success("Código copiado para a área de transferência");
			setTimeout(() => setIsCopied(false), 2000);
		} catch (error) {
			toast.error("Erro ao copiar código");
		}
	};

	const Icon = isCopied ? CheckIcon : CopyIcon;

	return (
		<Button
			className={cn("shrink-0", className)}
			onClick={copyToClipboard}
			size="icon"
			variant="ghost"
			{...props}
		>
			{children ?? <Icon />}
		</Button>
	);
};

export function RenderCodeBlock({
	title,
	code,
	language = "json",
}: {
	title?: string;
	code: Object;
	language?: string;
}) {
	return (
		<div className="flex flex-col gap-2">
			{title && <h1>{title}</h1>}
			<CodeBlock code={JSON.stringify(code, null, 2)} language={language} />
		</div>
	);
}