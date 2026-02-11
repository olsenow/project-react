import React from "react";
import "./index.css";
import GitHubLink from "./GitHubLink.jsx";
import LinkedInLink from "./LinkedInLink.jsx";
import EmailLink from "./EmailLink.jsx";
import halfBodyPic from "./assets/half-body-photo.jpg";
import ContactLink from "./ContactLink.jsx";
import BackgroundBoxes from "./components/ui/boxes.jsx";

export default function Homepage() {
	return (
		<>
			<BackgroundBoxes />
			<main className="text-white min-h-screen flex flex-col px-2 sm:px-4 md:px-6 py-2 md:py-4 pt-2 md:pt-4 lg:pt-6 xl:pt-8 relative z-10 pointer-events-none">
				<div>
					<div className="gap-4 mb-8">
						<h1 className="text-4xl sm:text-xl md:text-2xl lg:text-4xl xl:text-6xl antialiased text-shadow-lg/70 text-shadow-black-600 leading-tight text-left">
						Ow Xun Jiun
						</h1>
						<hr className="border-2 border-white w-full max-w-[550px] my-4" />
						
						<div className="flex flex-wrap items-center gap-4 my-2 md:my-4">
							<h2 className="text-xl sm:text-xl md:text-xl lg:text-2xl antialiased text-shadow-lg/70 text-shadow-black-600">
							IoT Developer
							</h2>
							
							<div className="flex gap-2 md:gap-4 pointer-events-auto">
								<GitHubLink username="olsenow" className="githubicon"/>
								<LinkedInLink username="ow-xun-jiun-92022124a" className="linkedinicon"/>
								<EmailLink email="olsen4263@outlook.com" className="emailicon"/>
								<ContactLink contact="+6011-33364263" className="contacticon"/>
							</div>
						</div>
					</div>

					<div className="flex flex-col max-w-[480px] mb-4 -mt-4">
						<p className="text-lg sm:text-xs md:text-base lg:text-lg italic text-justify text-shadow-lg/70 text-shadow-600">
						"I'm an IoT fresh graduate who builds embedded systems with sensors and microcontrollers with a solid understanding of basic software concept and web development knowledge."
						</p>
					</div>

					<div className="absolute bottom-0 right-0 w-full max-w-[450px] mr-6 mb-50">
						<img 
							className="block w-full h-auto rounded-full" 
							src={halfBodyPic}
							alt="Profile Picture"
							style={{
								maskImage: 'radial-gradient(circle at center, black 55%, transparent 65%)',
								WebkitMaskImage: 'radial-gradient(circle at center, black 55%, transparent 65%)'
							}}
						/>
					</div>
				</div>

				<div className="mt-15 md:mt-20 lg:mt-40 xl:mt-60 text-2xl sm:text-xl md:text-2xl lg:text-4xl xl:text-6xl antialiased text-shadow-lg/70 text-shadow-black-600 leading-tight">
					<div>
						Skills
					</div>
				</div>
			</main>
		</>
	);
}
