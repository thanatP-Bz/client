<<<<<<< HEAD
import { DISPLAY_ALERT } from "./action";
import { CLEAR_ALERT } from "./action";
=======
import { DISPLAY_ALERT, CLEAR_ALERT } from "./actions";
>>>>>>> 103911dbfb12a9c2ac7f0a06ee9df531e605be41

const reducer = (state, action) => {
  if (action.type === DISPLAY_ALERT) {
    return {
      ...state,
      showAlert: true,
<<<<<<< HEAD
      alertText: "please provide all values",
      alertType: "danger",
=======
      alertType: "danger",
      alertText: "Please provide all value",
>>>>>>> 103911dbfb12a9c2ac7f0a06ee9df531e605be41
    };
  }

  if (action.type === CLEAR_ALERT) {
    return {
      ...state,
      showAlert: false,
<<<<<<< HEAD
      alertText: "",
      alertType: "",
    };
  }
  throw new Error(`no found: ${action.type}`);
=======
      alertType: "",
      alertText: "",
    };
  }

  throw new Error(`no such action : ${action.type}`);
>>>>>>> 103911dbfb12a9c2ac7f0a06ee9df531e605be41
};

export default reducer;
