import { useState } from "react";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
  const [data, setData] = useState([]);
  const [money, setMoney] = useState(0);
  const [selected, setSelected] = useState([]);

  const handleSelected = (playerInfo) => {
    const isSelected = !!selected.find((a) => a.id == playerInfo.id);
    // console.log(isSelected);

    if (selected.length < 6 && !isSelected && money >= playerInfo.price) {
      setMoney(money - playerInfo.price);
      const newArray = [...selected, playerInfo];
      setSelected(newArray);
      toast.success("Player has been added.", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      if (selected.length >= 6) {
        toast.error("More that 6 player is not allowed.", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else if (isSelected) {
        toast.error("This player is already selected.", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else if (money < playerInfo.price) {
        toast.error("Don't have enough money", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    }

    // setMoney(money - playerInfo.price);
    // const newArray = [...selected, playerInfo];
    // setSelected(newArray);
    console.log(isSelected);
  };
  const handleDelete = (p) => {
    setMoney(money + p.price);
    const newArray = selected.filter((player) => player != p);
    setSelected(newArray);
    toast.info(`${p.name} has been removed.`, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const handleMoney = () => {
    setMoney(money + 6000000);
    toast.success("Money Added", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
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
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Bounce
      />
      <Navber money={money}></Navber>
      <Header handleMoney={handleMoney}></Header>
      {isActive.cart ? (
        <Players
          setData={setData}
          data={data}
          handleMoney={handleMoney}
          handleSelected={handleSelected}
          selected={selected}
          isActive={isActive}
          handleClick={handleClick}
        ></Players>
      ) : (
        <Selected
          data={data}
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
