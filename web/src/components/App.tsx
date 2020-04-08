import AppNotification from "@aabuhijleh/app-notification";
import React, { Component } from "react";

export class App extends Component {
  onButtonClick = (message: string) => {
    console.log(message);
  };

  render() {
    return (
      <div>
        <div>Hello World</div>
        <div>
          <AppNotification
            buttonLabel="AnswerMe"
            onButtonClick={this.onButtonClick}
          />
        </div>
      </div>
    );
  }
}

export default App;
