import { useSelector } from "react-redux";

const BagSummary = ({}) => {
  const bagItemIds = useSelector((store) => store.bag);
  const items = useSelector((store) => store.items);
  const finalItems = items.filter((items) => {
    const indexElement = bagItemIds.indexOf(items.id);
    return indexElement >= 0;
  });

  const totalItem = bagItemIds.length;
  let totalMRP = 0;
  let totalDiscount = 0;
  let convenienceFee = 99;
  if (totalItem === 0) {
    convenienceFee = 0;
  }
  finalItems.forEach((item) => {
    totalMRP += item.original_price;
    totalDiscount += item.original_price - item.current_price;
  });
  let finalPayment = totalMRP - totalDiscount + convenienceFee;
  return (
    <div className="bag-summary">
      <div className="bag-details-container">
        <div className="price-header">PRICE DETAILS ({totalItem}Item) </div>
        <div className="price-item">
          <span className="price-item-tag">Total MRP</span>
          <span className="price-item-value">₹{totalMRP}</span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Discount on MRP</span>
          <span className="price-item-value priceDetail-base-discount">
            -₹{totalDiscount}
          </span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Convenience Fee</span>
          <span className="price-item-value">₹{convenienceFee}</span>
        </div>
        <hr />
        <div className="price-footer">
          <span className="price-item-tag">Total Amount</span>
          <span className="price-item-value">₹{finalPayment}</span>
        </div>
      </div>
      <button className="btn-place-order">
        <div className="css-xjhrni">PLACE ORDER</div>
      </button>
    </div>
  );
};

export default BagSummary;
