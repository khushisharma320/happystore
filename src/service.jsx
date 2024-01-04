import React, { useState } from "react";
import Card from "./card";
import Sdata from "./Sdata";

const Service = () => {

  const [items, setItems] = useState(Sdata);
  const [price, setPrice] = useState("");

  const filterItem = (item) => {
    const updatedItems = Sdata.filter((elem) => {
      return elem.category === item;
    });

    setItems(updatedItems);

  };

  const searchItem = (event) =>{
        setPrice(event.target.value);
        Sdata.filter((elem)=>{
          if(elem.price.includes(price)){
            return elem;
          }
         });
        //  setPrice(updatedSearch);

  };

  return (
    <>
      <div className="end">
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <h3 className="text-dark pt-5">Our<span className="">Store</span> </h3>
            </div>
          </div>
          <div className="row py-lg-4 text-center">
            <div className="col">
              <button type="button" className="btn btn-outline-dark me-3 list" onClick={() => setItems(Sdata)} >All</button>
              <button type="button" className="btn btn-outline-dark me-3 list" onClick={() => filterItem("cake")}>Cakes</button>
              <button type="button" className="btn btn-outline-dark me-3 list" onClick={() => filterItem("cupcake")}>Cupcakes</button>
              <button type="button" className="btn btn-outline-dark me-3 list" onClick={() => filterItem("doughnut")}>Doughnuts</button>
              <button type="button" className="btn btn-outline-dark me-3 list" onClick={() => filterItem("chocolate")}>Chocolates</button>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="input-group mb-3">
                <span className="input-group-text end_input_span">$</span>
                <input id="searchTxt" type="text" className="form-control" aria-label="Amount (to the nearest dollar)" value = {price} placeholder="item....." onChange={searchItem} />
                <span className="input-group-text end_search">Search</span>

              </div>
            </div>
          </div>
          <div className="row mx-auto">
            {
              items.map((val, ind) => {
                return <Card
                  key={ind}
                  imgsrc={val.imgsrc}
                  title={val.title}
                />
              })
            }
          </div>
        </div>
      </div>
    </>
  )

}

export default Service;