import React from "react";
import { MdOpenInNew } from "react-icons/md";

const ExternalLink = ({ href, text }) => {
  return (
    <a target="_blank" rel="noopener noreferrer" href={href}>
      {text} <MdOpenInNew size="0.8em" />
    </a>
  );
};

export default ExternalLink;
