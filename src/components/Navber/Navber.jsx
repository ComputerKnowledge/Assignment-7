const Navber = ({ money }) => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <img src="/src/assets/logo.png" alt="LOGO" />
      </div>
      <div>
        <ul className="flex gap-4 font-bold text-gray-500 items-center">
          <li className="px-4">
            <a href="">Home</a>
          </li>
          <li className="px-4">
            <a href="">Fixture</a>
          </li>
          <li className="px-4">
            <a href="">Teams</a>
          </li>
          <li className="px-4">
            <a href="">Schedules</a>
          </li>
          <li className="px-4">
            <div className="text-black border border-black py-2 px-4 flex gap-2 rounded-lg">
              <p>{money} Coin</p>
              <img className="w-5 h-5" src="/src/assets/dollar.png" alt="" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navber;
