import React, { useEffect, useContext } from "react";
import { GithubContext } from "../../Context/GithubContext/GithubContext";
import UserItem from "./UserItem";

function UserResults() {
  const { users, loading } = useContext(GithubContext);

  if (!loading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  } else {
    return (
      <div>
        <h3>Loading...</h3>
      </div>
    );
  }
}

export default UserResults;
