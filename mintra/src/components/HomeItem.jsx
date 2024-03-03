import { useDispatch, useSelector } from "react-redux";
import { bagAction } from "../store/bagSlice";

const HomeItem = ({ item }) => {
  const dispatch = useDispatch();
  const bagItem = useSelector((store) => store.bag);

  const itemFounded = bagItem.indexOf(item.id) >= 0;

  const handleAddToBag = () => {
    dispatch(bagAction.addToBag(item.id));
  };

  const deleteFromBag = () => {
    dispatch(bagAction.deleteFromBag(item.id));
  };

  return (
    <>
      <div className="item-container">
        <img className="item-image" src={item.image} alt="item image" />
        <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
        </div>
        <div className="company-name">{item.company}</div>
        <div className="item-name">{item.item_name}</div>
        <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">(${item.discount_percentage}% OFF)</span>
        </div>
        {itemFounded ? (
          <button className="btn btn-success" onClick={deleteFromBag()}>
            remove
          </button>
        ) : (
          <button className="btn btn-danger" onClick={handleAddToBag()}>
            Add to bag
          </button>
        )}
      </div>
    </>
  );
};

export default HomeItem;
