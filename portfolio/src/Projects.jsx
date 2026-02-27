import React, { useEffect, useRef, useState } from "react";
import "animate.css";




export default function Projects({onVisibilityChange}) {
    const sectionRef = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;
    
        const observer = new IntersectionObserver(
          ([entry]) => {
            const isVisible = entry.isIntersecting;
            setVisible(isVisible); 
    
            if (onVisibilityChange) {
                onVisibilityChange(isVisible);
            }
          },
          {
            threshold: 0.2,
            rootMargin: "-80px 0px 0px 0px",
          }
        );
    
        observer.observe(el);
        return () => observer.disconnect();
      }, [onVisibilityChange]);

    return (
        <section ref = {sectionRef} className="min-h-screen flex flex-col px-2 sm:px-4 md:px-6 py-2 md:py-4 pt-2 md:pt-4 lg:pt-6 xl:pt-8 pointer-events-none relative">
		    <div className="flex-1">
				<h2 className="text-4xl md:text-5xl lg:text-6xl text-gray-400 font-bold mb-16 
				    animate__animated animate__fadeInDown">
					Projects
				</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{[
							{ title: "Smart Home Automation", desc: "IoT system using ESP32 and MQTT for remote control of home appliances.", delay: "1s" },
							{ title: "IoT Drone", desc: "Flying drone equipped with ESP32-CAM with joystick control and live video streaming.", delay: "2s" },
							{ title: "Personal Portfolio Website", desc: "Built with React and Tailwind CSS, showcasing my projects and skills.", delay: "3s" }
							].map((project, index) => (
								<div key={index} className={`bg-white/5 backdrop-blur-sm rounded-xl p-8 pointer-events-auto 
								hover:bg-white/10 transition-all duration-300 border border-white/10 
								animate__animated animate__fadeInUp animate__delay-${project.delay}`}>
									<h3 className="text-2xl text-white font-semibold mb-4">{project.title}</h3>
										<p className="text-gray-400 leading-relaxed">{project.desc}</p>
								</div>
							))}
					</div>
			</div>
		</section>
    );
}
