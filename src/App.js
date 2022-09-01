import "bootstrap/dist/css/bootstrap.min.css";

import { Route, Routes, Link, useLocation } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import DetailUser from "./pages/DetailUser";
import PrivateRoute from "./components/PrivateRoute";
import NotFound from "./pages/NotFound";

function App() {
  let location = useLocation();
  console.log(location);
  return (
    <>
      {(location.pathname == "/about" || location.pathname == "/profile") && (
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/signin" element={<SignIn />} />

        <Route element={<PrivateRoute />}>
          <Route path="/about" element={<About />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/detail-user/:id" element={<DetailUser />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
