import React from "react";
import "./index.css";
export default function Homepage() {
	return (
		<main className="bg-sky-600 text-white h-screen flex flex-col justify-center items-center">
			<div className="">
				<h1 className="text-9xl antialiased text-shadow-lg/70 text-shadow-black-600 leading-[1.5]" >Ow Xun Jiun</h1>
				<hr className="border-2 border-white w-1/4 mx-auto my-4 " />
				<p className="text-5xl antialiased text-shadow-lg/70 text-shadow-black-600 text-center leading-[3]">IoT Developer</p>
				
			</div>
			<div>
				<p className="text-3xl text-pretty max-w-3xl text-justify text-shadow-lg/70 text-shadow-600">I'm an IoT fresh graduate who builds embedded systems with sensors and microcontrollers with a solid understanding and basic software concept knowledge.</p>
				
			</div>
		</main>
	);
}

