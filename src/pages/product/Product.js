// import React from "react";
// import Category from "../../components/Category";
// import Footer from "../../components/Footer";
// import Navbar from "../../components/Navbar";

// export default function Product() {
//   return (
//     <>
//       <hr></hr>
//       <div className="container text-center mt-5">
//         <nav aria-label="breadcrumb">
//           <ol className="breadcrumb">
//             <li className="breadcrumb-item mx-1 bcItem">
//               <a className="text-light" href="#"> <i className="fas fa-home"></i> </a>
//             </li>
//             <li className="text-light mx-1 breadcrumb-item active bcItem px-3" style={{filter: "brightness(0.95)"}} >
//               Stores
//             </li>
//             <li className="text-light mx-1 breadcrumb-item active bcItem px-3" style={{filter: "brightness(0.95)"}} >
//               Products
//             </li>
//           </ol>
//         </nav>
//         <h3 className="text-start">Available Products</h3>
//         <div className="row">
//           <Category />
//           <hr></hr>
//         </div>
//       </div>
//     </>
//   );
// }

import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Category from "../../components/Category";
import { backendAPI } from '../../store';


const Showstore = () => {
  let params = useParams();
  console.log("params=",params)
  const store_id = params.storeId
  const [store, setstore] = useState([])
  const fetchstore = async () => {
    const result = await backendAPI.get(`store/store/${store_id}/`);

    console.log(result.data)
    setstore(result.data)
  }
  
  useEffect(() => {
    fetchstore();
  }, [])

  return (

    <>
      <hr></hr>
      <div className="container text-center mt-5">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item mx-1 bcItem">
              <a className="text-light" href="#"> <i className="fas fa-home"></i> </a>
            </li>
            <li className="text-light mx-1 breadcrumb-item active bcItem px-3" style={{ filter: "brightness(0.95)" }} >
              Stores
            </li>
            <li className="text-light mx-1 breadcrumb-item active bcItem px-3" style={{ filter: "brightness(0.95)" }} >
              Products
            </li>
          </ol>
        </nav>
        <h3 className="text-start">Available Products</h3>
        <div className="row">
          <Category storeData={store}/>
          <hr></hr>
        </div>
      </div>
    </>
  )
}
export default Showstore;

