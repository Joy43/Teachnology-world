import Cardshow from "../../Shared/Cardshow/Cardshow";
import Banner from "../Banner/Banner";
import Faq from "../Faq/Faq";
import { Helmet } from "react-helmet";



import Homeiphone from "../Homeiphone/Homeiphone";
import SliderArea from "../Slider/SliderArea";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home page</title>
        <meta name="description" content="Nested component" />
      </Helmet>
      <div>
<SliderArea/>
      </div>
      <div>
        <Banner></Banner>{" "}
      </div>

      <div>
        <Cardshow></Cardshow>{" "}
      </div>
      {/* <div><Homeiphonecard></Homeiphonecard></div>  */}
      <div>
        <Homeiphone></Homeiphone>
      </div>

      <div>
        <Faq></Faq>
      </div>
    </>
  );
};

export default Home;
