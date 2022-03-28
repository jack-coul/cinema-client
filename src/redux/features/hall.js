const inintialState = {
  hall: [],
};

const hall = (state = inintialState, action) => {
  switch (action.type) {
    case "hall/get/pending":
      return {
        ...state,
        loading: true,
      };
    case "hall/get/fullfilled":
      return {
        ...state,
        hall: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
export default hall;

export const getHalls = () => {
  return async (dispatch) => {
    dispatch({ type: "hall/get/pending" });
    try {
      const res = await fetch("http://localhost:4000/hall");
      const halls = await res.json();

      dispatch({ type: "hall/get/fullfilled", payload: halls });
    } catch (err) {
      dispatch({ type: "hall/get/rejected", error: err.toString() });
    }
  };
};
