const Footer = () => {
  return (
    <div className="bg-black">
      <div className=" w-5/6 mx-auto text-white pb-20 pt-[270px] mt-[300px]">
        <div className="flex justify-center items-center mb-8">
          <img className="" src="/logo-footer.png" alt="" />
        </div>
        <div className="md:flex justify-between gap-12">
          <div className="flex-1 text-left">
            <h4 className="text-xl font-extrabold">About Us</h4>
            <p className="pt-2">
              We are a passionate team dedicated to providing the best services
              to out customers.
            </p>
          </div>
          <div className="flex-1 text-left lg:ml-[100px]">
            <h4 className="text-xl font-extrabold list-disc">Quick Links</h4>
            <ul className="list-disc ml-6 pt-2">
              <li>Home</li>
              <li>Services</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="text-left">
            <h4 className="text-xl font-extrabold list-disc">Subscribe</h4>
            <p className="py-2">
              Subscribe to our newsletter for the latest updates.
            </p>
            <input
              className="border p-2 rounded-l-lg w-[150px]"
              type="text"
              placeholder="Enter your email"
            />
            <button className="bg-yellow-400 text-black rounded-r-lg py-[9px] px-4 font-bold cursor-pointer ">
              Subscribe
            </button>
          </div>
        </div>
        <p className="mt-[40px]">@2024 Your company All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
