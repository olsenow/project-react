import React, {lazy, Suspense} from "react";
import { faPython, faHtml5, faCss3Alt, faJs, faReact, faTailwindCss, faGitAlt, faGitHub } from "@fortawesome/free-brands-svg-icons";

const logoMarquee = lazy(() => import ("react-fast-marquee"));
export default function Skills() {
    return (
        <>  
            <Suspense fallback={<div className="fixed inset-0 bg-slate-900" />}>
                <BackgroundBoxesCanvas />
            </Suspense>
            <main>
                <div>
                    <h1>Skills</h1>
                    <div>
                        <logoMarquee speed={50} gradient={false} pauseOnHover={true} className="py-4">
                            <FontAwesomeIcon icon={faPython} size="4x" className="mx-6 text-yellow-500" />
                            <FontAwesomeIcon icon={faHtml5} size="4x" className="mx-6 text-orange-500" />
                            <FontAwesomeIcon icon={faCss3Alt} size="4x" className="mx-6 text-blue-500" />
                            <FontAwesomeIcon icon={faJs} size="4x" className="mx-6 text-yellow-400" />
                            <FontAwesomeIcon icon={faReact} size="4x" className="mx-6 text-cyan-400" />
                            <FontAwesomeIcon icon={faTailwindCss} size="4x" className="mx-6 text-sky-400" />
                            <FontAwesomeIcon icon={faGitAlt} size="4x" className="mx-6 text-red-500" />
                            <FontAwesomeIcon icon={faGitHub} size="4x" className="mx-6 text-gray-400" />
                        </logoMarquee>
                    </div>
                </div>
            </main>
        </>
    );
}