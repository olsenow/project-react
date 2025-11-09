import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function GitHubLink({
  username,
  sizeClass = 'text-3xl',
  className = '',
  label = null,
}) {
  if (!username) return null;
  const href = `https://github.com/${username}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label ?? `Open ${username} on GitHub`}
      title={label ?? `GitHub: ${username}`}
      className={`inline-flex items-center justify-center rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 ${className}`}
    >
      <FontAwesomeIcon
        icon={faGithub}
        className={`${sizeClass} text-white hover:text-gray-200 transition-colors motion-safe:transform motion-safe:transition-transform motion-safe:duration-150 hover:scale-120`}
        aria-hidden="true"
      />
      {label ? (
        <span className="ml-2 text-sm text-white">{label}</span>
      ) : (
        <span className="sr-only">GitHub profile</span>
      )}
    </a>
  );
}