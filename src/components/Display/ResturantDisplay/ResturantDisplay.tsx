import React from "react";
import styles from "./ResturantDisplay.module.css";

const ResturantDisplay: React.FC = (props) => {
  return <div  data-testid ='resturantdisplay' className={styles.SearchBoxDisplayResturant}></div>;
};

export default ResturantDisplay;
