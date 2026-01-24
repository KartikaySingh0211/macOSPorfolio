import { Search } from "lucide-react";
import { WindowControls } from "../components";
import WindowWrapper from "../hoc/WindowWrapper";
import { locations } from "../constants";
import useLocationStore from "../store/location";
import clsx from "clsx";
import useWindowStore from "../store/window";

const Finder = () => {
	const { activeLocation, setActiveLocation } = useLocationStore();
	const { openWindow } = useWindowStore();

	const hasChildren = (loc: any): loc is { children: any[] } =>
		Boolean(loc && "children" in loc && Array.isArray(loc.children));

	const openItem = (item: any) => {
		if (item.fileType === "pdf") return openWindow("resume");
		if (item.kind === "folder") return setActiveLocation(item);
		if (["fig", "url"].includes(item.fileType) && item.href) {
			return window.open(item.href, "_blank");
		}
		if (item.fileType === "txt") return openWindow("txtfile", item);
		if (item.fileType === "img") return openWindow("imgfile", item);
		const key = `${item.fileType}file` as keyof typeof openWindow extends never
			? never
			: Parameters<typeof openWindow>[0];
		openWindow(key, item);
	};

	const renderList = (name: string, items: any[]) => (
		<div>
			<h3>{name}</h3>
			{items.map((item) => (
				<ul>
					<li
						key={item.id}
						onClick={() => setActiveLocation(item)}
						className={clsx(
							item.id === activeLocation?.id ? "active" : "not-active",
						)}
					>
						<img src={item.icon} className="w-4" alt={item.name} />
						<p className="text-sm font-medium truncate">{item.name}</p>
					</li>
				</ul>
			))}
		</div>
	);

	return (
		<>
			<div id="window-header">
				<WindowControls target="finder" />
				<Search className="icon" />
			</div>
			<div className="bg-white flex h-full">
				<div className="sidebar">
					{renderList("Favourites", Object.values(locations))}
					{renderList("Work", locations.work.children)}
				</div>
				<ul className="content">
					{(hasChildren(activeLocation) ? activeLocation.children : []).map(
						(item: any) => (
							<li
								key={item.id}
								className={item.position}
								onClick={() => openItem(item)}
							>
								<img src={item.icon} alt={item.name} />
								<p>{item.name}</p>
							</li>
						),
					)}
				</ul>
			</div>
		</>
	);
};

const FinderWindow = WindowWrapper(Finder, "finder");

export default FinderWindow;
