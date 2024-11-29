import SelectedPlayers from "./SelectedPlayers";
import PropTypes from "prop-types";
const Selected = ({
  handleClick,
  isActive,
  selected,
  handleMoney,
  handleDelete,
  data,
}) => {
  console.log(selected);
  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
        <p className="text-lg sm:text-xl font-bold">
          Available Players ({data.length}/{selected.length} )
        </p>
        <div className="flex font-semibold border text-lg sm:text-xl border-gray-500 rounded-lg pl-2 gap-2">
          <button
            className={`${
              isActive.cart && "bg-[#adff2f]  rounded-l-lg  cursor-pointer"
            }`}
            onClick={() => handleClick("available")}
          >
            Available
          </button>
          <p
            className={`${
              isActive.cart ||
              "bg-[#adff2f]  rounded-r-lg pr-2 pl-1  cursor-pointer"
            }`}
            onClick={() => handleClick("selected")}
          >
            Selected({selected.length})
          </p>
        </div>
      </div>
      {selected.map((player) => (
        <SelectedPlayers
          handleDelete={handleDelete}
          key={player.id}
          player={player}
          handleMoney={handleMoney}
        ></SelectedPlayers>
      ))}
      <button
        onClick={() => handleClick("available")}
        className="button bg-[#adff2f] m-4"
      >
        Add More Player
      </button>
    </div>
  );
};

Selected.propTypes = {
  handleClick: PropTypes.func,
  handleDelete: PropTypes.func,
  handleMoney: PropTypes.func,
  isActive: PropTypes.object,
  selected: PropTypes.array,
  data: PropTypes.array,
};

export default Selected;
