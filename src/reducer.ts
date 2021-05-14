export const initialState = {
  basket: [],
};

export const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    default:
      return state;
  }
};
