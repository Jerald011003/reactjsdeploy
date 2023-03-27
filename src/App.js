import "./App.css";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./components/screens/HomeScreen";
import ProductScreen from "./components/screens/ProductScreen";
import CartScreen from "./components/screens/CartScreen";
import LoginScreen from './components/screens/LoginScreen';
import RegisterScreen from './components/screens/RegisterScreen';
import Nav from "./components/Nav"
import Main from "./components/Main"
import OrderScreen from "./components/screens/OrderScreen";
import UserScreen from './components/screens/UserScreen';
// import ShippingScreen from './components/screens/ShippingScreen';
import Checkout from "./pages/Checkout";
// import UserProfile from './components/screens/UserProfile';
// import UserProfile2 from './components/screens/UserProfile2';
// import TheProfile from './components/screens/TheProfile';
import TheFuckingProfile from './components/screens/TheFuckingProfile';

function App() {
  return (
  

<Router>
      <Header />
      {/* <Nav /> */}
      {/* <Main /> */}
      <main className="py-3">
      <Route path="/" component={Main} exact />
        <Container>
          <Route path="/games" component={HomeScreen} exact />
          <Route path="/login" component={LoginScreen} exact />
          <Route path="/register" component={RegisterScreen} exact />
          <Route path="/product/:id" component={ProductScreen} exact />
          <Route path="/cart/:id?" component={CartScreen} exact />
          <Route path="/ordercheckout" component={OrderScreen} exact />
          {/* <Route path="/profile" component={UserProfile} exact /> */}
          {/* <Route path="/profile2" component={UserProfile} exact /> */}
          {/* <Route path="/profile" component={TheProfile} exact /> */}
          <Route path="/profile" component={TheFuckingProfile} exact />
          <Route path="/checkout" component={Checkout} exact />
        </Container>
      </main>
    
      <Footer />
      </Router>
  );
}

export default App;
