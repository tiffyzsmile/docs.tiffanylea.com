import React from "react";
import { MdOpenInNew } from "react-icons/md";

const ExternalLink = ({ children, ...props }) => (
  <a target="_blank" rel="noopener noreferrer" {...props}>
    {children} <MdOpenInNew size="0.8em" />
  </a>
);

export default ExternalLink;
