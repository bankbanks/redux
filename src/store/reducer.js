import { uniqueId } from "lodash";
const initialState = {
  counter: 1,
  resultList: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        counter: state.counter + 1,
      };
    case "DECREMENT":
      return {
        ...state,
        counter: state.counter - 1,
      };
    case "ADDTEN":
      return {
        ...state,
        counter: state.counter + action.value,
      };
    case "ADDTEN":
      return {
        ...state,
        counter: state.counter + action.value,
      };
    case "SUBTRACTTEN":
      return {
        ...state,
        counter: state.counter - action.value,
      };
    case "STORE_RESULT":
      return {
        ...state,
        resultList: [
          ...state.resultList,
          { id: uniqueId(), result: action.counter },
        ],
      };
    case "DELETE_RESULT":
      return {
        ...state,
        resultList: state.resultList.filter(
          (rs) => Number(rs.id) !== Number(action.id)
        ),
      };

    default:
      return state;
  }
};

export default reducer;
