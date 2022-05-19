import { createContext, useReducer } from "react";
import GithubReducer from "./GithubReducer";

export const GithubContext = createContext();

const GITHUB_URL = "https://api.github.com";

const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: true,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // Clear Users array
  const clearUser = () => dispatch({ type: "CLEAR_USER" });

  // Search User
  const searchUser = async (searchText) => {
    const param = new URLSearchParams({
      q: searchText,
    });

    const response = await fetch(`${GITHUB_URL}/search/users?${param}`);
    const { items } = await response.json();
    dispatch({ type: "GET_USERS", payload: items });
  };

  // get single User
  const getUser = async (userName) => {
    const response = await fetch(`${GITHUB_URL}/users/${userName}`);
    const data = await response.json();
    dispatch({ type: "GET_USER", payload: data });
  };

  // get repos User
  const getUserRepos = async (userName) => {
    const response = await fetch(`${GITHUB_URL}/users/${userName}/repos`);
    const data = await response.json();
    dispatch({ type: "GET_REPOS", payload: data });
  };

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUser,
        clearUser,
        getUser,
        getUserRepos,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubProvider;
