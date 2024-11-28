const SelectedPlayers = ({ player, handleMoney, handleDelete }) => {
  return (
    <div className="p-4 border border-b-2 m-4">
      <img className="w-20" src={player.img} alt="" />
      <p>Name : {player.name}</p>
      <p>Country : {player.country}</p>
      <button
        onClick={() => handleDelete(player)}
        className="border p-2 bg-red-300"
      >
        delete
      </button>
    </div>
  );
};

export default SelectedPlayers;
