const inintialState = {
  token: localStorage.getItem("token"),
  login: "",
};

const user = (state = inintialState, action) => {
  switch (action.type) {
    default:
      return {
        ...state,
      };
  }
};

export default user;

export const registerUser = (name, login, password) => {
  return async (dispatch) => {
    dispatch({ type: "/user/register/pending" });
    try {
      const user = await fetch("http://localhost:4000/user/register", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ name, login, password }),
      });
      const userRes = await user.json();
      dispatch({ type: "/user/register/fullfilled", payload: userRes });
    } catch (err) {
      dispatch({ type: "/user/register/fullfilled", error: err.toString() });
    }
  };
};
export const loginUser = (login, password) => {
  return async (dispatch) => {
    dispatch({ type: "/user/login/pending" });
    try {
      const res = await fetch("http://localhost:4000/user/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ login, password }),
      });

      const token = await res.json();
      dispatch({ type: "/user/login/fullfilled", payload: token });
      localStorage.setItem("token", token);
    } catch (err) {
      dispatch({ type: "/user/login/rejected", error: err.toString() });
    }
  };
};
