// // ParentComponent.js
// import React, { useState, useEffect } from "react";
// import Login from "./Components/Login";
// import Form from "./Components/Form";
// import { Route, Routes, Link } from "react-router-dom";



// const ParentComponent = () => {
//   const [isLoginForm, setIsLoginForm] = useState(true);
//   const [showForm, setShowForm] = useState(false);

//   const switchForm = (event) => {
//     event.preventDefault();
//     setShowForm(false);

//     // Simulate a delay of 2 seconds (2000 milliseconds) before switching forms
//     const delayTimeout = setTimeout(() => {
//       setIsLoginForm((prevIsLoginForm) => !prevIsLoginForm);
//       setShowForm(true);
//     }, 1000);

//     // Clear the timeout when unmounting or switching to another form
//     return () => clearTimeout(delayTimeout);
//   };

//   useEffect(() => {
//     // Show the form immediately on the initial render
//     setShowForm(true);
//   }, []);

//   return (
//     <div>
//       <div>
//         <Link to='/login'>Log in</Link>
//         <Link to='/signup'>Sign up</Link>
//       </div>
//       <Routes>
//         <Route path='/login' element={showForm && <Login switchForm={switchForm} showForm={() => setShowForm(false)} />} />
//         <Route path='/signup' element={showForm && <Form switchForm={switchForm} showForm={() => setShowForm(false)} />} />


//       </Routes>

//     </div>
//   );
// };

// export default ParentComponent;
import React, { useState, useEffect } from "react";
import Login from "./Components/Login";
import Form from "./Components/Form";
import { Route, Routes, Link } from "react-router-dom";

const ParentComponent = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [showForm, setShowForm] = useState(false);

  const switchForm = (event) => {
    event.preventDefault();
    setShowForm(false);

    // Simulate a delay of 2 seconds (2000 milliseconds) before switching forms
    const delayTimeout = setTimeout(() => {
      setIsLoginForm((prevIsLoginForm) => !prevIsLoginForm);
      setShowForm(true);
    }, 1000);

    // Clear the timeout when unmounting or switching to another form
    return () => clearTimeout(delayTimeout);
  };

  useEffect(() => {
    // Show the form immediately on the initial render
    setShowForm(true);
  }, []);

  return (


    <div>






      {showForm &&
        (isLoginForm ? (

          <Login switchForm={switchForm} showForm={() => setShowForm(false)} />
        ) : (
          <Form switchForm={switchForm} showForm={() => setShowForm(false)} />
        ))}
    </div>
  );
};

export default ParentComponent;
