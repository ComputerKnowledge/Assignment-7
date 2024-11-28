const Header = ({ handleMoney }) => {
  return (
    <div
      style={{ backgroundImage: 'url("/src/assets/bg-shadow.png")' }}
      className="flex flex-col justify-center items-center gap-6 bg-black text-white p-12 rounded-3xl my-10"
    >
      <img
        className="w-64"
        src="/src/assets/banner-main.png"
        alt="Banner-pic"
      />
      <h1 className="text-4xl font-extrabold">
        Assemble Your Ultimate Dream 11 Cricket Team
      </h1>
      <h3 className="text-2xl font-semibold text-gray-400">
        Beyond Boundaries Beyond Limits
      </h3>

      <div className="p-2 border border-green-200 rounded-2xl">
        <button onClick={handleMoney} className="button">
          Claim Free Credit
        </button>
      </div>
    </div>
  );
};

export default Header;
