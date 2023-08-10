import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import CodeWithHtml from '@site/src/components/CodeWithHtml';

export default {
    // Re-use the default mapping
    ...MDXComponents,
    CodeWithHtml,
};
