// import Login from "./Components/Login";
// import ParentComponent from "./ParentComponent";
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// const App = () => {
//   return (
//     <Router>
//       <div>
//         <Routes>

//           <Route exact path='/'>
//             <ParentComponent />


//           </Route>





//         </Routes>

//       </div>



//     </Router>

//   )
// };

// export default App;
import React from "react";
import ParentComponent from "./ParentComponent";
import { BrowserRouter as Router, Routes, Route, Form } from "react-router-dom";
import Login from "./Components/Login";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<ParentComponent />} />
          {/* <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Form />} /> */}

        </Routes>
      </div>
    </Router>
  );
};

export default App;
