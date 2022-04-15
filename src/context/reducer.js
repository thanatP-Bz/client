import { DISPLAY_ALERT } from "./action";
import { CLEAR_ALERT } from "./action";

const reducer = (state, action) => {
  if (action.type === DISPLAY_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertText: "please provide all values",
      alertType: "danger",
    };
  }

  if (action.type === CLEAR_ALERT) {
    return {
      ...state,
      showAlert: false,
      alertText: "",
      alertType: "",
    };
  }
  throw new Error(`no found: ${action.type}`);
};

export default reducer;
