const navLinks = [
	{
		id: 1,
		name: "Experience",
		type: "experience",
	},
	{
		id: 2,
		name: "Resume",
		type: "resume",
	},
	{
		id: 3,
		name: "Contact",
		type: "contact",
	},
];

const navIcons = [
	{
		id: 1,
		img: "/icons/wifi.svg",
	},
	{
		id: 2,
		img: "/icons/search.svg",
	},
	{
		id: 3,
		img: "/icons/user.svg",
	},
];

const dockApps = [
	{
		id: "finder",
		name: "Portfolio", // was "Finder"
		icon: "finder.png",
		canOpen: true,
	},
	// {
	// 	id: "safari",
	// 	name: "Articles", // was "Safari"
	// 	icon: "safari.png",
	// 	canOpen: true,
	// },
	{
		id: "contact",
		name: "Contact", // or "Get in touch"
		icon: "contact.png",
		canOpen: true,
	},
	{
		id: "terminal",
		name: "Skills", // was "Terminal"
		icon: "terminal.png",
		canOpen: true,
	},
	{
		id: "trash",
		name: "Archive", // was "Trash"
		icon: "trash.png",
		canOpen: false,
	},
];

const blogPosts = [
	{
		id: 1,
		date: "Sep 2, 2025",
		title:
			"TypeScript Explained: What It Is, Why It Matters, and How to Master It",
		image: "/images/blog1.png",
		link: "https://jsmastery.com/blog/typescript-explained-what-it-is-why-it-matters-and-how-to-master-it",
	},
	{
		id: 2,
		date: "Aug 28, 2025",
		title: "The Ultimate Guide to Mastering Three.js for 3D Development",
		image: "/images/blog2.png",
		link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-three-js-for-3d-development",
	},
	{
		id: 3,
		date: "Aug 15, 2025",
		title: "The Ultimate Guide to Mastering GSAP Animations",
		image: "/images/blog3.png",
		link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-gsap-animations",
	},
];

const techStack = [
	{
		category: "Frontend",
		items: ["React", "Next.js", "TypeScript"],
	},
	{
		category: "State Management",
		items: ["Redux", "RTK Query", "TanStack Query", "Zustand"],
	},
	// {
	// 	category: "Mobile",
	// 	items: ["React Native", "Expo"],
	// },

	{
		category: "Backend",
		items: ["Node.js", "NestJS", "Hono", "REST APIs"],
	},
	{
		category: "Database",
		items: ["MongoDB", "PostgreSQL"],
	},
	{
		category: "ORMs",
		items: ["Prisma", "Mongoose"],
	},
	{
		category: "Tools",
		items: ["Git", "GitHub", "Docker", "Postman", "VS Code"],
	},
];

const socials = [
	{
		id: 1,
		text: "Github",
		icon: "/icons/github.svg",
		bg: "#f4656b",
		link: "https://github.com/KartikaySingh0211/",
	},
	{
		id: 2,
		text: "LinkedIn",
		icon: "/icons/linkedin.svg",
		bg: "#05b6f6",
		link: "https://linkedin.com/in/kartikaysingh0211",
	},
];

const experiences = [
	{
		title: "Technical Lead",
		company_name: "VITrendz",
		icon: "/icons/vitrendz.png",
		iconBg: "#383E56",
		date: "November 2024 - Present",
		points: [
			"Led development of the Hostels platform, a full-stack student-facing system for browsing hostels, blocks, and room-level details.",
			"Designed frontend routing structure and database schemas to support hierarchical hostel, block, and room views.",
			"Owned feature delivery and coordinated contributions across multiple developers through planning and code reviews.",
		],
	},
	{
		title: "Frontend Engineer – Application Architecture (Intern)",
		company_name: "Diversity Assam",
		icon: "/icons/diversityAssam.jpg",
		iconBg: "#312E81",
		date: "November 2025 - Present",
		points: [
			"Owning end-to-end frontend development for a public-facing application serving 500+ daily users.",
			"Built and maintained 15+ production pages using a reusable, component-driven UI architecture.",
			"Managed application state and API integration using Redux Toolkit and RTK Query.",
		],
	},
	{
		title: "Platform Engineer – Frontend Systems (Intern)",
		company_name: "Warmpawz",
		icon: "/icons/warmpawz.jpg",
		iconBg: "#1F2937",
		date: "December 2025 - Present",
		points: [
			"Owning frontend system design for a multi-persona, production platform supporting both web and mobile applications.",
			"Architected frontend flows for customers, vendors, and admins across multiple service categories.",
			"Defined frontend architecture using React and Next.js with focus on scalable routing and performance.",
			"Optimized state management using TanStack Query and Zustand, reducing unnecessary re-renders and improving UI responsiveness.",
			"Improved frontend performance through route-based data fetching and request deferral while contributing to AWS serverless architecture planning.",
		],
	},
];

export const socialMedia = [
	{
		id: 1,
		img: "/git.svg",
		link: "https://github.com/KartikaySingh0211",
	},
	{
		id: 2,
		img: "/link.svg",
		link: "www.linkedin.com/in/kartikaysingh0211",
	},
];

export {
	navLinks,
	navIcons,
	dockApps,
	blogPosts,
	techStack,
	socials,
	experiences,
};

const WORK_LOCATION = {
	id: 1,
	type: "work",
	name: "Work",
	icon: "/icons/work.svg",
	kind: "folder",
	children: [
		// ▶ Project 1 — Campus Marketplace Platform
		// {
		// 	id: 5,
		// 	name: "Campus Marketplace Platform",
		// 	icon: "/images/folder.png",
		// 	kind: "folder",
		// 	position: "top-10 left-5",
		// 	windowPosition: "top-[5vh] left-5",
		// 	children: [
		// 		{
		// 			id: 1,
		// 			name: "overview.txt",
		// 			icon: "/images/txt.png",
		// 			kind: "file",
		// 			fileType: "txt",
		// 			position: "top-5 left-10",
		// 			description: [
		// 				"Campus Marketplace Platform is a scalable system designed to support buying and selling within a campus ecosystem.",
		// 				"It supports buyer–seller–admin workflows including listings, search, filters, chat, moderation, and role-based access control.",
		// 				"The platform is built using a monorepo architecture with Next.js on the frontend and NestJS on the backend.",
		// 				"The system focuses on performance, clean separation of concerns, and long-term scalability.",
		// 			],
		// 		},
		// 		{
		// 			id: 2,
		// 			name: "marketplace.png",
		// 			icon: "/images/image.png",
		// 			kind: "file",
		// 			fileType: "img",
		// 			position: "top-52 right-80",
		// 			imageUrl: "/images/logo.png",
		// 		},
		// 	],
		// },

		// ▶ Project 2 — Diversity Assam
		{
			id: 6,
			name: "Diversity Assam – Live Platform",
			icon: "/images/folder.png",
			kind: "folder",
			position: "top-52 right-80",
			windowPosition: "top-[20vh] left-7",
			children: [
				{
					id: 1,
					name: "platform.txt",
					icon: "/images/txt.png",
					kind: "file",
					fileType: "txt",
					position: "top-5 right-10",
					description: [
						"Diversity Assam is a public-facing production platform serving over 500 daily users.",
						"The frontend is built with Next.js and TypeScript using a scalable, component-driven architecture.",
						"State management and API integration are handled using Redux Toolkit and RTK Query.",
						"The project emphasizes production readiness, maintainability, and real-world usage at scale.",
					],
				},
				{
					id: 2,
					name: "diversityassam.com",
					icon: "/images/safari.png",
					kind: "file",
					fileType: "url",
					href: "https://diversityassam.com",
					position: "top-10 left-20",
				},
				{
					id: 3,
					name: "diversityassam.png",
					icon: "/images/image.png",
					kind: "file",
					fileType: "img",
					position: "top-52 left-80",
					imageUrl: "/images/diversityHome.png",
				},
			],
		},

		// ▶ Project 3 — Signature Asia
		{
			id: 7,
			name: "Signature Asia – Production Website",
			icon: "/images/folder.png",
			kind: "folder",
			position: "top-10 left-80",
			windowPosition: "top-[33vh] left-7",
			children: [
				{
					id: 1,
					name: "project.txt",
					icon: "/images/txt.png",
					kind: "file",
					fileType: "txt",
					position: "top-5 left-10",
					description: [
						"Signature Asia is a production-grade client website built with a focus on performance and maintainability.",
						"The site uses reusable components, responsive layouts, and SEO optimization to support real business needs.",
						"The frontend is implemented using Next.js and TypeScript with clean architectural practices.",
					],
				},
				{
					id: 2,
					name: "signatureasias.com",
					icon: "/images/safari.png",
					kind: "file",
					fileType: "url",
					href: "https://signatureasias.com/",
					position: "top-10 right-20",
				},
				{
					id: 3,
					name: "signature.png",
					icon: "/images/image.png",
					kind: "file",
					fileType: "img",
					position: "top-52 right-80",
					imageUrl: "/images/signature.png",
				},
			],
		},
	],
};

const ABOUT_LOCATION = {
	id: 2,
	type: "about",
	name: "About me",
	icon: "/icons/info.svg",
	kind: "folder",
	children: [
		{
			id: 1,
			name: "me.png",
			icon: "/images/image.png",
			kind: "file",
			fileType: "img",
			position: "top-10 left-5",
			imageUrl: "/images/me.jpg",
		},
		{
			id: 2,
			name: "about-me.txt",
			icon: "/images/txt.png",
			kind: "file",
			fileType: "txt",
			position: "top-60 left-5",
			subtitle: "Meet the Developer Behind the Code",
			image: "/images/me.jpg",
			description: [
				"Hey, I’m Kartikay 👋 — a Software Engineering student at VIT Vellore with hands-on experience building production-grade web platforms.",
				"I focus on frontend systems and application architecture, working primarily with React and Next.js to design scalable, performance-oriented user experiences.",
				"I’ve contributed to live platforms used by real users, collaborated across backend and database layers, and care deeply about clean abstractions, state management, and maintainable code.",
				"When I’m not building, I’m usually refining system designs, optimizing performance bottlenecks, or thinking about how products scale beyond the UI.",
			],
		},
	],
};

const RESUME_LOCATION = {
	id: 3,
	type: "resume",
	name: "Resume",
	icon: "/icons/file.svg",
	kind: "folder",
	children: [
		{
			id: 1,
			name: "Resume.pdf",
			icon: "/images/pdf.png",
			kind: "file",
			fileType: "pdf",
			href: "https://drive.google.com/file/d/1SpGDEbAzq3nRmT6gePKLziCCRPHCBbxQ/view?usp=drive_link",
		},
	],
};

const TRASH_LOCATION = {
	id: 4,
	type: "trash",
	name: "Trash",
	icon: "/icons/trash.svg",
	kind: "folder",
	children: [
		{
			id: 1,
			name: "trash1.png",
			icon: "/images/image.png",
			kind: "file",
			fileType: "img",
			position: "top-10 left-10",
			imageUrl: "/images/trash-1.png",
		},
		{
			id: 2,
			name: "trash2.png",
			icon: "/images/image.png",
			kind: "file",
			fileType: "img",
			position: "top-40 left-80",
			imageUrl: "/images/rickroll.jpg",
		},
	],
};

export const locations = {
	work: WORK_LOCATION,
	about: ABOUT_LOCATION,
	resume: RESUME_LOCATION,
	trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
	finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
	contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
	resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
	safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
	photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
	terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
	txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
	imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
	experience: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };
