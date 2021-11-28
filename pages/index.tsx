import { NextPage } from "next";
import { Header } from "src/components/Header/Header";

const Home: NextPage = () => {
  return (
    <div className="bg-background min-h-screen">
      <Header></Header>
    </div>
  );
};

export default Home;
