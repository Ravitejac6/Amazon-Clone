import React, {
  createContext,
  FunctionComponent,
  useContext,
  useReducer,
} from "react";

export const StateContext = createContext({});
interface Props {
  children: any;
  reducer: any;
  initialState: any;
}

export const StateProvider: FunctionComponent<Props> = (props) => (
  <StateContext.Provider value={useReducer(props.reducer, props.initialState)}>
    {props.children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);
