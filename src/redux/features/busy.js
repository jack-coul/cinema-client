const initialState = {
  error: null,
  tickets: [],
};

const busy = (state = initialState, action) => {
  switch (action.type) {
    case "get/busy/pending":
      return {
        ...state,
        loadingTickets: true,
        error: null,
      };
    case "get/busy/fulfilled":
      return {
        ...state,
        loadingTickets: false,
        tickets: [...action.payload],
      };
    case "get/busy/rejected":
      return {
        ...state,
        loadingTickets: false,
        error: action.payload,
      };
    case "toBook/fetch/pending":
      return {
        ...state,
        loadingTickets: true,
        error: null,
      };
    case "toBook/fetch/fulfilled":
      return {
        ...state,
        loadingTickets: false,
        tickets: [...action.payload],
      };
    case "toBook/fetch/rejected":
      return {
        ...state,
        loadingTickets: false,
        error: action.payload,
      };
    case "get/userTickets/pending":
      return {
        ...state,
        loadingTickets: true,
      };
    case "get/userTickets/fulfilled":
      return {
        ...state,
        loadingTickets: false,
        tickets: [...action.payload],
      };
    case "get/userTickets/rejected":
      return {
        ...state,
        loadingTickets: false,
        error: action.error,
      };
    case "busy/delete/fullfilled":
      return{
        ...state,
        tickets: [
          ...state.tickets.filter((ticket)=>{
           return ticket._id !== action.payload 
          })
        ]
      }
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
      dispatch({ type: "toBook/fetch/fulfilled", payload: place });
    } catch (error) {
      dispatch({ type: "toBook/fetch/rejected", error });
    }
  };
};

export const getUserBusy = () => {
  return async (dispatch, getState) => {
    const state = getState();

    const token = state.user.token;
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
      dispatch({ type: "get/userTickets/fulfilled", payload: tickets });
    } catch (error) {
      dispatch({ type: "get/userTickets/rejected", error });
    }
  };
};
export const deleteBusy = (id)=>{
  return async(dispatch, getState)=>{
    const state = getState()
    try{
      const res = await fetch(`http://localhost:4000/user/busy/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${state.user.token}`,
          "Content-type": "application/json"
        }
      })
      const busy = await res.json()
      dispatch({type: "busy/delete/fullfilled", payload: id})
    }
    catch(err){
      dispatch({type: "busy/delete/rejected", error: err.toString()})
    }
  }
}

export default busy;
