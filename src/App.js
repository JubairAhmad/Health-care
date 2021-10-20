import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import LogIn from './components/LogIn/LogIn';
import NotFound from './components/NotFound/NotFound';
import Services from './components/Services/Services';
import Footer from './components/Shared/Footer/Footer';
import Header from './components/Shared/Header/Header';
import Help from './components/Help/Help';
import HelpResponse from './components/HelpResponse/HelpResponse';
import ContactMailResponse from './components/ContactMailResponse/ContactMailResponse';
import AuthProvider from './context/AuthProvider';
import ServiceDetail from './components/ServiceDetail/ServiceDetail';
import PrivateRoute from './components/PrivetRoute/PrivetRoute';
import BookResponse from './components/BookResponse/BookResponse';


function App() {
  return (
    <div>
     <AuthProvider>
       
     <BrowserRouter>
          <Header></Header>
          <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute exact path="/services">
            <Services></Services>
          </PrivateRoute>
          <PrivateRoute  path="/service/:Id">
          <ServiceDetail></ServiceDetail>
          </PrivateRoute>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path='/help'>
            <Help></Help>
          </Route>
          <Route path='/helpresponse'>
            <HelpResponse></HelpResponse>
          </Route>
          <PrivateRoute path='/contactmailresponse'>
            <ContactMailResponse></ContactMailResponse>
          </PrivateRoute>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/booking">
            <BookResponse></BookResponse>
          </Route>
          <Route path="/login">
            <LogIn></LogIn>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>

          </Switch>
          <Footer></Footer>
          </BrowserRouter>
     </AuthProvider>
      
    </div>
  );
}

export default App;
