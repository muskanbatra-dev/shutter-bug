import React from "react";
import compact from "../../images/files/compact/3.png";
import ProductPageCard from "../../components/Card/ProductPajeCard/ProductPageCard";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";
// import axios from "axios";
// import {DISPLAY_PRODUCT} from "../../Redux/reducers/product"
// import { useDispatch } from "react-redux";
const Product = () => {
// const dispatch = useDispatch()
  


  // useEffect(() => {
  //   (async () => {
  //     try {
  //       axios
  //       .get(ApiConfig.baseURL + ApiConfig.instagramFeeds + "/" + offsetval, {
  //         headers: {
  //           Authorization: "Bearer " + token,
  //         },
  //       })
  
  //       .then(async (response) => {
  //         if (response.data) {
  //           resolve(response.data.data);
  //         } else {
  //           reject("Undefined InstaFeeds");
  //         }
  //       })
  //       .catch((reason) => {
  //         if (reason.response.status == 500) {
  //           reject(reason.response.data.message);
  //         }
  //         reject(reason);
  //       });
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   })();
  // }, []);

  return (
    <div>
      <Navigation/>

      <ProductPageCard
            src={compact}
            productName={"CANON EOS 90D DSLR CAMERA (BODY ONLY)"}
            price={106995}
            rating={"EMI starts at "}
          />
          <Footer/>
    </div>
  )
}

export default Product