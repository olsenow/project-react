import React, { useEffect, useRef, useState } from "react";
import 'animate.css/source/fading_entrances/fadeInDown.css';

export default function Skills( {onVisibilityChange} ) {
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

  const skills = [
    { emoji: "🔌", title: "IoT Development", desc: "Arduino, Raspberry Pi, ESP32, Sensors, MQTT, IoT Protocols" },
    { emoji: "⚙️", title: "Embedded Systems", desc: "Microcontrollers, Sensors" },
    { emoji: "💻", title: "Web Development", desc: "HTML, CSS, React, JavaScript, Tailwind CSS" },
    { emoji: "🛠️", title: "Hardware", desc: "PCB Design, Soldering, Testing & Debugging" },
    { emoji: "🔧", title: "Tools & Platforms", desc: "Git, VS Code, Linux, GitHub Actions" },
  ];

  return (
    <section ref={sectionRef} className="min-h-screen px-4 sm:px-8 md:px-14 pt-32 pb-20">
      <div className="max-w-7xl mx-auto">
        {/* Title: controlled by visible */}
        <h2
          className={`text-4xl md:text-5xl lg:text-6xl text-gray-400 font-bold mb-16 pointer-events-none
          transition-all duration-700
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          Skills & Technologies
        </h2>

        {/* Cards: controlled by same visible (combined trigger) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.title}
              className={`bg-white/5 backdrop-blur-sm rounded-xl p-8 pointer-events-auto
              hover:bg-white/10 border border-white/10
              transition-all duration-700
              ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{
                transitionDelay: visible ? `${index * 120}ms` : "0ms", // stagger in, reset out
              }}
            >
              <div className="text-4xl mb-4">{skill.emoji}</div>
              <h3 className="text-2xl text-white font-semibold mb-4">{skill.title}</h3>
              <p className="text-gray-400 leading-relaxed">{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}