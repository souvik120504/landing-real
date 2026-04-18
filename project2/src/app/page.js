import Image from "next/image";
import Heroimage from "./Hero/Heroimage";
import Gallerymain from "./Gallery/Gallerymain";
import Invest from "./Invest/Invest"
import Opp from "./Opportunity/Opp";
import FAQ1 from "./FAQ/FAQ1";
import Footer from "./Footer/Footer";
import Footer2 from "./Footer/Footer2";
export default function Home() {
  return (
    <div className="min-h-screen w-full m-0 p-0">
     <Heroimage />
     <Gallerymain />
     <Invest />
     <Opp />
     <FAQ1 />
     <Footer />
     <Footer2 />
      </div>
  );
}
