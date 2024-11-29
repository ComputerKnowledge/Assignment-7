import { useEffect } from "react";
import Player from "../Player/Player";
import PropTypes from "prop-types";

const Players = ({
  handleClick,
  isActive,
  selected,
  handleSelected,
  handleMoney,
  data,
  setData,
}) => {
  console.log(selected);

  useEffect(() => {
    fetch("fakedata.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="mb-[300px]">
      <div className="flex flex-col sm:flex-row gap-3 justify-between items-center mb-8">
        <p className="text-lg sm:text-xl font-bold">
          Available Players ({data.length}/{selected.length} )
        </p>
        <div className="flex font-semibold text-lg sm:text-xl border border-gray-500 rounded-lg pr-2 cursor-pointer  gap-2">
          <button
            className={`${
              isActive.cart && "bg-[#adff2f] pl-2 pr-1  rounded-l-lg"
            }`}
            onClick={() => handleClick("available")}
          >
            Available
          </button>
          <p
            className={`${
              isActive.cart || "bg-[#adff2f] cursor-pointer   rounded-r-lg"
            }`}
            onClick={() => handleClick("selected")}
          >
            Selected({selected.length})
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
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

Players.propTypes = {
  handleClick: PropTypes.func,
  isActive: PropTypes.object,
  selected: PropTypes.array,
  handleSelected: PropTypes.func,
  handleMoney: PropTypes.func,
  data: PropTypes.array,
  setData: PropTypes.func,
};

export default Players;
