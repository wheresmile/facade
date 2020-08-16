
import { createBrowserHistory } from 'history';

const History = createBrowserHistory();

export const checkSignIn = () => {
  return (dispatch, getState) => {
    const user = getState().user;
    if (!user.isLogged) {
      History.push("/signin");
    }
  }
}

export default History;