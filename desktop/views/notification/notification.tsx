import AppNotification from "@aabuhijleh/app-notification";
import { ipcRenderer } from "electron";
import qs from "qs";
import React, { Component } from "react";
import ReactDOM from "react-dom";

interface AppProps {
  notifId: number;
  buttonLabel: string;
}

class App extends Component<AppProps> {
  onButtonClick = (message: string) => {
    ipcRenderer.send("onButtonClick", this.props.notifId, message);
  };

  render() {
    return (
      <div>
        <AppNotification
          buttonLabel={this.props.buttonLabel}
          onButtonClick={this.onButtonClick}
        />
      </div>
    );
  }
}

const initOptions: AppProps = qs.parse(window.location.search.substr(1));
ReactDOM.render(<App {...initOptions} />, document.getElementById("root"));
