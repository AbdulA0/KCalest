import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonText,
  IonButton,
  IonLoading,
} from "@ionic/react";
import React, { useState } from "react";
import styles from "./Register.module.css";
import ToolbarButtons from "../../components/ToolbarButtons/ToolbarButtons";
import { Redirect } from "react-router";
import { register } from "../../services/Auth";
import { act } from "@testing-library/react";

import { async } from "rxjs";

interface RegisterProps {
  // onRegister: (username: string, password: string) => void;
  test: Boolean;
}

const Register: React.FC<RegisterProps> = ({ test }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState({ loading: false, error: false });
  const [errorMessage, setErrorMessage] = useState("");

  const registerHandler = async () => {
    if (test) {
      // console.log("")
      mockRegister();
      return;
    }

    setStatus({ loading: true, error: false });
    register(email, password)
      .then((result) => {
        // console.log("");
        if (status.loading) {
          setStatus({ loading: false, error: false });
        }
      })
      .catch((e) => {
        console.log("caught error in registration page: ", e);
        setStatus({ loading: false, error: true });
    setErrorMessage(e);
      });
  };

  const mockRegister = async () => {
    if (email == "" || password == "") {
      console.log("Please enter both a username and password");
      return;
    }
    try {
      const data: any = await register(email, password);
      if (data) {
        // console.log(JSON.stringify("register", data));
      }
    } catch (err: any) {
      // console.log("[mock register]", err);
      if (err) {
        throw JSON.stringify(err.message);
      }
    }
  };

  if (false) {
    return <Redirect to="/home" />;
  }
  return (
    <IonPage  data-testid ={'register'}>
      <IonHeader>
        <IonToolbar className={styles.Toolbar} color="none">
          <IonTitle className={styles.ToolbarTitle}>Register</IonTitle>
          <ToolbarButtons />
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid className={styles.Grid}>
          <IonRow className={styles.LandingPageSearchBoxRow}>
            <IonCol
              size-sm="12"
              sizeMd="6"
              offsetMd="3"
              className={styles.LandingPageSearchBoxCol}
            >
              <IonList>
                <IonItem>
                  <IonLabel position="stacked">Email</IonLabel>
                  <IonInput
                    data-testid="emailAddress"
                    type="email"
                    value={email}
                    onIonChange={(event) =>
                      setEmail(event.detail.value as string)
                    }
                  />
                </IonItem>
                <IonItem>
                  <IonLabel position="stacked">Password</IonLabel>
                  <IonInput
                    data-testid="password"
                    type="password"
                    value={password}
                    onIonChange={(event) =>
                      setPassword(event.detail.value as string)
                    }
                  />
                </IonItem>
                {status.error && (
                  <IonText color="danger">
                    {errorMessage.toString().substring(6)}
                  </IonText>
                )}
              </IonList>
              <IonButton role={"button"} onClick={registerHandler}>
                Create Account
              </IonButton>

              <IonButton expand="block" fill="clear" routerLink="/auth/login">
                already have an account?
              </IonButton>
              <IonLoading isOpen={status.loading} />
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Register;
