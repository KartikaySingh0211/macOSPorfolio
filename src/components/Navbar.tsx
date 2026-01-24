import dayjs from "dayjs";

import { navIcons, navLinks } from "../constants";
import useWindowStore from "../store/window";

const Navbar = () => {
	const { openWindow } = useWindowStore() as {
		openWindow: (type: string) => void;
	};

	return (
		<nav className="navbar">
			<div>
				<img src="/images/logo.svg" alt="logo" />
				<p className="font-bold text-black">Kartikay's Portfolio</p>

				<ul>
					{navLinks.map((item) => (
						<li
							key={item.id}
							className="cursor-pointer hover:underline text-black font-semibold"
							onClick={() => openWindow(item.type)}
						>
							{item.name}
						</li>
					))}
				</ul>
			</div>

			<div>
				<ul>
					{navIcons.map((icon) => (
						<li key={icon.id} className="icon-hover">
							<img src={icon.img} alt={`icon-${icon.id}`} />
						</li>
					))}
				</ul>
				<time>{dayjs().format("h:mm A - ddd, MMM D YYYY  ")}</time>
			</div>
		</nav>
	);
};

export default Navbar;
