const Player = ({ players, handleSelected, handleMoney }) => {
  return (
    <div className=" p-5 rounded-lg border border-gray-600">
      <img className="rounded-lg" src={players.img} alt="" />
      <div className="flex items-center text-2xl font-semibold">
        <img className="w-12 h-12" src="/src/assets/man.jpg" alt="" />
        <p>{players.name}</p>
      </div>
      <div className="flex justify-between pb-4">
        <div className="flex  text-lg">
          <img className="w-8 h-8" src="/src/assets/flag.png" alt="" />
          <p>{players.country}</p>
        </div>
        <p className="border pt-2 pb-1 px-4 rounded-lg bg-gray-200">
          {players.type}
        </p>
      </div>
      <hr />
      <div className="flex justify-between items-center pt-4">
        <p className="text-xl font-medium">{players.handy}</p>
        <p>{players.handy}</p>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-xl font-medium"> Price : $ {players.price}</p>
        <button
          onClick={() => handleSelected(players)}
          className="border py-1 px-2 rounded-lg"
        >
          Choose Player
        </button>
      </div>
    </div>
  );
};

export default Player;
