import { useState } from "react";

const LUGGAGE_TYPES = [
  {
    icon: "💼",
    name: "Carry-on",
    maxWeightLbs: 22,
    description: "A larger bag that fits in the overhead bin.",
  },
  {
    icon: "🧳",
    name: "Checked bag",
    maxWeightLbs: 50,
    description:
      "A bag that is checked at the gate and stored in the cargo hold.",
  },
  {
    icon: "🎒",
    name: "Personal item",
    maxWeightLbs: 15,
    description: "A small bag that fits under the seat in front of you.",
  },
];

export default function LuggageOverview() {
  const luggages = [];
  const [econ, setEconOn] = useState(false);

  function handleEconOn() {
    setEconOn(!econ);
  }
  for (let i = 0; i < LUGGAGE_TYPES.length; i++) {
    if (econ == true && LUGGAGE_TYPES[i].name == "Checked bag") {
      continue;
    }
    luggages.push(
      <LuggageElem
        name={LUGGAGE_TYPES[i].name}
        icon={LUGGAGE_TYPES[i].icon}
        weight={LUGGAGE_TYPES[i].maxWeightLbs}
        description={LUGGAGE_TYPES[i].description}
      />
    );
  }
  return (
    <div className="luggage-overview">
      <h1>Luggage types</h1>
      <div className="bodychunk">
        <label>
          Basic Economy <input type="checkbox" onClick={handleEconOn} />
        </label>
        {luggages}
      </div>
    </div>
  );
}
export function LuggageElem({ name, icon, weight, description }) {
  return (
    <div className="luggage-type">
      <div className="lugtitle font">
        <h2>{name}</h2>
        <p className="lug_icon">{icon}</p>
      </div>
      <p className="weight">
        Max weight: <strong>{weight}</strong> lbs
      </p>
      <p>{description}</p>
    </div>
  );
}
