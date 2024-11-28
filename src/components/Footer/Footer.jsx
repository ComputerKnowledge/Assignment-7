const Footer = () => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <img className="" src="/src/assets/logo.png" alt="" />
      </div>
      <div className="flex justify-between gap-12">
        <div className="flex-1 text-left">
          <h4>About Us</h4>
          <p>
            We are a passionate team dedicated to providing the best services to
            out customers.
          </p>
        </div>
        <div className="flex-1 text-left ml-[100px]">
          <h4>Quick Links</h4>
          <ul className="list-disc ml-6">
            <li>Home</li>
            <li>Services</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="flex-1 text-left">
          <h4>Subscribe</h4>
          <p>Subscribe to our newsletter for the latest updates.</p>
          <input
            className="border p-2 rounded-l-lg"
            type="text"
            placeholder="Enter your email"
          />
          <button className="bg-green-200 rounded-r-lg py-[10px] px-4 font-bold cursor-pointer ">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
