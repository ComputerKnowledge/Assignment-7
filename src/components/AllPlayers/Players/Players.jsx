import { useEffect, useState } from "react";
import Player from "../Player/Player";
const Players = ({
  handleClick,
  isActive,
  selected,
  handleSelected,
  handleMoney,
}) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("fakedata.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <div className="flex justify-between">
        <p>
          Available Players ({data.length}/{selected.length} )
        </p>
        <div className="flex">
          <button
            className={`${isActive.cart && "bg-red-500"}`}
            onClick={() => handleClick("available")}
          >
            Available
          </button>
          <p
            className={`${isActive.cart || "bg-green-500"}`}
            onClick={() => handleClick("selected")}
          >
            Selected({selected.length})
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-5">
        {data.map((player) => (
          <Player
            key={player.id}
            handleSelected={handleSelected}
            players={player}
            handleMoney={handleMoney}
          ></Player>
        ))}
      </div>
    </div>
  );
};

export default Players;
