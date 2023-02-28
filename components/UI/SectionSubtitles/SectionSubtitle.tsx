import React from "react";
import classes from "./subtitle.module.css";

const SectionSubtitle = (props: { subtitle: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) => {
  return <h5 className={`${classes.section__subtitle}`}>{props.subtitle}</h5>;
};

export default SectionSubtitle;
