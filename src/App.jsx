import { useContext, useState } from "react";
import { Sidebar } from "./Sidebar";
import LuggageOverview from "./pages/luggage-overview/LuggageOverview";
import Planner from "./pages/planner/Planner";
import Summary from "./pages/summary/Summary";
import { WeightContext } from "./pages/summary/WeightContext";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";
import { QuantityContext } from "./pages/summary/QuantityContext";


function App() {
  const [page, setPage] = useState("home");

  const [totalWeight, setTotalWeight] = useState(0);
  
  const [totalQuantity, setTotalQuantity] = useState(0);

  const [personalItemItems, setPersonalItemItems] = useState([]);
  const [carryOnItems, setCarryOnItems] = useState([]);
  const [personalWeight, setPersonalWeight] = useState(0);
  const [carryWeight, setCarryWeight] = useState(0);
  console.log(totalWeight);
  return (
    <div className="app">
      <WeightContext value={totalWeight}>
        <QuantityContext value={totalQuantity}>
        <Sidebar page={page} setPage={setPage} />
        <div className="main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/luggage-overview" element={<LuggageOverview />} />
            <Route
              path="/planner"
              element={
                <Planner
                  personalWeight={personalWeight}
                  setPersonalWeight={setPersonalWeight}
                  carryWeight={carryWeight}
                  setCarryWeight={setCarryWeight}
                  carryOnItems={carryOnItems}
                  setCarryOnItems={setCarryOnItems}
                  personalItemItems={personalItemItems}
                  setPersonalItemItems={setPersonalItemItems}
                  totalWeight={totalWeight}
                  setTotalWeight={setTotalWeight}
                  totalQuantity={totalQuantity}
                  setTotalQuantity={setTotalQuantity}
                />
              }
            />
            <Route path="/summary" element={<Summary />} />
          </Routes>
          {/* {page === "luggage-overview" ? <LuggageOverview /> : null}
        {page === "planner" ? (
          <Planner
            personalWeight={personalWeight}
            setPersonalWeight={setPersonalWeight}
            carryWeight={carryWeight}
            setCarryWeight={setCarryWeight}
            carryOnItems={carryOnItems}
            setCarryOnItems={setCarryOnItems}
            personalItemItems={personalItemItems}
            setPersonalItemItems={setPersonalItemItems}
            totalWeight={totalWeight}
            setTotalWeight={setTotalWeight}
          />
        ) : null}
        {page === "summary" ? (
          <Summary />
        ) : null} */}
        </div>
        </QuantityContext>
      </WeightContext>
    </div>
  );
}

export default App;
