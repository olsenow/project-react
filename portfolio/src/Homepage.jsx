import React, { lazy, Suspense, useState, useEffect, useCallback } from "react";
import "./index.css";
import halfBodyPic from "./assets/half-body-photo.webp";
import "animate.css";

const GitHubLink = lazy(() => import("./GitHubLink.jsx"));
const LinkedInLink = lazy(() => import("./LinkedInLink.jsx"));
const EmailLink = lazy(() => import("./EmailLink.jsx"));
const ContactLink = lazy(() => import("./ContactLink.jsx"));
const BackgroundBoxesCanvas = lazy(() => import("./components/ui/boxes.jsx"));
const FadeContent = lazy(() => import("./components/FadeContent"));
const Magnet = lazy(() => import("./components/Magnet"));
const TextAnimate = lazy(() =>
  import("./components/ui/text-animate").then((m) => ({ default: m.TextAnimate }))
);

const Skills = lazy(() => import("./Skills.jsx"));
const Projects = lazy(() => import("./Projects.jsx"));
const Experience = lazy(() => import("./Experience.jsx"));

export default function Homepage() {
  const [showLine, setShowLine] = useState(false);
  const [showIcons, setShowIcons] = useState(false);
  const [sectionVisibility, setSectionVisibility] = useState({
    skills: false,
    projects: false,
    experience: false,
  });

  const stickyMode =
    sectionVisibility.skills || sectionVisibility.projects || sectionVisibility.experience;

  const handleSectionVisibility = useCallback(
    (sectionName) => (isVisible) => {
      setSectionVisibility((prev) => ({ ...prev, [sectionName]: isVisible }));
    },
    []
  );

  const scrollToMain = () => {
    const el = document.querySelector("#homepage-main");
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    const timer = setTimeout(() => setShowLine(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setShowIcons(true), 1000);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {/* Background */}
      <Suspense fallback={<div className="fixed inset-0 bg-slate-900 z-0" />}>
        <BackgroundBoxesCanvas />
      </Suspense>

      {/* Sticky Mini Header */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out
        ${stickyMode ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}
      >
        <div className="flex items-center justify-between px-4 sm:px-6 md:px-10 py-3 md:py-4 backdrop-blur-lg bg-slate-900/90 border-b border-white/10">
          <div className="flex flex-col items-start gap-0.5">
            <h1 className="text-base sm:text-lg md:text-2xl text-gray-200 font-semibold pointer-events-auto">
              Ow Xun Jiun
            </h1>
            <h2 className="text-[11px] sm:text-xs md:text-sm text-gray-400 font-semibold pointer-events-auto">
              IoT Developer
            </h2>
          </div>

          <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex-shrink-0">
            <img
              className="block w-full h-full rounded-full object-cover"
              src={halfBodyPic}
              alt="Profile Picture"
              style={{
                maskImage: "radial-gradient(circle at center, black 55%, transparent 60%)",
                WebkitMaskImage:
                  "radial-gradient(circle at center, black 55%, transparent 60%)",
              }}
            />
          </div>
        </div>
      </div>

      {/* Add top padding only when sticky header is visible, so content doesn't hide behind it */}
      <main
        id="homepage-main"
        className={`text-white relative z-10 transition-[padding] duration-300 ${
          stickyMode ? "pt-16 sm:pt-20" : "pt-0"
        }`}
      >
        {/* HERO */}
        <section className="min-h-screen relative">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-10 pt-6 md:pt-10 pb-10">
            {/* Stack on mobile, split on lg */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              {/* LEFT (Text) */}
              <div className="pointer-events-none">
                <Suspense fallback={<div className="h-16 sm:h-20 w-full bg-white/5 rounded animate-pulse" />}>
                  <FadeContent blur duration={2500} easing="ease-out" initialOpacity={0}>
                    <h1 className="text-gray-300 text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight text-left">
                      Ow Xun Jiun
                    </h1>
                  </FadeContent>
                </Suspense>

                {/* Line */}
                <div className="mt-5 w-full max-w-[520px]">
                  <div className={`line ${showLine ? "show" : ""}`} />
                </div>

                {/* Title + icons */}
                <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8">
                  <h2 className="animate__animated animate__fadeInUp animate__slow text-gray-300 text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
                    IoT Developer
                  </h2>

                  <Suspense fallback={<div className="h-10 w-44 bg-white/5 rounded animate-pulse" />}>
                    <div
                      className={`pointer-events-auto ${
                        showIcons
                          ? "animate__animated animate__lightSpeedInRight animate__slow"
                          : "opacity-0"
                      }`}
                    >
                      <Magnet padding={15} disabled={false} magnetStrength={15}>
                        <div className="flex gap-5 sm:gap-6">
                          <GitHubLink username="olsenow" />
                          <LinkedInLink username="ow-xun-jiun-92022124a" />
                          <EmailLink email="olsen4263@outlook.com" />
                          <ContactLink contact="+6011-33364263" />
                        </div>
                      </Magnet>
                    </div>
                  </Suspense>
                </div>

                {/* Description */}
                <div className="mt-8 max-w-xl">
                  <Suspense fallback={<div className="h-28 w-full bg-white/5 rounded animate-pulse" />}>
                    <TextAnimate
                      by="word"
                      animation="blurInUp"
                      delay={1.2} // smaller delay feels better on mobile
                      once
                      startOnView
                      className="text-gray-300/90 text-base sm:text-lg md:text-xl italic leading-relaxed"
                    >
                      I'm an IoT fresh graduate who builds embedded systems with sensors and microcontrollers with a solid
                      understanding of basic software concept and web development knowledge.
                    </TextAnimate>
                  </Suspense>
                </div>
              </div>

              {/* RIGHT (Photo) */}
              {/* On mobile/tablet: keep in normal flow (no absolute overlap).
                  On lg+: allow it to sit nicely and bigger. */}
              <div className="pointer-events-none flex justify-center lg:justify-end">
                <div className="w-[220px] sm:w-[280px] md:w-[330px] lg:w-[420px] xl:w-[480px]">
                  <img
                    className="block w-full h-auto rounded-full animate__animated animate__backInRight animate__slow"
                    src={halfBodyPic}
                    alt="Profile Picture"
                    loading="lazy"
                    style={{
                      background: "rgba(15,23,42,0.55)",
                      maskImage: "radial-gradient(circle at center, black 55%, transparent 60%)",
                      WebkitMaskImage:
                        "radial-gradient(circle at center, black 55%, transparent 60%)",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTIONS */}
        <Suspense fallback={<div className="min-h-screen" />}>
          <Skills onVisibilityChange={handleSectionVisibility("skills")} />
        </Suspense>

        <Suspense fallback={<div className="min-h-screen" />}>
          <Experience onVisibilityChange={handleSectionVisibility("experience")} />
        </Suspense>

        <Suspense fallback={<div className="min-h-screen" />}>
          <Projects onVisibilityChange={handleSectionVisibility("projects")} />
        </Suspense>

        {/* Back to top */}
        <div className="flex justify-center py-8">
          <button
            onClick={scrollToMain}
            className="pointer-events-auto border border-white/10 rounded-lg px-4 py-2 text-gray-400 hover:text-white hover:bg-white/5 transition-colors duration-200"
          >
            Back to Top
          </button>
        </div>
      </main>

      <footer className="relative z-10 bg-slate-900/90 backdrop-blur-lg border-t border-white/10 py-4 px-4">
        <div className="max-w-3xl mx-auto text-center text-gray-400 text-xs sm:text-sm">
          <p>© 2026 Designed and Developed by Ow Xun Jiun. Made with ReactJS and Tailwind CSS.</p>
        </div>
      </footer>
    </>
  );
}