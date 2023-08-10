# About interviewprep.tiffanylea.com

## Tech Used

- **Site generation** via [Docusaurus](https://docusaurus.io/)
- **Version control** via Github [interviewprep-tiffanylea-com](https://github.com/tiffyzsmile/interviewprep-tiffanylea-com)
- **Hosting** with AWS Amplify Console
- **Continuous integration** via merge to master
- **AWS region** us-west-2 aka US West (Oregon)
- **AWS profile** none... only uses console no CLI or hosting

## Why it's own site?

Originally I combined all docs in docs.tiffanylea.com but quickly realized I was dealing with 2 completely different use cases.

- Interview Prep
  - detailed docs to refresh before interviews
  - different material set specifically geared towards interviews
  - more technical wording for better communication
- Daily KB (docs)
  - more of a quick reference for daily stuff
  - much broader subject list
  - layman's terms for quick absorption

### Issues

- a lot of needed but slight duplication
  - made maintenance confusing
  - made navigating to find content confusing
  - loosing track of content between quick reference and more detailed versions

Thus this site was born!

# Specific Use Cases

## Codeblocks

The following is a code block with Javascript language syntax highlighting.

```javascript
import React from "react";
```

Supports multiple languages.

The following is a code block with diff. Lines with `+` highlighted in green shade indicating an addition. Lines with `-` highlighted in red shade indicating a deletion.

```javascript
- const data = ['1','2'];
+ const data = [1,2];
```

### Live Editing example

```javascript react-live=true
<button className={"btn btn-default"}>Change my text</button>
```
