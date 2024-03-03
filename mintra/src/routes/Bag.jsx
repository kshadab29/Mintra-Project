import { useSelector } from "react-redux";
import BagItem from "../components/BagItem";
import BagSummery from "../components/BagSummery";

const Bag = () => {
  
  const bagItem = useSelector((store) => store.bag);

  

  return (
    <main>
      <div className="bag-page">
        <div className="bag-item-container">
          <BagItem item={bagItem} />
        </div>
        <BagSummery />
      </div>
    </main>
  );
};

export default Bag;
