const Newslatter = () => {
  return (
    <div className="border-4 border-gray-300 w-5/6 p-2 sm:p-4 lg:p-6 mx-auto rounded-3xl absolute left-[30px] sm:left-[50px] md:left-[70px] lg:left-[105px] bottom-[740px] md:bottom-[640px] lg:bottom-[490px] z-10">
      <div
        style={{ backgroundImage: 'url("/bg-shadow.png")' }}
        className="bg-cover py-24 rounded-2xl bg-gray-100 "
      >
        <h2 className="text-3xl font-extrabold">Subscribe to our Newsletter</h2>
        <p className="text-xl font-medium text-gray-500 py-4">
          Get the latest updates and news right in your inbox!
        </p>
        <input
          className="border p-2 mx-4 rounded-lg w-auto]"
          type="text"
          placeholder="Enter your email"
        />
        <button className="button bg-yellow-400 mt-3 ">Subscribe</button>
      </div>
    </div>
  );
};

export default Newslatter;
