import React, { Component } from 'react';
// import Logo from './components/Logo/bug_icon.png';
import './App.css';
import Jumbotron from './components/Jumbotron/jumbotron';
import Navbar from './components/Navbar/navbar';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/home";
import See from "./pages/see";
import Do from "./pages/do";
import Eat from "./pages/eat";
import Logo from "./components/Logo/logo";
import Footer from "./components/Footer/footer";
import Wrapper from "./components/Wrapper/wrapper";
class App extends Component {
  
  render() {

    return (
      <Router>
        <div>
        <Navbar />
        <Jumbotron>
          <Wrapper>
            <Logo />
            <Route exact path="/" component={Home} />
            <Route exact path="/see" component={See} />
            <Route exact path="/do" component={Do} />
            <Route exact path="/eat" component={Eat} />
          </Wrapper>
          </Jumbotron>
          <Footer />
        </div>
      </Router>
    );
  }
//     return (

//       <div className="App">
//       <Navbar />
//       <Jumbotron />
//         <header className="App-header">
//           <img src={Logo} className="App-logo" alt="logo" />
//           <p>
//             Hello World! Let's get to coding...
//           </p>
//         </header>
//       </div>
  
//     );
//   }
// }
}
export default App;
