import React from "react";
import pic from "../src/images/side.jpg"

const About =()=>{
  return(
    <>
    <div className="about  py-lg-5">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 align-items-start">
                    <h3 className="text-dark pt-5">About <span className="">Us</span> </h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur rem inventore temporibus sint
                        quas mollitia eligendi dolores quis iste consequuntur. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Voluptatibus, recusandae! Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Odit obcaecati cupiditate id itaque incidunt. Repellat recusandae sequi inventore dolorem
                        dolor? Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus eaque soluta mollitia
                        aliquid. Voluptatibus veniam at culpa non obcaecati perferendis! </p>
                </div>
                <div className="col-lg-6">
                    <div className="about_image">
                        <img className="img-fluid" src={pic} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )

}

export default About;