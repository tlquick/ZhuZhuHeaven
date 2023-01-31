import { useState, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Autocomplete, TextField } from "@mui/material";

import axios from "axios";
const SearchBar = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [searchString, setSearchString] = useState("");
  useLayoutEffect(() => {
    const url = `${process.env.REACT_APP_SERVER_URL}/category`;
    (async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        console.log("error is " + error.message);
        alert(error.message);
      }
    })();
  }, []); //run once

  const handleChange = (e, val) => {
    e.preventDefault();
    setSearchString(val.toLowerCase());
  };
  const handleSearch = async (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    params.append("s", searchString);

    const url = `${process.env.REACT_APP_SERVER_URL}/search`;
    const response = await axios.get(url, { params }); //send the searchString to the api as params
    navigate("/search", { state: JSON.stringify(response.data) });
  };
  return (
    <div className="search-wrapper mb-2" data-testid="search-1">
      <Autocomplete
        id="s"
        options={data.map((option) => option.name)}
        style={{
          width: 400,
        }}
        renderInput={(params) => <TextField {...params} label="" />}
        data-testid="search-input"
        onChange={handleChange}
      />
      <button
        className="search-button btn btn-outline-info"
        type="button"
        data-testid="search-button"
        onClick={handleSearch}
      >
        <img src="/images/search.png" alt="search" />
      </button>
    </div>
  );
};

export default SearchBar;
