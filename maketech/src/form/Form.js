import React, { Fragment, useState } from 'react';

const Form =()=> {
    const [output, setOutput] = useState({
        fullname: "",
        phoneNumber: "",
        dept: ""
    })

    const handleName = (e) => {
      setOutput((prevState)=> (
          {
              ...prevState,
              fullname: e.target.value
          })
      )
      console.log(output)
    }


    const HandleSubmit = ()=>{

    }
    
     return (
         <Fragment>
             <div className="container mt-3 col-sm-6 offset-3">
            <h1>User Profile</h1>
                <form>
                    <div class="form-group">
                    <label>Full Name</label>
                    <input type="text" className="form-control" value={output.fullname} name="fullname" onChange={(event) => handleName(event)} placeholder='Enter Full Name'/>
                    </div>
                    <div className="form-group">
                        <label>Phone Number</label>
                    <input type="phone" placeholder='EnterPhone Number'onChange={handleName()} name='phone' className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Enter Department</label>
                    <input type="text" placeholder='Enter Department' onChange={handleName()} className="form-control"/>
                    </div>
                    <div className="form-group">
                    <input onClick={HandleSubmit} className="btn  btn-primary btn-block" type="button" value=' Submit'/>
                    </div>
                   
                </form>
                </div>
    
         </Fragment>
     );
    }


export default Form;