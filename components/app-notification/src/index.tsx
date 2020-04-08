import React from "react";

interface AppNotificationProps {
  buttonLabel: string;
  onButtonClick: (message: string) => void;
}

const AppNotification = (props: AppNotificationProps) => {
  const { buttonLabel, onButtonClick } = props;
  return (
    <div style={{ border: "2px solid black", textAlign: "center" }}>
      <h3>AppNotification</h3>
      <button onClick={() => onButtonClick(`${buttonLabel} is clicked`)}>
        {buttonLabel}
      </button>
    </div>
  );
};

export default AppNotification;
