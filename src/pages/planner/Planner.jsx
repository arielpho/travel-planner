import { useState } from "react";

export default function Planner({
  personalWeight,
  setPersonalWeight,
  carryWeight,
  setCarryWeight,
  carryOnItems,
  setCarryOnItems,
  personalItemItems,
  setPersonalItemItems,
  totalWeight,
  setTotalWeight,
  totalQuantity,
  setTotalQuantity,
}) {
  const [itemName, setItemName] = useState("");
  const [itemWeight, setItemWeight] = useState(0);
  const [itemQuantity, setItemQuantity] = useState(1);
  const [id, setId] = useState(0);

  function handlePersonal(e) {
    const fullweight = itemWeight * itemQuantity;
    if (itemName != "" && itemWeight >= 0) {
      setPersonalItemItems([
        ...personalItemItems,
        {
          id: id,
          name: itemName,
          weight: fullweight,
          quantity: itemQuantity,
        },
      ]);
      setPersonalWeight(Number(personalWeight) + Number(fullweight));
      setTotalWeight(totalWeight + fullweight);
      setTotalQuantity(totalQuantity + itemQuantity);
    }
    setId(id + 1);
    setItemName("");
    setItemWeight(0);
    setItemQuantity(1);
  }
  function handleCarry(e) {
    const fullweight = itemWeight * itemQuantity;
    if (itemName != "" && itemWeight >= 0) {
      setCarryOnItems([
        ...carryOnItems,
        {
          id: id,
          name: itemName,
          weight: fullweight,
          quantity: itemQuantity,
        },
      ]);
      setCarryWeight(Number(carryWeight) + Number(fullweight));
      setTotalWeight(totalWeight + fullweight);
      setTotalQuantity(totalQuantity + itemQuantity);
    }
    setId(id + 1);
    setItemName("");
    setItemWeight(0);
    setItemQuantity(1);
  }
  function itemNameChange(e) {
    setItemName(e.target.value);
  }
  return (
    <div className="planner">
      <h1>Planner</h1>
      <div className="bodychunk">
        <div id="planInputs">
          <div className="inputdiv">
            <p>Item Name:</p>
            <input type="text" value={itemName} onChange={itemNameChange} />
          </div>
          <div>
            <p>Weight (lbs):</p>
            <input
              type="number"
              value={itemWeight}
              onChange={(e) => setItemWeight(Number(e.target.value))}
            />
          </div>
          <div>
            <p>Quantity:</p>
            <input
              type="number"
              value={itemQuantity}
              onChange={(e) => setItemQuantity(Number(e.target.value))}
            />
          </div>
          
        </div>
        <div className="planbutts">
         <button
          style={{ background: "#ffd9e9ff" }}
          type="submit"
          onClick={handlePersonal}
        >
          add personal item
        </button>

        <button
          style={{ background: "#ede4ffff" }}
          type="submit"
          onClick={handleCarry}
        >
          add carry-on item
        </button>
       </div>
      </div>
      <div className="listdiv">
        <div
          style={{
            background: "#ffd9e9ff",
          }}
          className="planhead"
        >
          <h2>Personal Items</h2>
          <p>
            total weight: <strong>{personalWeight}</strong>
          </p>
        </div>
        {personalWeight > 22 ? (
          <p className="warning">Warning - Weight over 22 lbs limit</p>
        ) : null}
        {personalItemItems.length != 0 ? (
          <ul className="list">
            {personalItemItems.map((item) => (
              <li key={item.id}>
                <ListComp
                  itemname={item.name}
                  weight={item.weight}
                  itemQuantity={item.quantity}
                  setItems={setPersonalItemItems}
                  items={personalItemItems}
                  setWeight={setPersonalWeight}
                  weightstate={personalWeight}
                  setTotalWeight={setTotalWeight}
                  totalWeight={totalWeight}
                  setTotalQuantity={setTotalQuantity}
                  totalQuantity={totalQuantity}
                  id={item.id}
                />
              </li>
            ))}
          </ul>
        ) : (
          <div className="placeholder">Add items to your bag</div>
        )}
      </div>
      <div className="listdiv">
        <div style={{ background: "#ede4ffff" }} className="planhead">
          <h2>Carry-On Items</h2>
          <p>
            total weight: <strong>{carryWeight}</strong>
          </p>
        </div>
        {carryWeight > 15 ? (
          <p className="warning">Warning - Weight over 15 lbs limit</p>
        ) : null}
        {carryOnItems.length != 0 ? (
          <ul className="list">
            {carryOnItems.map((item) => (
              <li key={item.id}>
                <ListComp
                  itemname={item.name}
                  weight={item.weight}
                  itemQuantity={item.quantity}
                  setItems={setCarryOnItems}
                  items={carryOnItems}
                  setWeight={setCarryWeight}
                  weightstate={carryWeight}
                  setTotalWeight={setTotalWeight}
                  totalWeight={totalWeight}
                  setTotalQuantity={setTotalQuantity}
                  totalQuantity={totalQuantity}
                  id={item.id}
                />
                {/* name={item.name} weight={item.weight} */}
              </li>
            ))}
          </ul>
        ) : (
          <div className="placeholder">Add items to your bag</div>
        )}
      </div>
      {/* <p>
        I added different color language for personal items and carry-on items.
        I also added a quantity field for the inputs. The total weight will be
        the quantity*passed in weight There is the ability to change the name of
        the item. Added various hovering for good feedback to user and signify
        which element they are interacting with. Warning label appears once
        total weight of the bag exceeds the limit with red background to
        intensify the message.
      </p> */}
    </div>
  );
}

function ListComp({
  itemname,
  weight,
  itemQuantity,
  setItems,
  items,

  setWeight,
  weightstate,
  totalWeight,
  setTotalWeight,
  totalQuantity,
  setTotalQuantity,
  id,
}) {
  const [newName, setNewName] = useState("");
  // console.log(items);
  const [editing, setEditing] = useState(false);
  if (itemname == "" || weight == null || weight < 0) {
    return null;
  }

  return (
    <div className="planner-item">
      <p>
        ({itemQuantity}) {itemname} - {weight} lbs
      </p>
      {editing ? (
        <div>
          <input
            onChange={(e) => {
              setNewName(e.target.value);
            }}
          ></input>
          <button
            onClick={() => {
              setItems(
                items.map((item) => {
                  if (id == item.id) {
                    // return ([
                    //   ...items,
                    //   {id: item.id,
                    //   name: newName,
                    //   weight: item.weight,
                    //   quantity: item.quantity,}
                    // ]);
                    return {
                      ...item,
                      name: newName,
                    };
                  } else {
                    return item;
                  }
                })
              );
              console.log(newName);
              console.log(items);
              setEditing(!editing);
            }}
          >
            Save
          </button>
        </div>
      ) : (
        <button onClick={() => setEditing(true)}>Edit Name</button>
      )}

      <button
        onClick={() => {
          setItems(items.filter((a) => a.id !== id));
          setWeight(Number(weightstate) - Number(weight));
          setTotalWeight(totalWeight - weight);
          setTotalQuantity(totalQuantity - itemQuantity);
        }}
      >
        delete
      </button>
    </div>
  );
}
