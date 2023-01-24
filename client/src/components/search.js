import { useLocation } from "react-router-dom";
import ItemCards from "./_itemcards";
const Search = () => {
  const location = useLocation();
  const data = JSON.parse(location.state);
  return (
    <div className="main-screen" data-testid="search-1">
      <div className="col-md-9">
        <ItemCards items={data} />
      </div>
    </div>
  );
};

export default Search;
