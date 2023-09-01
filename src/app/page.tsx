import Main from "./components/Main";
import Navbar from "./components/Navbar";
import { blogs } from "./data";
import Link from "next/link";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Main />
    </div>
  );
};

export default Home;
