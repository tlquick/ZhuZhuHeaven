import React, { useState, useEffect } from "react";
import axios from "axios";
import ItemCards from "./_itemcards";

const Category = () => {
  const [Categories, setCategories] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const url = `${process.env.REACT_APP_SERVER_URL}/category`;
    (async () => {
      try {
        const response = await axios.get(url);
        console.log("UseEffect: " + response.data);
        setCategories(response.data);
        setData(response.data);
      } catch (error) {
        alert(error.message);
      }
    })();
  }, []); //run once

  const filterItems = (series) => {
    const result = Categories.filter((val) => {
      return val.series === series;
    });
    setData(result);
  };

  return (
    <>
      <div
        className="main-screen container-fluid mx-2"
        data-testid="category-1"
      >
        <div className="row mt-5 mx-2">
          <div className="col-md-3">
            <button
              className="btn btn-info w-100 mb-4"
              onClick={() => setData(Categories)}
            >
              All
            </button>
            <button
              className="btn btn-info w-100 mb-4"
              onClick={() => {
                filterItems(1);
              }}
            >
              Series 1
            </button>
            <button
              className="btn btn-info w-100 mb-4"
              onClick={() => {
                filterItems(2);
              }}
            >
              Series 2
            </button>
            <button
              className="btn btn-info w-100 mb-4"
              onClick={() => {
                filterItems(3);
              }}
            >
              Series 3
            </button>
            <button
              className="btn btn-info w-100 mb-4"
              onClick={() => {
                filterItems(4);
              }}
            >
              Series 4
            </button>
            <button
              className="btn btn-info w-100 mb-4"
              onClick={() => {
                filterItems(5);
              }}
            >
              Series 5
            </button>
            <button
              className="btn btn-info w-100 mb-4"
              onClick={() => {
                filterItems(6);
              }}
            >
              Series 6
            </button>
            <button
              className="btn btn-info w-100 mb-4"
              onClick={() => {
                filterItems(7);
              }}
            >
              Series 7
            </button>
            <button
              className="btn btn-info w-100 mb-4"
              onClick={() => {
                filterItems(8);
              }}
            >
              Special Edition
            </button>
          </div>
          <div className="col-md-9">
            <ItemCards items={data} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
