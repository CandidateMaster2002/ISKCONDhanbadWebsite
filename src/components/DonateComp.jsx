import fruitseller from "../assets/fruitsellerdonate2.png";
const DonateComp = () => {
  return (
    <div className="w-full mx-auto">
      <a href="donate" className="block">
        <img
          src={fruitseller}
          alt="ram"
          className="w-full h-auto max-w-full h-30"
        />
      </a>
    </div>
  );
};

export default DonateComp;
