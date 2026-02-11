import React, {lazy, Suspense} from "react";
import "./index.css";
import halfBodyPic from "./assets/half-body-photo.webp";

const GitHubLink = lazy(() => import("./GitHubLink.jsx"));
const LinkedInLink = lazy(() => import("./LinkedInLink.jsx"));
const EmailLink = lazy(() => import("./EmailLink.jsx"));
const ContactLink = lazy(() => import("./ContactLink.jsx"));
const BackgroundBoxes = lazy(() => import("./components/ui/boxes.jsx"));
const FadeContent = lazy(() => import("./components/FadeContent"));
const Magnet = lazy(() => import("./components/Magnet"));


export default function Homepage() {
	return (
		<>
			<Suspense fallback={<div className="fixed inset-0 bg-slate-900" />}>
				<BackgroundBoxes />
			</Suspense>
			
			<main className="text-white min-h-screen flex flex-col px-2 sm:px-4 md:px-6 py-2 md:py-4 pt-2 md:pt-4 lg:pt-6 
			xl:pt-8 relative z-10 pointer-events-none">
				<div>
					<div className="gap-4 mb-8">
						<Suspense fallback={<div className="h-20" />}>
							<FadeContent blur={true} duration={2500} easing="ease-out" initialOpacity={0}>
								<h1 className="text-gray-400 text-2xl sm:text-2xl md:text-4xl lg:text-6xl xl:text-9xl 
								antialiased text-shadow-lg/70 text-shadow-black-600 leading-tight text-left">
									Ow Xun Jiun
								</h1>
							</FadeContent>
						</Suspense>
						
						<hr className="ml-16 border-3 border-white w-full max-w-[580px] my-4" />
						
						<div className="flex flex-wrap items-center gap-4 my-2 md:my-8 ml-20">
							<h2 className="text-gray-400 text-lg sm:text-xl md:text-2xl lg:text-4xl antialiased 
							text-shadow-lg/70 text-shadow-black-600 font-bold">
								IoT Developer
							</h2>

							<Suspense fallback={<div className="flex gap-2 md:gap-4 w-40 h-10" />}>
								<div className="flex gap-2 md:gap-4 pointer-events-auto">
									<Magnet padding={15} disabled={false} magnetStrength={15}>
										<GitHubLink username="olsenow" className="githubicon" />
										<LinkedInLink username="ow-xun-jiun-92022124a" className="linkedinicon" />
										<EmailLink email="olsen4263@outlook.com" className="emailicon" />
										<ContactLink contact="+6011-33364263" className="contacticon" />
									</Magnet>
								</div>
							</Suspense>
						</div>
					</div>

					<div className="flex flex-col max-w-[480px] mb-4 mt-25 ml-25 justify-center">
						<p className="text-gray-400 text-xl sm:text-lg md:text-xl lg:text-2xl italic text-justify 
						text-shadow-lg/70 text-shadow-600">
							"I'm an IoT fresh graduate who builds embedded systems with sensors and microcontrollers with a solid understanding of basic software concept and web development knowledge."
						</p>
					</div>

					<div className="absolute bottom-0 right-0 w-full max-w-[500px] mr-6 mb-25">
						<img 
							className="block w-full h-auto rounded-full" 
							src={halfBodyPic}
							alt="Profile Picture"
							loading="lazy"
							style={{
								maskImage: 'radial-gradient(circle at center, black 50%, transparent 60%)', 
								WebkitMaskImage: 'radial-gradient(circle at center, black 50%, transparent 60%)'
							}}
						/>
					</div>
				</div>
			</main>
		</>
	);
}