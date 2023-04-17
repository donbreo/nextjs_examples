import React from "react";
const loggedOutData = {
  member_number: "",
  tier: "nonloggedin",
  isLoggedIn: false,
  typeValue: "online"
}

const AuthContext = React.createContext({
  isLoggedIn: false,
  loggedInInfo: loggedOutData,
  loggedIn_Info: loggedOutData,
  toggleLoginPopup: () => {}
});

export default AuthContext;
