import { Dock, Home, Navbar, Welcome } from "./components";
import {
	Finder,
	Resume,
	Safari,
	Terminal,
	Text,
	Image,
	Contact,
	Experience,
} from "./windows";

import { Draggable } from "gsap/Draggable";
import { gsap } from "gsap";

gsap.registerPlugin(Draggable);

const App = () => {
	return (
		<main>
			<Navbar />
			<Welcome />
			<Dock />
			<Home />

			<Terminal />
			<Safari />
			<Resume />
			<Finder />
			<Text />
			<Image />
			<Contact />
			<Experience />
		</main>
	);
};

export default App;
