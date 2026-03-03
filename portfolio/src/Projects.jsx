import React, { useEffect, useRef, useState } from "react";
import 'animate.css/source/fading_entrances/fadeInDown.css';
import PythonPicture from "./assets/Python.webp";
import CPicture from "./assets/C.webp";

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



      const projects = [
        { title: "Smart Home Energy Optimization", 
          desc: " A Final Year Project IoT system designed to optimize energy consumption in intelligent home environments.",
          techStack: "Python, MQTT, InfluxDB, Node-RED",
          hardware: "Raspberry Pi 4B, Sensors (PIR Motion Sensor, Voice Sensor, IR Sensor, LDR Sensor)",
          logo: PythonPicture, 
          delay: "1s"
        },

        { title: "IoT Drone (WIP)", 
          desc: "Personal project of a flying drone equipped with ESP32-CAM with joystick control and live video streaming.",
          techStack: "C",
          hardware: "ESP32-CAM, Joystick Module, Motors, Propellers",
          logo: CPicture, 
          delay: "2s" 
        },

      ];

    return (
      <section ref = {sectionRef} 
      className="min-h-screen flex flex-col px-2 sm:px-4 md:px-6 py-2 md:py-4 pt-2 md:pt-4 lg:pt-6 xl:pt-8 pointer-events-none relative">
        <div className="flex-1">
				  <h2 className={`text-4xl md:text-5xl lg:text-6xl text-gray-400 font-bold mb-16
                        ${visible ? "animate__animated animate__fadeInDown" : "opacity-0"}`}>
					                Projects
				  </h2>
					  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                  <div
                    key={project.title}
                    className={`group relative overflow-hidden rounded-xl border border-white/10
                      bg-white/5 backdrop-blur-sm p-6 pointer-events-auto scale-90
                      transition-all duration-300 ease-out hover:p-8 
                      hover:bg-white/10 hover:scale-100 hover:z-10 hover:shadow-2xl
                      ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                    style={{
                      transitionDelay: visible ? `${index * 120}ms` : "0ms"}}
                  >
                  <img
                    src={project.logo}
                    alt=""
                    aria-hidden="true"
                    className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-auto object-contain
                      opacity-10 transition-transform transition-opacity duration-300
                      group-hover:opacity-20 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-black/25" />

                  <div className="relative z-10 text-left pointer-events-none 
                                  flex flex-col justify-center h-full min-h-[300px]
                                  group-hover:justify-start group-hover:items-start
                                  transition-all duration-300">
                    <h3 className="text-2xl md:text-3xl text-white font-bold
                                    text-center group-hover:text-left
                                    transition-all duration-300
                                    group-hover:text-xl group-hover:mb-4">
                      {project.title}
                    </h3>

                      <p className="mt-4 text-gray-300 leading-relaxed italic
                          opacity-0 translate-y-2 transition-all duration-300
                          group-hover:opacity-100 group-hover:translate-y-0">
                      {project.desc}
                      </p>

                      <p className="mt-4 text-gray-300 leading-relaxed
                          opacity-0 translate-y-2 transition-all duration-300
                          group-hover:opacity-100 group-hover:translate-y-0" >
                        Tech Stack: {project.techStack}
                      </p>

                      <p className="mt-4 text-gray-300 leading-relaxed
                          opacity-0 translate-y-2 transition-all duration-300
                          group-hover:opacity-100 group-hover:translate-y-0">
                        Hardware: {project.hardware}
                      </p>
                  </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/25 to-transparent" />
    </div>
))}
			      </div>
        </div>
		</section> 
    );
}
