import React from "react";

const Contact =()=>{
  return(
    <>
    <div class="container mt-5">

      <form>
        <div class="mb-3">
          <label for="name" class="form-label">Your Name</label>
          <input type="text" class="form-control" id="name"/>
          <small id="namevalid" class=" form- text text-muted invalid-feedback">
            Your username must be 2-10 characters long and should not contains any number.
          </small>
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Email address</label>
          <input type="email" class="form-control" id="email" aria-describedby="emailHelp"/>
          <small id="namevalid" class=" form- text text-muted invalid-feedback">
            your email must be valid email.
          </small>

          <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
          <label for="address" class="form-label">Address</label>
          <input type="text" class="form-control" id="address"/>

        </div>
        <div class="mb-3">
          <label for="mobile" class="form-label">Mobile Number</label>
          <input type="text" class="form-control" id="mobile"/>
          <small id="namevalid" class=" form- text text-muted invalid-feedback">
            Your mobile number must be 10 digit long.
          </small>
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
          <label class="form-check-label" for="exampleCheck1"> Accept terms & condition</label>
        </div>

        <button type="submit" class="btn btn-outline-warning">Proceed to Order</button>
      </form>
    </div>
    </>
  )

}

export default Contact;