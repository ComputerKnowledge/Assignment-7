import { useState } from "react";
import "./App.css";
import Players from "./components/AllPlayers/Players/Players";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Navber from "./components/Navber/Navber";
import Newslatter from "./components/Newslatter/Newslatter";
import Selected from "./components/AllPlayers/Selected/Selected";

export default function App() {
  const [isActive, setIsActive] = useState({
    cart: true,
    status: "available",
  });
  const [money, setMoney] = useState(0);
  const [selected, setSelected] = useState([]);

  const handleSelected = (playerInfo) => {
    setMoney(money - playerInfo.price);
    const newArray = [...selected, playerInfo];
    setSelected(newArray);
  };
  const handleDelete = (p) => {
    setMoney(money + p.price);
    const newArray = selected.filter((player) => player != p);
    setSelected(newArray);
  };

  const handleMoney = () => {
    setMoney(money + 600000);
  };

  const handleClick = (status) => {
    if (status == "available") {
      setIsActive({
        cart: true,
        status: "available",
      });
    } else {
      setIsActive({
        cart: false,
        status: "selected",
      });
    }
  };
  return (
    <>
      <Navber money={money}></Navber>
      <Header handleMoney={handleMoney}></Header>
      {isActive.cart ? (
        <Players
          handleMoney={handleMoney}
          handleSelected={handleSelected}
          selected={selected}
          isActive={isActive}
          handleClick={handleClick}
        ></Players>
      ) : (
        <Selected
          handleDelete={handleDelete}
          handleMoney={handleMoney}
          handleSelected={handleSelected}
          selected={selected}
          isActive={isActive}
          handleClick={handleClick}
        ></Selected>
      )}
      <Newslatter></Newslatter>
      <Footer></Footer>
    </>
  );
}
