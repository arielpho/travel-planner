import { useContext } from "react";
import { WeightContext } from "./WeightContext";
import { QuantityContext } from "./QuantityContext";

export default function Summary() {
  const totalweight = useContext(WeightContext);
  const totalquantity = useContext(QuantityContext);
  console.log(totalweight);
  return (
    <div>
      <h1>Summary Page</h1>
      <div className="bodychunk">
        <p className="sump">
          Total Luggage Weight: <strong>{totalweight}</strong>
        </p>
        <p className="sump">
          Total Luggage Quantity: <strong>{totalquantity}</strong>
        </p>
{/* 
        <p>Used context to send total weight and quantity to this page.</p> */}
      </div>
    </div>
  );
}
