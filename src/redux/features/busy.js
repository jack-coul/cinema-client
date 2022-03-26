const initialState = {
  busy: [],
  error: null,
  user: "",
  tickets: [],
};

const busy = (state = initialState, action) => {
  switch (action.type) {
    case "get/busy/pending":
      return {
        ...state,
        loadingBusy: true,
        error: null,
      };
    case "get/busy/fulfilled":
      return {
        ...state,
        loadingBusy: false,
        busy: [...action.payload],
      };
    case "get/busy/rejected":
      return {
        ...state,
        loadingBusy: false,
        error: action.payload,
      };
    case "toBook/fetch/pending":
      return {
        ...state,
        loadingBusy: true,
        error: null,
      };
    case "toBook/fetch/fulfilled":
      return {
        ...state,
        loadingBusy: false,
        busy: [...state.busy, { ...action.payload }],
      };
    case "toBook/fetch/rejected":
      return {
        ...state,
        loadingBusy: false,
        error: action.payload,
      };
    case "get/userTickets/pending":
      return {
        ...state,
        loadTickets: true,
      };
    case "get/userTickets/fulfilled":
      return {
        ...state,
        loadTickets: false,
        tickets: [...action.payload],
      };
    case "get/userTickets/rejected":
      return {
        ...state,
        loadTickets: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export const getBusy = () => {
  return async (dispatch) => {
    dispatch({ type: "get/busy/pending" });
    try {
      const res = await fetch("http://localhost:4000/");
      const busy = await res.json();
      dispatch({ type: "get/busy/fulfilled", payload: busy });
    } catch (error) {
      dispatch({ type: "get/busy/rejected", error });
    }
  };
};

export const toBookThePlace = (placesList, id) => {
  return async (dispatch, getState) => {
    const state = getState();
    const token = state.user.token;
    dispatch({ type: "toBook/fetch/pending" });
    try {
      const res = await fetch("http://localhost:4000/busy", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ placesList, id }),
      });
      const place = await res.json();
      console.log(place);
      dispatch({ type: "toBook/fetch/fulfilled" });
    } catch (error) {
      dispatch({ type: "toBook/fetch/rejected", error });
    }
  };
};

export const getUserBusy = () => {
  return async (dispatch, getState) => {
    const state = getState();

    const token = state.user.token;
    console.log(token);
    dispatch({ type: "get/userTickets/pending" });
    try {
      const res = await fetch("http://localhost:4000/user/busy", {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const tickets = await res.json();
      console.log(tickets);
      dispatch({ type: "get/userTickets/fulfilled", payload: tickets });
    } catch (error) {
      dispatch({ type: "get/userTickets/rejected", error });
    }
  };
};

export default busy;
