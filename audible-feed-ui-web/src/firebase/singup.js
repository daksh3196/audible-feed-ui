import firebase_app from "./config";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

const auth = getAuth(firebase_app);

export default async function sign_up(email, pass) {
  let sign_up_res = null;
  let sign_up_err = null;
  try {
    sign_up_res = await createUserWithEmailAndPassword(auth, email, pass);
  } catch (e) {
    sign_up_err = e;
  }

  console.log({ sign_up_res, sign_up_err });
  return { sign_up_res, sign_up_err };
}
