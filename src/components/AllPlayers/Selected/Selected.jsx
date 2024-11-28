import SelectedPlayers from "./SelectedPlayers";

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
            className={`${isActive.cart || "bg-green-500 cursor-pointer"}`}
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
      <button onClick={() => handleClick("available")} className="bg-green-500">
        Add More Player
      </button>
    </div>
  );
};

export default Selected;
