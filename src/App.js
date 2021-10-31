
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import TourPackages from './components/TourPackages/TourPackages';
import MyOrders from './components/MyOrders/MyOrders';
import ManageAllOrders from './components/ManageAllOrders/ManageAllOrders';
import AboutUs from './components/AboutUs/AboutUs';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import AuthProvider from './context/AuthProvider';
import initializeAuthentication from './firebase/firebase.auth';
import Header from './components/Header/Header';
import Blog from './components/Blog/Blog';
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
  
  <Route path="/myOrders">
  <MyOrders></MyOrders>
  </Route>
  
  <Route path="/manageAllOrders">
  <ManageAllOrders></ManageAllOrders>
  </Route>
  
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
