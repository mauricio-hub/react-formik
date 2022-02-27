import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import { FormikBasicPage } from "../03-forms/pages/FormikBasicPage";
import RegisterPages from "../03-forms/pages/RegisterPages";
import { FormikYupBasic } from "../03-forms/pages/FormikYupBasic";
import { FormikComponents } from "../03-forms/pages/FormikComponents";
import { FormikAbstraction } from "../03-forms/pages/FormikAbstraction";
import logo from "../logo.svg";

export const Navigation = () => {
  return (
    <Router>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            <li>
              <NavLink to="/register" activeClassName="nav-active" exact>
                Register Page
              </NavLink>
            </li>
            <li>
              <NavLink to="/formik" activeClassName="nav-active" exact>
                Formik
              </NavLink>
            </li>
            <li>
              <NavLink to="/formikyup" activeClassName="nav-active" exact>
                Formik Yup Page
              </NavLink>
            </li>
            <li>
              <NavLink to="/users" activeClassName="nav-active" exact>
                Users
              </NavLink>
            </li>
            <li>
              <NavLink to="/formikcomponents" activeClassName="nav-active" exact>
                  Formik Components
              </NavLink>
            </li>
            <li>
              <NavLink to="/formikAbstraction" activeClassName="nav-active" exact>
                  Formik Abstraction
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/register">
            <RegisterPages />
          </Route>

          <Route path="/formikyup">
            <FormikYupBasic />
          </Route>

          <Route path="/formik">
            <FormikBasicPage />
          </Route>
          <Route path="/formikcomponents">
            <FormikComponents/>
          </Route>
          <Route path="/formikAbstraction">
            <FormikAbstraction/>
          </Route>
          <Route path="/users">
            <h1>Users</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
