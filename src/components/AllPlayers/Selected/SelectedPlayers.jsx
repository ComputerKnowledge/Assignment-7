import PropTypes from "prop-types";
import { RiDeleteBin6Line } from "react-icons/ri";
const SelectedPlayers = ({ player, handleDelete }) => {
  return (
    <div className="flex justify-between items-center my-4 border-gray-400 border-2 p-1 sm:p-2 pr-2 sm:pr-4 rounded-xl">
      <div className="flex justify-start items-center gap-4">
        <div>
          <img className="w-32 sm:w-44 rounded-lg" src={player.img} alt="" />
        </div>
        <div className="font-semibold  sm:text-lg text-left">
          <p>{player.name}</p>
          <p>{player.type}</p>
          <p>$ {player.price}</p>
        </div>
      </div>
      <div>
        <button
          onClick={() => handleDelete(player)}
          className="border p-2 text-red-600 text-2xl"
        >
          <RiDeleteBin6Line />
        </button>
      </div>
    </div>
  );
};

SelectedPlayers.propTypes = {
  player: PropTypes.object,
  handleDelete: PropTypes.func,
};

export default SelectedPlayers;
