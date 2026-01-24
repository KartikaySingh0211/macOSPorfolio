import { WindowControls } from "../components";
import WindowWrapper from "../hoc/WindowWrapper";
import useWindowStore from "../store/window";

const Text = () => {
	const { windows } = useWindowStore() as {
		windows: Record<
			string,
			{
				isOpen: boolean;
				zIndex: number;
				data: {
					name?: string;
					image?: string;
					subtitle?: string;
					description?: string[];
				} | null;
			}
		>;
	};

	const data = windows.txtfile?.data;

	if (!data) return null;

	return (
		<>
			<div id="window-header">
				<WindowControls target="txtfile" />
				<h2>{data.name || "Document.txt"}</h2>
			</div>
			<div className="p-6 overflow-y-auto h-[calc(100%-50px)]">
				{data.image && (
					<div className="mb-6 flex justify-center">
						<img
							src={data.image}
							alt={data.name}
							className="max-w-md rounded-lg shadow-md"
						/>
					</div>
				)}
				{data.subtitle && (
					<h3 className="text-xl font-semibold mb-4 text-gray-800">
						{data.subtitle}
					</h3>
				)}
				<div className="space-y-4">
					{data.description?.map((paragraph, index) => (
						<p key={index} className="text-gray-700 leading-relaxed">
							{paragraph}
						</p>
					))}
				</div>
			</div>
		</>
	);
};

const TextWindow = WindowWrapper(Text, "txtfile");

export default TextWindow;
