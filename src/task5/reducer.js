export function formReducer(state, action) {
  switch (action.type) {
    case "HANDLE INPUT TEXT":
      return {
        ...state,
        [action.field]: action.payload,
      };

    default:
      return state;
  }
}
export const initialFormState = {
  firstName: "",
  lastName: "",
  email: "",
  phonenumber: "",
  username: "",
  password: "",
};
