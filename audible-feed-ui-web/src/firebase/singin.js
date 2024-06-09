import firebase_app from "./config";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";

const auth = getAuth(firebase_app);

export default async function sign_in(email, pass) {
  let sign_up_res = null;
  let sign_up_err = null;
  try {
    sign_up_res = await signInWithEmailAndPassword(auth, email, pass);
  } catch (e) {
    sign_up_err = e;
  }

  return { sign_up_res, sign_up_err };
}
