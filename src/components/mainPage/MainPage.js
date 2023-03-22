import React from "react";
import { useNavigate } from "react-router-dom";

import classes from "./MainPage.module.scss";

const MainPage = () => {
  const navigate = useNavigate();

  return (
    <div className={classes.page}>
      <header className={classes.header}>
        Welcome to search info by Zip app
      </header>

      <p className={classes.desc}>
        Here you can get information about region by ZIP code
      </p>
      <button
        className={classes.btn}
        onClick={() => {
          navigate("/search");
        }}
      >
        Get started
      </button>
    </div>
  );
};

export default MainPage;
