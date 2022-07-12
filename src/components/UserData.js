import React from "react";

const UserData = ({ user, isLoading }) => {
  return (
    <table style={{ border: "2px solid black" }}>
      <thead>
        <tr>
          <td>Profile picture</td>
          <td>UserName</td>
          <td>Organization url</td>
          <td>Repo url</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{ border: "2px solid black" }}>
            <img src={user.avatar_url} alt="profile" height="30%" width="30%" />
          </td>
          <td style={{ border: "2px solid black" }}>{user.login}</td>
          <td style={{ border: "2px solid black" }}>
            <a
              href={user.organizations_url}
              rel="noopener noreferrer"
              target="_blank"
            >
              {user.organizations_url}
            </a>
          </td>
          <td style={{ border: "2px solid black" }}>
            <a href={user.repos_url} rel="noopener noreferrer" target="_blank">
              {user.repos_url}
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default UserData;
