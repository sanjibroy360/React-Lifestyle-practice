import React from "react";

function GitCard(props) {
  return (
    <div className="card_wrapper">
      <div className="card">
        <img src={props.userInfo.avatar_url} alt="User's Image" />
        <h2>{props.userInfo.login}</h2>
        <div className="infos">
          <p className="user_info">
            <span className="label">location: </span> {props.userInfo.location}
          </p>
          <p className="user_info">
            <span className="label">Followers: </span>
            {props.userInfo.followers}
          </p>
          <p className="user_info">
            <span className="label">Following: </span>
            {props.userInfo.following}
          </p>
          <p className="user_info">
            <span className="label">Repos: </span>
            {props.userInfo.public_repos}
          </p>
        </div>
      </div>
    </div>
  );
}

export default GitCard;
