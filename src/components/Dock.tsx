import { useRef } from "react";
import { Tooltip } from "react-tooltip";
import gsap from "gsap";

import { dockApps } from "../constants";
import { useGSAP } from "@gsap/react";
import useWindowStore from "../store/window";

const Dock = () => {
	const { openWindow, closeWindow, windows } = useWindowStore();
	const dockRef = useRef<HTMLDivElement | null>(null);

	useGSAP(() => {
		const dock = dockRef.current;
		if (!dock) return;

		const icons = dock.querySelectorAll(".dock-icon");

		const animateIcons = (mouseX: number) => {
			const { left } = dock.getBoundingClientRect();
			icons.forEach((icon) => {
				const { left: iconLeft, width } = icon.getBoundingClientRect();
				const center = iconLeft - left + width / 2;
				const distance = Math.abs(mouseX - center);
				const intensity = Math.exp(-(distance ** 2) / 1500);

				gsap.to(icon, {
					scale: 1 + 0.25 * intensity,
					y: -15 * intensity,
					duration: 0.2,
					ease: "power1.out",
				});
			});
		};

		const handleMouseMove = (e: MouseEvent) => {
			const { left } = dock.getBoundingClientRect();
			animateIcons(e.clientX - left);
		};

		const resetIcons = () => {
			icons.forEach((icon) =>
				gsap.to(icon, { scale: 1, y: 0, duration: 0.3, ease: "power1.out" }),
			);
		};
		dock.addEventListener("mousemove", handleMouseMove);
		dock.addEventListener("mouseleave", resetIcons);

		return () => {
			dock.removeEventListener("mousemove", handleMouseMove);
			dock.removeEventListener("mouseleave", resetIcons);
		};
	}, []);

	const toggleApp = (appId: string, canOpen: boolean) => {
		if (!canOpen) return;
		if (!(appId in windows)) return;
		const window = windows[appId as keyof typeof windows];
		if (window.isOpen) {
			closeWindow(appId as keyof typeof windows);
		} else {
			openWindow(appId as keyof typeof windows);
		}
	};

	return (
		<section id="dock">
			<div ref={dockRef} className="dock-container">
				{dockApps.map((app) => (
					<div key={app.id} className="relative flex justify-center">
						<button
							type="button"
							className="dock-icon"
							aria-label={app.name}
							data-tooltip-id="dock-tooltip"
							data-tooltip-content={app.name}
							data-tooltip-delay-show={150}
							disabled={!app.canOpen}
							onClick={() => toggleApp(app.id, app.canOpen)}
						>
							<img
								src={`/images/${app.icon}`}
								alt={app.name}
								loading="lazy"
								className={app.canOpen ? "" : "opacity-40"}
							/>
						</button>
					</div>
				))}
				<Tooltip id="dock-tooltip" place="top" className="tooltip" />
			</div>
		</section>
	);
};

export default Dock;
