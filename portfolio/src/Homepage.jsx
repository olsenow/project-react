import React, {useState} from "react";
import "./index.css";
import GitHubLink from "./GitHubLink.jsx";
import LinkedInLink from "./LinkedInLink.jsx";
import EmailLink from "./EmailLink.jsx";
import halfBodyPic from "./assets/half-body-photo.jpg";
import ContactLink from "./ContactLink.jsx";

export default function Homepage() {
	return (
		<main className="bg-sky-600 text-white h-screen flex flex-col">
			<div className="m-14 gap-4 mb-8 justify-center items-center">
				<h1 className="text-9xl antialiased text-shadow-lg/70 text-shadow-black-600 leading-[1.5] text-left" >Ow Xun Jiun</h1>
				<hr className="border-2 border-white w-[700px] my-4 " />
					<span className="flex flex-row items-center gap-3">
						<h1 className="text-5xl antialiased text-shadow-lg/70 text-shadow-black-600 leading-[3] justify-center text-left m-9 ">IoT Developer</h1>
						<GitHubLink username="olsenow" className="m-4" />
						<LinkedInLink username="ow-xun-jiun-92022124a" className="m-4" />
						<EmailLink email="olsen4263@outlook.com" className="m-4" />
						<ContactLink contact="+6011-33364263" className="m-4" />
					</span>
			</div>

			<div className="flex flex-col m-14 gap-6">
				<p className="text-3xl italic text-pretty max-w-3xl text-justify text-shadow-lg/70 text-shadow-600">"I'm an IoT fresh graduate who builds embedded systems with sensors and microcontrollers with a solid understanding of basic software concept and web development knowledge."</p>
			</div>

			<div class="relative inline-block mb-8 mx-14 w-[732px] -mt-186 items-right self-end">
  				<img class="block w-full h-auto mask-b-from-89% mask-b-to-100%" src={halfBodyPic} />
			</div>

		</main>
	);
}

