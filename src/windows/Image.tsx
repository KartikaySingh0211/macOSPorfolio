import { WindowControls } from "../components";
import WindowWrapper from "../hoc/WindowWrapper";
import useWindowStore from "../store/window";

const Image = () => {
	const { windows } = useWindowStore() as {
		windows: Record<
			string,
			{
				isOpen: boolean;
				zIndex: number;
				data: {
					name?: string;
					imageUrl?: string;
				} | null;
			}
		>;
	};

	const data = windows.imgfile?.data;

	if (!data) return null;

	return (
		<>
			<div id="window-header">
				<WindowControls target="imgfile" />
				<h2>{data.name || "Image.png"}</h2>
			</div>
			<div className="p-6 overflow-y-auto h-[calc(100%-50px)] flex items-center justify-center bg-gray-50">
				{data.imageUrl && (
					<img
						src={data.imageUrl}
						alt={data.name}
						className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
					/>
				)}
			</div>
		</>
	);
};

const ImageWindow = WindowWrapper(Image, "imgfile");

export default ImageWindow;
