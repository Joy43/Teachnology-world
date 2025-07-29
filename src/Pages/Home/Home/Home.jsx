import Cardshow from "../../Shared/Cardshow/Cardshow";
import Banner from "../Banner/Banner";
import Faq from "../Faq/Faq";
import { Helmet } from "react-helmet";



import Homeiphone from "../Homeiphone/Homeiphone";
import SliderArea from "../Slider/SliderArea";
import Services from "../services/services";
import CommonWrapper from "../../utils/Container";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home page</title>
        <meta name="description" content="Nested component" />
      </Helmet>
      <CommonWrapper>
  <SliderArea/>
  <Banner/>
  <Cardshow/>
  <Homeiphone/>
      
{/* service */}

          <Services/>

      
        <Faq></Faq>
      </CommonWrapper>
      
   
      
    </>
  );
};

export default Home;
