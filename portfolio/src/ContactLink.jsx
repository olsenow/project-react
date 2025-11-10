import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";

export default function ContactLink({
    contact = "+6011-33364263",
    sizeClass = "text-3xl",
    className = "",
}){
    const [showContact, setShowContact] = useState(false);
    const [copied, setCopied] = useState(false);
    
    async function copyToClipboard(e) {
    e.preventDefault();
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(contact);
      } else {
        const ta = document.createElement("textarea");
        ta.value = contact;
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

    return(
        <div className= {`relative inline-flex items-center ${className}`}
        onMouseEnter={() => setShowContact(true)}
        onMouseLeave={() => setShowContact(false)}
        onFocus={() => setShowContact(true)}
        onBlur={() => setShowContact(false)}
        >
        <button
        type="button"
        onClick={copyToClipboard}
        className="inline-flex items-center gap-2 text-white focus:outline-none"
        aria-label={`Copy email address ${contact} to clipboard`}
        >
            <FontAwesomeIcon
            icon={showContact ? faPhoneVolume : faPhone}
            className={`${sizeClass} text-white hover:text-gray-200 transition-transform motion-safe:duration-150 cursor-pointer`}
            aria-hidden="true"
            />
        </button>
        <span
        className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 z-50 text-wrap text-white text-lg select-text transition-opacity duration-150 whitespace-nowrap"
        style={{ opacity: showContact ? 1 : 0, pointerEvents: showContact ? "auto" : "none" }}
        role="status"
        aria-live="polite"
        >
            {copied ? "Copied!" : contact}
        </span>
        </div>
    );
}