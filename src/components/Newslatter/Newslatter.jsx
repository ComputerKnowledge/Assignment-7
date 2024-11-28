const Newslatter = () => {
  return (
    <div className="bg-yellow-400">
      <h2 className="text-3xl font-extrabold">Subscribe to our Newsletter</h2>
      <p className="text-xl font-medium text-gray-500">
        Get the latest updates and news right in your inbox!
      </p>
      <input
        className="border p-2 mx-4 rounded-lg w-[400px]"
        type="text"
        placeholder="Enter your email"
      />
      <button className="button">Subscribe</button>
    </div>
  );
};

export default Newslatter;
