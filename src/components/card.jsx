import React from "react";
import GitCard from "./gitcard.jsx"

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        "sanjibroy360",
        "titarakshay",
        "maxagno3",
        "reettik97",
        "anupamroy8",
      ],
      userIndex: 0,
      userInfo: null,
    };
  }

  componentDidMount() {
    fetch(`https://api.github.com/users/${this.state.users[this.state.userIndex]}`)
      .then((res) => res.json())
      .then((info) => this.setState({ userInfo: info }))
      .catch((error) => console.log({ error }));
  }

  handleClick = (index,event) => {
    event.target.setAttribute("className","active");
    this.setState({ userIndex: index });
  };

  componentDidUpdate(_prevProps, prevStates) {
    if (prevStates.userIndex !== this.state.userIndex) {
      fetch(`https://api.github.com/users/${this.state.users[this.state.userIndex]}`)
        .then((res) => res.json())
        .then((info) => this.setState({ userInfo: info }))
        .catch((error) => console.log({ error }));
    }
  }

  render() {
    return (
      <>
        {this.state.users.map((user, i) => {
          return <button className="btn" onClick={(event) => this.handleClick(i,event)}>{user}</button>;
        })}

        {this.state.userInfo ? (
          <GitCard userInfo={this.state.userInfo} />
        ) : (
          <p className="loading">Loading...</p>
        )}
      </>
    );
  }
}

export default Card;
