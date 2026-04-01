import {useState} from "react";
import Banner from "./component/Banner";
import Footer from "./component/Footer";
import Models from "./component/Models";
import NavBar from "./component/NavBar";
import {ToastContainer} from "react-toastify";
import Score from "./component/Score";
import Steps from "./component/Steps";
import {Suspense} from "react";
import {InfinitySpin} from "react-loader-spinner";
import Pricing from "./component/Pricing";

const modelPromise = fetch("/models.json").then((res) => res.json());

const pricingPromise = fetch("/pricing.json").then((res) => res.json());

function App() {
  const [carts, setCarts] = useState([]);

  return (
    <>
      <NavBar carts={carts} />
      <Banner />
      <Score />
      <Suspense
        fallback={
          <center>
            <InfinitySpin width="200" color="#4fa94d" />
          </center>
        }
      >
        <Models modelPromise={modelPromise} carts={carts} setCarts={setCarts} />
      </Suspense>
      <Steps></Steps>
      <Suspense
        fallback={<p className="text-center mt-20">Loading pricing...</p>} >
        <Pricing pricingPromise={pricingPromise} />
      </Suspense>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
