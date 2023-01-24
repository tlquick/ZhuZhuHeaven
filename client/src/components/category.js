import React, { useState } from "react";
import Categories from "./categories";
const Category = () => {
  console.log("Categories are: " + Categories);
  const [data, setData] = useState(Categories);
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
            <div className="row">
              {data.map((values) => {
                const { id, name, desc, price, image } = values;
                return (
                  <div className="col-md-4 mb-4" key={id}>
                    <div className="card">
                      <img src={image} className="card-img-top" alt="item" />
                      <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{desc}</p>
                        <p>Price: ${price}</p>
                        <a href="/cart" className="btn btn-dark">
                          Add to Cart
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
