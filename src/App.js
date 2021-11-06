
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import TourPackages from './components/TourPackages/TourPackages';
import MyOrders from './components/MyOrders/MyOrders';
import AboutUs from './components/AboutUs/AboutUs';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import AuthProvider from './context/AuthProvider';
import initializeAuthentication from './firebase/firebase.auth';
import Header from './components/Header/Header';
import Blog from './components/Blog/Blog';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import ConfirmOrder from './components/ConfirmOrder/ConfirmOrder';
import AddPackages from './components/AddPackages/AddPackages';
initializeAuthentication();


function App() {
  return (
    <div className="App">

     <AuthProvider>

     <BrowserRouter>
  <Header/>

  <Switch>
    
  <Route exact path="/">
  <Home></Home>
  </Route>
  
  <Route path="/home">
  <Home></Home>
  </Route>
  
  
  <Route path="/aboutUs">
  <AboutUs></AboutUs>
  </Route>
  
  
  
  <Route path="/login">
  <Login></Login>
  </Route>
  
  <Route path="/tourPackages">
  <TourPackages></TourPackages>
  </Route>
  
  <PrivateRoute path="/myOrders">
  <MyOrders></MyOrders>
  </PrivateRoute>

  <PrivateRoute path="/confirmOrder/:tourId">
 <ConfirmOrder></ConfirmOrder>
  </PrivateRoute>

  <PrivateRoute path="/addPackages">
 <AddPackages></AddPackages>
  </PrivateRoute>
  
  
  <Route path="/blog">
<Blog></Blog>
  </Route>
  
  
  
  <Route path="*">
  <NotFound></NotFound>
  </Route>
  
  
  
  
  </Switch>

  <Footer/>
    </BrowserRouter>

     </AuthProvider>
     

    </div>
  );
}

export default App;
