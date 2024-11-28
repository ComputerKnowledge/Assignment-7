import SelectedPlayers from "./SelectedPlayers";

const Selected = ({
  handleClick,
  isActive,
  selected,
  handleMoney,
  handleDelete,
}) => {
  return (
    <div>
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
      {selected.map((player) => (
        <SelectedPlayers
          handleDelete={handleDelete}
          key={player.id}
          player={player}
          handleMoney={handleMoney}
        ></SelectedPlayers>
      ))}
    </div>
  );
};

export default Selected;
