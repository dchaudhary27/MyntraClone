import BagSummary from "../Components/BagSummary";
import BagItem from "../Components/BagItem";
import { useSelector } from "react-redux";

const Bag = () => {
  const BagItems = useSelector((store) => store.bag);
  const items = useSelector((store) => store.items);
  const finalItems = items.filter((items) => {
    const indexElement = BagItems.indexOf(items.id);
    return indexElement >= 0;
  });
  return (
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          {finalItems.map((item) => (
            <BagItem key={item.id} item={item} />
          ))}
        </div>
        <BagSummary />
      </div>
    </main>
  );
};

export default Bag;
