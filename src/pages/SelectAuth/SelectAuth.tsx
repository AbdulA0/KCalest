import React, { useEffect, useRef } from "react";
import Login from "../Login/Login";
import Settings from "../Settings/Settings";
import { useParams } from "react-router-dom";
import Register from "../Register/Register";
import { auth as firebaseUser } from "../../firebase";

const SelectAuth: React.FC = () => {
  const routeId = useParams<{ id: string }>().id;
  let nextPage = useRef<JSX.Element>(<Login test={false} onLogin={function (username: string, password: string): void {
    throw new Error("Function not implemented.");
  } } />);

  if (!!firebaseUser.currentUser) {
    nextPage.current = (<Settings />) as JSX.Element;
  } else {
    if (routeId === "register") {
      nextPage.current = (<Register test={false} />) as JSX.Element;
    } else {
      nextPage.current = (<Login test={false} onLogin={function (username: string, password: string): void {
        throw new Error("Function not implemented.");
      } } />) as JSX.Element;
    }
  }
  return nextPage.current;
};

export default SelectAuth;
