import {createContext,useReducer} from "react"
import Reducer from "./Reducer"
import {useEffect} from "react"

const INITIAL_STATE = {
    user:  JSON.parse(localStorage.getItem("user")) || null, // if there is user in local it will take user otherwise null
    isFetching: false,
    error: false,
  };

  export const Context = createContext(INITIAL_STATE)
  // after login if everything is scucces we will update initial state

  export const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, INITIAL_STATE); // this reducer wil update initial state

    useEffect(() => { // storing user in local storags
        localStorage.setItem("user", JSON.stringify(state.user));
      }, [state.user]);

    return(
      <Context.Provider value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch, // when we click login dispatch will comes succes or error
      }}>
        {children}
      </Context.Provider>
    )

  }