import { useRef, type JSX } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const FONT_WEIGHTS = {
	subtitle: { min: 100, max: 400, default: 100 },
	title: { min: 400, max: 900, default: 400 },
};

interface RenderTextParams {
	text: string;
	className?: string;
	baseWeight?: number;
}

const renderText = (
	text: RenderTextParams["text"],
	className?: RenderTextParams["className"],
	baseWeight: number = 400,
): JSX.Element[] => {
	const weightClass = baseWeight <= 100 ? "font-wght-100" : "font-wght-400";
	return [...text].map(
		(char: string, index: number): JSX.Element => (
			<span key={index} className={`${className ?? ""} ${weightClass}`.trim()}>
				{char === " " ? "\u00A0" : char}
			</span>
		),
	);
};

interface FontWeightEntry {
	min: number;
	max: number;
	default: number;
}

type FontWeightKey = keyof typeof FONT_WEIGHTS;

type MouseMoveHandler = (event: MouseEvent) => void;
type MouseLeaveHandler = () => void;

const setupTextHover = (
	container: HTMLElement | null,
	type: FontWeightKey,
): (() => void) | void => {
	if (!container) return () => {};

	const letters = container.querySelectorAll(
		"span",
	) as NodeListOf<HTMLSpanElement>;
	const { min, max, default: base } = FONT_WEIGHTS[type] as FontWeightEntry;

	const animateLetter = (
		letter: HTMLSpanElement,
		weight: number,
		duration: number = 0.25,
	): ReturnType<typeof gsap.to> => {
		return gsap.to(letter, {
			duration,
			ease: "power2.out",
			fontVariationSettings: `"wght" ${weight}`,
		});
	};

	const handleMouseMove: MouseMoveHandler = (event) => {
		const { left } = container.getBoundingClientRect();
		const mouseX = event.clientX - left;

		letters.forEach((letter: HTMLSpanElement) => {
			const { left: l, width: w } = letter.getBoundingClientRect();
			const distance = Math.abs(mouseX - (l - left + w / 2));
			const intensity = Math.exp(-(distance ** 2) / 15000);

			animateLetter(letter, min + (max - min) * intensity);
		});
	};

	const handleMouseLeave: MouseLeaveHandler = () => {
		letters.forEach((letter: HTMLSpanElement) => {
			animateLetter(letter, base, 0.5);
		});
	};

	container.addEventListener("mousemove", handleMouseMove);
	container.addEventListener("mouseleave", handleMouseLeave);

	return () => {
		container.removeEventListener("mousemove", handleMouseMove);
		container.removeEventListener("mouseleave", handleMouseLeave);
	};
};

const Welcome = () => {
	const titleRef = useRef(null);
	const subtitleRef = useRef(null);

	useGSAP(() => {
		setupTextHover(titleRef.current, "title");
		setupTextHover(subtitleRef.current, "subtitle");
	}, []);

	return (
		<section id="welcome">
			<p ref={subtitleRef}>
				{renderText(
					"Hey, I'm Kartikay! Welcome to my",
					"text-3xl font-georama",
					100,
				)}
			</p>
			<h1 ref={titleRef} className="mt-7">
				{renderText("portfolio", "text-9xl italic font-georama")}
			</h1>

			<div className="small-screen">
				<p>
					This Portfolio is designed for desktop/tablet screens only. You can
					try viewing it in desktop mode on your mobile device.
				</p>
			</div>
		</section>
	);
};

export default Welcome;
