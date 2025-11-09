import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faEnvelopeOpen } from "@fortawesome/free-regular-svg-icons";

export default function EmailLink({
    email,
    sizeClass = 'text-3xl',
    className = '',
    label = null,
}) {
    if (!email) return null;
    const [showEmail, setShowEmail] = useState(false);
    return (
        <div
            className={`relative flex items-center ${className}`}
            onMouseEnter={() => setShowEmail(true)}
            onMouseLeave={() => setShowEmail(false)}
        >
            <FontAwesomeIcon
                icon={showEmail ? faEnvelopeOpen : faEnvelope}
                className={`${sizeClass} text-white hover:text-gray-200 transition-colors motion-safe:transform motion-safe:transition-transform motion-safe:duration-150 hover:scale-120 cursor-pointer`}
                aria-hidden="true"
            />
            <span
                className={`absolute left-16 top-1/2 -translate-y-1/2 text-white text-lg select-text transition-opacity duration-500 ${showEmail ? 'opacity-100' : 'opacity-0'}`}
            >
                {email}
            </span>
        </div>
    );
}  
    {/*<div className="relative flex items-center"
		onMouseEnter={() => setShowEmail(true)}
		onMouseLeave={() => setShowEmail(false)}
	>
	    <FontAwesomeIcon icon={showEmail ? faEnvelopeOpen : faEnvelope} size="2x" className="m-4 cursor-pointer hover:scale-110 hover:text-gray-300 transition-all duration-300"/>
    		<span className={`absolute left-16 top-1/2 -translate-y-1/2 text-white text-lg select-text transition-opacity duration-500 ${showEmail ? 'opacity-100' : 'opacity-0'}`}>
    		olsenow4263@outlook.com
  			</span>
	</div>*/}   