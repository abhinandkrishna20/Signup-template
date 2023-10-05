import React from "react";

const Signup =()=>{
    return(
        <div>
          <h1>Sign Up</h1>
      <form 
    //   onSubmit={handleSubmit}
      >
        <div className="form-group">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            // value={formData.firstName}
            // onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            // value={formData.lastName}
            // onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Email"
            // value={formData.email}
            // onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            placeholder="Password"
            // value={formData.password}
            // onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
        </div>
    );
}
export default Signup;