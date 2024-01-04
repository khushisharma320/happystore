import React from "react";

const Home =()=>{
  return(
    <>
    <div className="background h-5">
        <div className="container">
            <div className="row pt-5">
                <div className="col text-center pt-5">
                    <h3 className=" pt-5 display-4">Welcome to <span className="display-2">Happy Store</span> </h3>
                </div>
            </div>
            <div className="row">
                <div className="col text-center pt-5">
                    <h3 className="text-white"> Daily Fresh Baked Goods </h3>
                </div>
            </div>
            <div className="row py-5">
                <div className="col text-center ">
                 <a className="btn" href="order.html">Explore</a>
                </div>
            </div>
        </div>
    </div>
    </>
  )

}

export default Home;