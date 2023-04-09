import { firebaseAdmin } from "../firebase/adminApp";
import nookies from "nookies";

export default async function checkLogin(ctx, loginPath = "/login") {
  try {
    const cookies = nookies.get(ctx);
    const token = await firebaseAdmin.auth().verifyIdToken(cookies.token);
    return {
      props: {
        userId: token.uid,
      },
    };
  } catch (err) {
    // either the `token` cookie didn't exist or token verification failed either way: redirect to the login page
    ctx.res.writeHead(302, { Location: loginPath });
    ctx.res.end();
    return { props: {} };
  }
}
