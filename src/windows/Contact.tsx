import { WindowControls } from "../components";
import { socials } from "../constants";
import WindowWrapper from "../hoc/WindowWrapper";

const Contact = () => {
	return (
		<>
			<div id="window-header">
				<WindowControls target="contact" />
				<h2>Contact Me</h2>
			</div>
			<div className="p-5 space-y-5">
				<img
					src="/images/me.jpg"
					alt="Kartikay Singh"
					className="w-20 rounded-full"
				/>
				<h3>Let's Connect</h3>
				<p>Let's connect each other's brain.</p>
				<p>
					<a href="mailto:kartikay.singh.0211@gmail.com" className="underline">
						kartikay.singh.0211@gmail.com
					</a>
				</p>

				<ul>
					{socials.map((social) => (
						<li key={social.id} style={{ backgroundColor: social.bg }}>
							<a href={social.link} target="_blank" rel="noopener noreferrer">
								<img src={social.icon} alt={social.text} className="size-5" />
								<p>{social.text}</p>
							</a>
						</li>
					))}
				</ul>
			</div>
		</>
	);
};

const ContactWindow = WindowWrapper(Contact, "contact");

export default ContactWindow;
