import React from "react";
import "./Dialog.scss";
export interface DialogProps {
  variant?: "default" | "custom";
  withCloseIcon?: boolean;
  headerText?: string;
  primaryButtonLabel?: string;
  secondaryButtonLabel?: string;
  primaryButtonClick?: () => void;
  secondaryButtonClick?: () => void;
  dialogContent:string
}

const Dialog: React.FC<DialogProps> = ({ variant = "default" ,headerText,primaryButtonLabel,secondaryButtonLabel,dialogContent}) => {
  return (
    <div className="main-storybook-dialog-container">
      <div className="dialog-outline">
        <div className="header">{headerText}</div>
        <div className="content">{dialogContent}</div>
        <div className="footer"><button className="secondary-btn">{secondaryButtonLabel}</button><button className="primary-btn">{primaryButtonLabel}</button></div>
      </div>
    </div>
  );
};

export default Dialog;
