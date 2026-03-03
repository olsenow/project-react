import React, {useState, useRef, useEffect} from "react";
import 'animate.css/source/fading_entrances/fadeInDown.css';

export default function Experience({onVisibilityChange}) {
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
        <section ref={sectionRef} className="min-h-screen px-4 sm:px-8 md:px-14 pt-32 pb-20">
            <div className="max-w-7xl mx-auto">
                <h2 className={`text-4xl md:text-5xl lg:text-6xl text-gray-400 font-bold mb-16 pointer-events-none
                                transition-all duration-700
                                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
                                    Work Experience
                </h2>

                <div className="space-y-12">
                    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                        <li>
                            <div className="timeline-left">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="h-5 w-5"
                                >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clipRule="evenodd"
                                />
                                </svg>
                            </div>
                            <div className="timeline-start mb-10 md:text-end">
                                <time className="font-mono italic">2024</time>
                                <div className={`transition-all duration-1000 ease-out text-lg font-black justify-right
                                    ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
                                    Internship at MC Crenergy Sdn Bhd
                                    <p className="mt-2 text-sm md:text-base leading-relaxed italic ">
                                    Worked as a support intern in MC Crenergy which mainly focused on support team 
                                    internal tasks including, ticket tracking, ticket creation, level 1 ticket resolving, 
                                    database housekeeping, and company software product testing.
                                    </p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>      
            </div>
        </section>
    );
}