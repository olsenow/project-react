import{r as s,j as e}from"./index-F3-qm5C8.js";/* empty css                   */const p="/project-react/assets/Python-DLS-mdjA.webp",x="/project-react/assets/C-D_k0SMnT.webp";function u({onVisibilityChange:o}){const n=s.useRef(null),[a,l]=s.useState(!1);s.useEffect(()=>{const t=n.current;if(!t)return;const r=new IntersectionObserver(([d])=>{const i=d.isIntersecting;l(i),o&&o(i)},{threshold:.2,rootMargin:"-80px 0px 0px 0px"});return r.observe(t),()=>r.disconnect()},[o]);const c=[{title:"Smart Home Energy Optimization",desc:" A Final Year Project IoT system designed to optimize energy consumption in intelligent home environments.",techStack:"Python, MQTT, InfluxDB, Node-RED",hardware:"Raspberry Pi 4B, Sensors (PIR Motion Sensor, Voice Sensor, IR Sensor, LDR Sensor)",logo:p,delay:"1s"},{title:"IoT Drone (WIP)",desc:"Personal project of a flying drone equipped with ESP32-CAM with joystick control and live video streaming.",techStack:"C",hardware:"ESP32-CAM, Joystick Module, Motors, Propellers",logo:x,delay:"2s"}];return e.jsx("section",{ref:n,className:"min-h-screen flex flex-col px-2 sm:px-4 md:px-6 py-2 md:py-4 pt-2 md:pt-4 lg:pt-6 xl:pt-8 pointer-events-none relative",children:e.jsxs("div",{className:"flex-1",children:[e.jsx("h2",{className:`text-4xl md:text-5xl lg:text-6xl text-gray-400 font-bold mb-16
                        ${a?"animate__animated animate__fadeInDown":"opacity-0"}`,children:"Projects"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:c.map((t,r)=>e.jsxs("div",{className:`group relative overflow-hidden rounded-xl border border-white/10
                      bg-white/5 backdrop-blur-sm p-6 pointer-events-auto scale-90
                      transition-all duration-300 ease-out hover:p-8 
                      hover:bg-white/10 hover:scale-100 hover:z-10 hover:shadow-2xl
                      ${a?"opacity-100 translate-y-0":"opacity-0 translate-y-10"}`,style:{transitionDelay:a?`${r*120}ms`:"0ms"},children:[e.jsx("img",{src:t.logo,alt:"","aria-hidden":"true",className:`absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-auto object-contain\r
                      opacity-10 transition-transform transition-opacity duration-300\r
                      group-hover:opacity-20 group-hover:scale-110`}),e.jsx("div",{className:"absolute inset-0 bg-black/25"}),e.jsxs("div",{className:`relative z-10 text-left pointer-events-none \r
                                  flex flex-col justify-center h-full min-h-[300px]\r
                                  group-hover:justify-start group-hover:items-start\r
                                  transition-all duration-300`,children:[e.jsx("h3",{className:`text-2xl md:text-3xl text-white font-bold\r
                                    text-center group-hover:text-left\r
                                    transition-all duration-300\r
                                    group-hover:text-xl group-hover:mb-4`,children:t.title}),e.jsx("p",{className:`mt-4 text-gray-300 leading-relaxed italic\r
                          opacity-0 translate-y-2 transition-all duration-300\r
                          group-hover:opacity-100 group-hover:translate-y-0`,children:t.desc}),e.jsxs("p",{className:`mt-4 text-gray-300 leading-relaxed\r
                          opacity-0 translate-y-2 transition-all duration-300\r
                          group-hover:opacity-100 group-hover:translate-y-0`,children:["Tech Stack: ",t.techStack]}),e.jsxs("p",{className:`mt-4 text-gray-300 leading-relaxed\r
                          opacity-0 translate-y-2 transition-all duration-300\r
                          group-hover:opacity-100 group-hover:translate-y-0`,children:["Hardware: ",t.hardware]})]}),e.jsx("div",{className:"pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/25 to-transparent"})]},t.title))})]})})}export{u as default};
