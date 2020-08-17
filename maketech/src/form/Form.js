import React, { Fragment, useState } from "react";

const Form = () => {
  const [output, setOutput] = useState({
    fullname: "",
    phoneNumber: "",
    dept: "",
  });

  const handleName = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setOutput((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const HandleSubmit = () => {
    window.alert(JSON.stringify(output));
  };

  return (
    <Fragment>
      <div className="container mt-3 col-sm-6 offset-3">
        <h1>User Profile</h1>
        <form>
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" className="form-control" value={output.fullname} name="fullname" onChange={handleName} placeholder="Enter Full Name" />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input type="phone" placeholder="Enter Phone Number" value={output.phoneNumber} name="phoneNumber" onChange={handleName} className="form-control" />
          </div>
          <div className="form-group">
            <label>Enter Department</label>
            <input type="text" placeholder="Enter Department" value={output.dept} name="dept" onChange={handleName} className="form-control" />
          </div>
          <div className="form-group">
            <input onClick={HandleSubmit} className="btn  btn-primary btn-block" type="button" value=" Submit" />
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default Form;
