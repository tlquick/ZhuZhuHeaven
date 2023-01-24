import { useLocation } from "react-router-dom";

const Search = () => {
  const location = useLocation();
  const results = JSON.parse(location.state);
  console.log("results are: " + JSON.stringify(results));
  return (
    <div className="main-screen" data-testid="search-1">
      <div className="col-md-9">
        <div className="row">
          {results.map((values) => {
            const { _id, name, desc, price, image } = values;
            return (
              <div className="col-md-4 mb-4" key={_id}>
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
  );
};

export default Search;
