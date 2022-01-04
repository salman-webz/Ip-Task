
import './Style.css';
import classNames from "classnames";
import { Link } from "react-router-dom";

const SwitchAuth = (activePage) => {
  return (
    <>
    <div className="react-switch-selector-wrapper">
      <div className="d-flex switch-block">
        <Link to="/login" className={classNames(`react-switch-selector-option-label ${activePage.isLoginActive === "true" ? "active" : ""}`)}>
            Login
        </Link>
        <Link to="/signup" className={classNames(`react-switch-selector-option-label ${activePage.isSignupActive === "true" ? "active" : ""}`)}>
            Signup
        </Link>
      </div>
    </div>
    </>
  );
};

export default SwitchAuth;
