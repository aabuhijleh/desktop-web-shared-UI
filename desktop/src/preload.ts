import { remote } from "electron";
import path from "path";
import qs from "qs";

const { BrowserWindow, ipcMain } = remote;

// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.addEventListener("DOMContentLoaded", () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector);
    if (element) element.innerText = text;
  };

  for (const type of ["chrome", "node", "electron"]) {
    replaceText(`${type}-version`, process.versions[type]);
  }

  const itemList = document.getElementById("list");
  const notifBtnClickCallback = (id: number, message: string) => {
    const item = document.createElement("li");
    item.innerHTML = `notification ${id} - message:[${message}]`;
    itemList.appendChild(item);
  };

  let notifId = 0;
  document
    .getElementById("create-notification")
    .addEventListener("click", () => {
      const notificationWindow = new BrowserWindow({
        title: `Notification ${notifId}`,
        width: 300,
        height: 300,
        webPreferences: {
          nodeIntegration: true,
        },
      });
      const initOptions = {
        notifId: notifId++,
        buttonLabel: "AnswerMe",
      };
      notificationWindow.loadURL(
        path.join(
          "file://" + __dirname,
          "../views",
          "notification/notification.html?" + qs.stringify(initOptions)
        )
      );
    });

  ipcMain.on(
    "onButtonClick",
    (event, targetNotifId: number, message: string) => {
      notifBtnClickCallback(targetNotifId, message);
    }
  );
});
