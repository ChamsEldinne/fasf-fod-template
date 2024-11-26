import Header from "./componants/Header";
import Main from "./componants/Main";
import HotDessert from "./componants/HotDessert"
import PopularProduct from "./componants/PopularProduct";
import Testimonia from "./componants/Testimonia"

export default function Home() {
  return (
    <div className="bg-co1">
      <Header/>
      <Main/>
      <HotDessert/>
      <PopularProduct/>
      <Testimonia/>
    </div>  );
}
