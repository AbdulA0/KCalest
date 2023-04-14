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
  isPlatform
} from "@ionic/react";
import React, { useState } from "react";
import styles from "./Login.module.css";
import ToolbarButtons from "../../components/ToolbarButtons/ToolbarButtons";
import { Redirect } from "react-router";
import { login } from "../../services/Auth";
import { useDispatch } from "react-redux";
import { auth as firebaseAuth } from "../../firebase";
import { auth } from "firebase";
import { act } from "react-dom/test-utils";

interface LoginProps {
  onLogin: (username: string, password: string) => void;
  test : Boolean;
}

const Login: React.FC<LoginProps> = ({ onLogin , test }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState({ loading: false, error: false });

  const loginHandler = async () => {
    if (test === true) {
      // console.log(""); 
      onLogin(email,password)
      return
    }
    setStatus({ loading: true, error: false });
    login(email, password)
      .then((result) => {
        // console.log("")
        if (status.loading) {
          setStatus({ loading: false, error: false });
        }
      })
      .catch((e) => {
        console.log("caught error in log in page: ", e);
        setStatus({ loading: false, error: true });
      });
  };

  const mockLogin = async () => {
    if(email == "" || password == ""){
      console.log("Please enter both a username and password")
      return;
    }
    try {
     const data:any = await login(email, password)
     if(data){
      // console.log(JSON.stringify("aakash",data))
     }
    }
    catch(err:any) {
      // console.log("[mock login]", err)
      if(err){
        throw JSON.stringify(err.message)
      }
      // return true
    }
  };

  if (!!firebaseAuth.currentUser) {
    return <Redirect to="/home" />;
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className={styles.Toolbar} color="none">
          <IonTitle className={styles.ToolbarTitle}>Login</IonTitle>
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
                  <IonText color="danger">Invalid Credentials</IonText>
                )}
              </IonList>
              <IonButton role={"button"}  expand="block" onClick={loginHandler}>
                Submit
              </IonButton>
              <IonButton
                expand="block"
                fill="clear"
                routerLink="/auth/register"
              >
                Don't have an account?
              </IonButton>
              <IonLoading isOpen={status.loading} />
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Login;


// const loginHandler = async () => {
//   if (test === true) {
//     console.log("aakash"); 
//     onLogin(email,password)
//     return
//   }
//   setStatus({ loading: true, error: false });
//    login(email, password).then((result) => {
//     console.log("aakash2");
//     if(status.loading) {
//       setStatus({ loading: false, error: false });
//     }
  
//    })
//     .catch((e) => {
//       console.log("caught error in log in page: ", e);
//       setStatus({ loading: false, error: true });
//     });
// };
