import { useEffect, useRef } from "react";
import { WindowControls } from "../components";
import { experiences } from "../constants";
import WindowWrapper from "../hoc/WindowWrapper";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
	const containerRef = useRef<HTMLDivElement>(null);
	const timelineRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!containerRef.current || !timelineRef.current) return;

		const items = containerRef.current.querySelectorAll(".timeline-item");

		// Animate timeline items on scroll
		items.forEach((item, index) => {
			gsap.fromTo(
				item,
				{
					opacity: 0,
					x: index % 2 === 0 ? -50 : 50,
				},
				{
					opacity: 1,
					x: 0,
					duration: 0.6,
					ease: "power3.out",
					scrollTrigger: {
						trigger: item,
						start: "top 80%",
						end: "top 50%",
						scrub: 1,
						containerAnimation: undefined,
					},
				},
			);
		});

		// Animate the timeline line
		gsap.fromTo(
			".timeline-line-fill",
			{
				height: "0%",
			},
			{
				height: "100%",
				ease: "none",
				scrollTrigger: {
					trigger: containerRef.current,
					start: "top top",
					end: "bottom bottom",
					scrub: 1,
				},
			},
		);

		return () => {
			ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
		};
	}, []);

	return (
		<>
			<div id="window-header">
				<WindowControls target="experience" />
				<h2>Work Experience</h2>
			</div>

			<div className="experience-container" ref={containerRef}>
				<div className="timeline-wrapper">
					<div className="timeline-line" ref={timelineRef}>
						<div className="timeline-line-fill"></div>
					</div>

					<div className="timeline-content">
						{experiences.map((experience, index) => (
							<div
								key={index}
								className={`timeline-item ${
									index % 2 === 0 ? "timeline-left" : "timeline-right"
								}`}
							>
								<div className="timeline-dot-wrapper">
									<div className="timeline-icon">
										<img src={experience.icon} alt={experience.company_name} />
									</div>
								</div>

								<div className="timeline-card">
									<div className="timeline-card-header">
										<h3>{experience.title}</h3>
										<p className="company-name">{experience.company_name}</p>
										<p className="date">{experience.date}</p>
									</div>

									<ul className="timeline-card-points">
										{experience.points.map((point, pointIndex) => (
											<li key={pointIndex}>{point}</li>
										))}
									</ul>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

const ExperienceWindow = WindowWrapper(Experience, "experience");

export default ExperienceWindow;
