import React from "react";

import classes from "./RegionCard.module.scss";

const RegionCard = ({ data, code }) => {
 

  const regionNames = new Intl.DisplayNames(["en"], { type: "region" });

  
  return (
    <div className={classes.wrapper}>
      <div>
        <h3 className={classes.row}>
          <span>Country:</span>
          <span>{regionNames.of(code)}</span>
        </h3>
        <h3 className={classes.row}>
          <span>City:</span>
          <span>{data.city}</span>
        </h3>

        <h3 className={classes.row}>
          <span>Latitude:</span>
          <span>{data.latitude}</span>
        </h3>
        <h3 className={classes.row}>
          <span>Longitude:</span>
          <span>{data.longitude}</span>
        </h3>
      </div>
    </div>
  );
};

export default RegionCard;
