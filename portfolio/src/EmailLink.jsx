import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faEnvelopeOpen } from "@fortawesome/free-regular-svg-icons";

export default function EmailLink({
  email = "olsen4263@outlook.com",
  sizeClass = "text-3xl",
  className = "",
}) {
  const [showEmail, setShowEmail] = useState(false);
  const [copied, setCopied] = useState(false);

  async function copyToClipboard(e) {
    e.preventDefault();
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(email);
      } else {
        const ta = document.createElement("textarea");
        ta.value = email;
        ta.style.position = "fixed";
        ta.style.left = "-9999px";
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch (err) {
      console.error("Copy failed", err);
    }
  }


  return (
    <div
      className={`relative inline-flex items-center ${className}`}
      onMouseEnter={() => setShowEmail(true)}
      onMouseLeave={() => setShowEmail(false)}
      onFocus={() => setShowEmail(true)}
      onBlur={() => setShowEmail(false)}
    >
      <button
        type="button"
        onClick={copyToClipboard}
        className="inline-flex items-center gap-2 text-white focus:outline-none"
        aria-label={`Copy email address ${email} to clipboard`}
      >
        <FontAwesomeIcon
          icon={showEmail ? faEnvelopeOpen : faEnvelope}
          className={`${sizeClass} text-white hover:text-gray-200 transition-transform motion-safe:duration-150 cursor-pointer`}
          aria-hidden="true"
        />
      </button>

      <span
        className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 z-50 text-white text-lg select-text transition-opacity duration-150"
        // use showEmail (not "show") so we don't reference an undefined variable
        style={{ opacity: showEmail ? 1 : 0, pointerEvents: showEmail ? "auto" : "none" }}
        role="status"
        aria-live="polite"
      >
        {copied ? "Copied!" : email}
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