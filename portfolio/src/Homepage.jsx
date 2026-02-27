	import React, {lazy, Suspense, useState, useEffect, useRef} from "react";
	import "./index.css";
	import halfBodyPic from "./assets/half-body-photo.webp";
	import 'animate.css';

	const GitHubLink = lazy(() => import("./GitHubLink.jsx"));
	const LinkedInLink = lazy(() => import("./LinkedInLink.jsx"));
	const EmailLink = lazy(() => import("./EmailLink.jsx"));
	const ContactLink = lazy(() => import("./ContactLink.jsx"));
	const BackgroundBoxesCanvas = lazy(() => import("./components/ui/boxes.jsx")); 
	const FadeContent = lazy(() => import("./components/FadeContent"));
	const Magnet = lazy(() => import("./components/Magnet"));
	const TextAnimate = lazy(() =>
	import("./components/ui/text-animate").then((module) => ({
		default: module.TextAnimate,
	}))
	);
	const Skills = lazy(() => import("./Skills.jsx"));
	const Projects = lazy(() => import("./Projects.jsx"));

	export default function Homepage() {
		const [showLine, setShowLine] = useState(false);
		const [showIcons, setShowIcons] = useState(false);
		const [stickyMode, setStickyMode] = useState(false);
		const triggerRef = useRef(null);

		useEffect(() => {
			const timer = setTimeout(() => {
				setShowLine(true);
			}, 300); 
			return () => clearTimeout(timer);
		}, []);

		useEffect(() => {
			const t = setTimeout(() => setShowIcons(true), 1000); 
			return () => clearTimeout(t);
		}, []);




		return (
			<>
				{/* Background with lazy loading */}
				<Suspense fallback={<div className="fixed inset-0 bg-slate-900 z-0" />}>
					<BackgroundBoxesCanvas />
				</Suspense>

				{/* Sticky Mini Header */}
				<div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out
					${stickyMode ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
					<div className="flex justify-between items-center px-6 sm:px-10 md:px-16 py-4 backdrop-blur-lg bg-slate-900/90 border-b border-white/10">
						<h1 className="text-xl md:text-3xl text-gray-300 font-semibold pointer-events-auto">
							Ow Xun Jiun
						</h1>
						<div className="w-14 h-14 md:w-16 md:h-16 flex-shrink-0">
							<img 
								className="block w-full h-full rounded-full object-cover" 
								src={halfBodyPic}
								alt="Profile Picture"
								style={{
									maskImage: 'radial-gradient(circle at center, black 55%, transparent 60%)', 
									WebkitMaskImage: 'radial-gradient(circle at center, black 55%, transparent 60%)'
								}}
							/>
						</div>
					</div>
				</div>
				
				<main className="text-white relative z-10">
					{/* Hero Section */}
					<section className="min-h-screen flex flex-col px-2 sm:px-4 md:px-6 py-2 md:py-4 pt-2 md:pt-4 lg:pt-6 xl:pt-8 pointer-events-none relative">
						<div className="flex-1">
							<div className="gap-4 mb-8">
								<Suspense fallback={<div className="h-20 w-full animate-pulse bg-white/5 rounded" />}>
									<FadeContent blur={true} duration={2500} easing="ease-out" initialOpacity={0}>
										<h1 className="text-gray-400 text-2xl sm:text-2xl md:text-4xl lg:text-6xl 
										xl:text-9xl antialiased text-shadow-lg/70 text-shadow-black-600 leading-tight text-left">
											Ow Xun Jiun
										</h1>
									</FadeContent>
								</Suspense>
							
								<div className="ml-16 w-full max-w-[580px] my-4" id="line">
									<div className={`line ${showLine ? "show" : ""}`}/>
								</div>
							
								<div className="flex flex-wrap items-center gap-16 my-6 md:my-12 ml-20 ">
									<h2 className="animate__animated animate__fadeInUp animate__slow text-gray-400 text-lg
									sm:text-xl md:text-2xl lg:text-4xl antialiased text-shadow-lg/70 text-shadow-black-600 font-bold">
										IoT Developer
									</h2>
								
									<Suspense fallback={<div className="flex gap-4 w-40 h-12 animate-pulse bg-white/5 rounded" />}>
										<div className={`pointer-events-auto 
											${showIcons ? "animate__animated animate__lightSpeedInRight animate__slow" : "opacity-0"}`}>
											<Magnet padding={15} disabled={false} magnetStrength={15}>
												<div className="flex gap-6 md:gap-8">
													<GitHubLink username="olsenow" />
													<LinkedInLink username="ow-xun-jiun-92022124a" />
													<EmailLink email="olsen4263@outlook.com" />
													<ContactLink contact="+6011-33364263" />
												</div>
											</Magnet>
										</div>
									</Suspense>
								</div>
							</div>

							<div className="flex flex-col max-w-[500px] mb-8 mt-16 ml-24">
								<Suspense fallback={<div className="h-32 animate-pulse bg-white/5 rounded" />}>
									<TextAnimate
										by="word"
										animation="blurInUp"
										delay={2}
										once={true}
										startOnView={true}
										className="text-gray-400 text-xl sm:text-lg md:text-xl lg:text-2xl 
										italic text-justify text-shadow-lg/70 text-shadow-600 leading-relaxed"
									>
										I'm an IoT fresh graduate who builds embedded systems with sensors and 
										microcontrollers with a solid understanding of basic software concept and web development knowledge.
									</TextAnimate>
								</Suspense>
							</div>
						</div>

						<div className="absolute bottom-35 right-35 w-full max-w-[280px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-[420px] xl:max-w-[480px]
						animate__animated animate__backInRight animate__slow animate__delay-1s">
							<img 
								className="block w-full h-auto rounded-full" 
								src={halfBodyPic}
								alt="Profile Picture"
								loading="lazy"
								style={{
									background: "rgba(15,23,42,0.55)",
									maskImage: 'radial-gradient(circle at center, black 55%, transparent 60%)', 
									WebkitMaskImage: 'radial-gradient(circle at center, black 55%, transparent 60%)'
								}}
							/>
						</div>
					</section>

					{/* Skills Section */}
					<Suspense fallback={<div className="min-h-screen" />}>
						<Skills onVisibilityChange={setStickyMode} />
					</Suspense>

					<Suspense fallback={<div className="min-h-screen" />}>
						<Projects />
					</Suspense>
				</main>
			</>
		);
	}