import PropTypes from "prop-types";
const Header = ({ handleMoney }) => {
  return (
    <div
      style={{ backgroundImage: 'url("/bg-shadow.png")' }}
      className="flex flex-col justify-center items-center gap-6 bg-black text-white p-12 rounded-3xl my-10 bg-cover"
    >
      <img
        className="w-48 sm:w-56 md:w-64"
        src="/banner-main.png"
        alt="Banner-pic"
      />
      <h1 className="text-3xl sm:text-4xl font-extrabold">
        Assemble Your Ultimate Dream 11 Cricket Team
      </h1>
      <h3 className="text-xl sm:text-2xl font-semibold text-gray-400">
        Beyond Boundaries Beyond Limits
      </h3>

      <div className="p-2 border border-[#adff2f] rounded-2xl">
        <button onClick={handleMoney} className="button bg-[#adff2f]">
          Claim Free Credit
        </button>
      </div>
    </div>
  );
};

Header.propTypes = {
  handleMoney: PropTypes.func,
};

export default Header;
