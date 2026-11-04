// import { Component } from "react";
// import Navbar from "./Navbar";
// import Footer from "./Footer";
// import HomePage from "./HomePage";

import Navabr from "./Navbar"
import Footer from './Footer'
import HomePage from "./HomePage"

// class App extends Component {
//     render() {
//         return (
//             <>
//                 <Navbar />
//                 <HomePage />
//                 <Footer />
//             </>
//         )
//     }
// }
// export default App;


//! Function based component

function App() {
    return (
        <>
            <Navabr />
            <HomePage/>
            <Footer />
        </>
    )
}
export default App