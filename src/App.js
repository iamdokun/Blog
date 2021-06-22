import './index.css';
import { BrowserRouter, Switch, Route} from "react-router-dom";
import Navbar from './navbar'
import Home from './Home'
import Create from './Create'
import About from './About'
import BlogDetails from './BlogDetails'
import NotFound from './NotFound';

// import SignUp from './SignUp.jsx'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <SignUp /> */}
        <Navbar />
          <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/About">
              <About />
            </Route>
            <Route path="/Blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="*">
            <NotFound />
            </Route>
            </Switch>
          </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
 