const ItemCards = (list) => {
  const data = list.items;
  return (
    <div className="row" data-testid="itemcards-1">
      {data.map((values) => {
        const { _id, name, desc, price, image } = values;
        return (
          <div className="col-md-4 mb-4" key={_id}>
            <div className="card" data-testid="itemcards-2">
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
  );
};

export default ItemCards;
