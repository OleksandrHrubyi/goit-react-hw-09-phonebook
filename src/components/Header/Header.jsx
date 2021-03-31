import { NavLink, withRouter } from "react-router-dom";
import { ReactSVG } from "react-svg";
import { AiOutlineLogin, AiOutlineLogout } from "react-icons/ai";
import { IconContext } from "react-icons";
import { connect } from "react-redux";
import { logoutUser } from "../../redux/User/userOperation";
import { getTokenState, getUserName } from "../../redux/User/userSelectors";
import styles from "./header.module.css";
import phonebook from "../../img/phonebook.svg";
import ThemeSwitch from "../themeSwitch/ThemeSwitch";

function Header({ islogin, name, onLogout }) {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <NavLink className={styles.link} to="/">
          <span className={styles.title}> Phonebook</span>{" "}
          <ReactSVG
            src={phonebook}
            beforeInjection={(svg) => {
              svg.classList.add(styles.phonebookIcon);
              svg.setAttribute("style", "width: 70px");
            }}
          />
        </NavLink>
        <div className={styles.themeContainer}>
          {islogin ? (
            <div className={styles.authname}>
              <span className={styles.name}>Welcome, {name}</span>
              <button
                type="button"
                onClick={onLogout}
                className="btn btn-primary"
              >
                Logout <AiOutlineLogout />
              </button>
            </div>
          ) : (
            <>
              <div className={styles.nav}>
                <NavLink className={styles.login} to="/login">
                  <IconContext.Provider value={{ className: styles.loginIcon }}>
                    <AiOutlineLogin /> <span>Login</span>
                  </IconContext.Provider>
                </NavLink>
                <NavLink className={styles.registration} to="/registr">
                  <span>Registration</span>
                </NavLink>
              </div>
            </>
          )}
          <ThemeSwitch />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  islogin: getTokenState(state),
  name: getUserName(state),
});

const mapDispatchToProps = {
  onLogout: logoutUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));
