import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  path: string;
  image: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Docs",
    path: "/docs/",
    image: "/files/images/book-1.png",
    description: <>Personal KB Docs.</>,
  },
  {
    title: "Code",
    path: "/docs-code/",
    image: "/files/images/book-2.png",
    description: <>Common code snippets.</>,
  },
  {
    title: "Interview Prep",
    path: "/docs-prep/",
    image: "/files/images/book-3.png",
    description: <>Prep for interviews.</>,
  },
];

function Feature({ title, path, image, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <a href={path} className={styles.noLinkStyle}>
        <div className="text--center">
          <img src={image} className={styles.featureSvg} role="img" />
        </div>
        <div className="text--center padding-horiz--md">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </a>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
