import iso31661Alpha2 from "iso-3166-1-alpha-2";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import RegionCard from "../regionCard/RegionCard";

import classes from "./SearchPage.module.scss";

const SearchPage = () => {
  const navigate = useNavigate();

  const [countryCode, setCountryCode] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [resData, setResData] = useState(null);
  const [error, setError] = useState(false);

  const handleZip = (e) => {
    setZipCode(e.target.value);
  };
  const handleSelect = (e) => {
    setCountryCode(e.target.value);
  };

  const getDataByPostal = async () => {
    setError(false);
    setResData(null);
    try {
      const res = await fetch(
        `https://app.zipcodebase.com/api/v1/search?apikey=58160b20-c7a2-11ed-a2e1-c3f4c0c07271&codes=03037&country=${countryCode}`
      );

      const data = await res.json();

      setResData(data.results[zipCode][0]);
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className={classes.page}>
      <button
        className={classes["btn-main"]}
        onClick={() => {
          navigate("/");
        }}
      >
        To main page
      </button>
      <header className={classes.header}>Welcome to search page</header>
      <p className={classes.desc}>
        Here you can get your results by selecting country and ZIP code
      </p>
      <p className={classes.note}>
        Please note that ZIP codes are not unique and you need to specify
        country to get desired relults
      </p>
      <div className={classes["input-wrap-general"]}>
        <select className={classes.select} onChange={handleSelect}>
          {iso31661Alpha2.getCodes().map((e) => (
            <option value={e} key={e}>
              {e}
            </option>
          ))}
        </select>
        <div className={classes["input-wrap"]}>
          <input
            type="text"
            className={classes.inputZip}
            placeholder="zip code"
            onChange={handleZip}
          />
          <button className={classes.btn} onClick={getDataByPostal}>
            Search
          </button>
        </div>
      </div>
      {resData && !error && (
        <div className={classes.card}>
          <RegionCard data={resData} code={countryCode} />
        </div>
      )}
      {error && (
        <div className={classes.error}>
          Error occured, perhaps ZIP code does not exist for this county
        </div>
      )}
    </div>
  );
};

export default SearchPage;
