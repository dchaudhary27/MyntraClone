import { useDispatch, useSelector } from "react-redux";
import { bagSliceActions } from "../Store/BagSlice";
import { IoAddOutline } from "react-icons/io5";
import { MdDelete } from "react-icons/md";

const HomeItem = ({ item }) => {
  const dispatch = useDispatch();
  const BagItem = useSelector((store) => store.bag);
  const elementFound = BagItem.indexOf(item.id) >= 0;

  const handleAdd = () => {
    dispatch(bagSliceActions.addToBag(item.id));
  };
  const handleDelete = () => {
    dispatch(bagSliceActions.deleteFromBag(item.id));
  };
  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        {item.rating.stars} | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      {elementFound ? (
        <button
          type="button"
          className="btn btn-add-bag btn-danger"
          onClick={handleDelete}
        >
          <MdDelete />
          Remove from Bag
        </button>
      ) : (
        <button
          type="button"
          className="btn btn-add-bag btn-success"
          onClick={handleAdd}
        >
          <IoAddOutline />
          Add to Bag
        </button>
      )}
    </div>
  );
};

export default HomeItem;
