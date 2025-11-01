import React from "react";
import "./Stepper.scss";
import { FaCheck } from "react-icons/fa";

export interface StepperStep {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  error?: boolean;
}

export interface StepperProps {
  /** Steps */
  steps: StepperStep[];
  /** Current active step */
  current?: number;
  /** Orientation */
  orientation?: "horizontal" | "vertical";
  /** Variant */
  variant?: "default" | "outlined";
  /** Show descriptions */
  showDescription?: boolean;
  /** Border style */
  borderStyle?: "solid" | "dashed" | "dotted";
  /** Border color */
  borderColor?: string;
  /** Hover effect */
  hoverEffect?: boolean;
  /** Custom className */
  className?: string;
}

export const Stepper: React.FC<StepperProps> = ({
  steps,
  current = 0,
  orientation = "horizontal",
  variant = "default",
  showDescription = true,
  borderStyle = "solid",
  borderColor,
  hoverEffect = false,
  className = "",
}) => {
  const stepperStyle: React.CSSProperties & {
    "--stepper-border-color"?: string;
    "--stepper-border-style"?: string;
  } = {
    ...(borderColor && { "--stepper-border-color": borderColor }),
    "--stepper-border-style": borderStyle,
  };

  return (
    <div
      className={`ui-stepper ui-stepper--${orientation} ui-stepper--${variant} ${
        hoverEffect ? "ui-stepper--hover" : ""
      } ${className}`}
      style={stepperStyle}
    >
      {steps.map((step, index) => {
        const isCompleted = index < current;
        const isActive = index === current;
        const isError = step.error;

        return (
          <div
            key={index}
            className={`ui-stepper__step ${
              isCompleted ? "ui-stepper__step--completed" : ""
            } ${isActive ? "ui-stepper__step--active" : ""} ${
              isError ? "ui-stepper__step--error" : ""
            } ${step.disabled ? "ui-stepper__step--disabled" : ""}`}
          >
            <div className="ui-stepper__step-indicator">
              {isCompleted ? (
                <span className="ui-stepper__check-icon">
                  <FaCheck />
                </span>
              ) : step.icon ? (
                <span className="ui-stepper__custom-icon">{step.icon}</span>
              ) : (
                <span className="ui-stepper__step-number">{index + 1}</span>
              )}
            </div>
            <div className="ui-stepper__step-content">
              <div className="ui-stepper__step-title">{step.title}</div>
              {showDescription && step.description && (
                <div className="ui-stepper__step-description">
                  {step.description}
                </div>
              )}
            </div>
            {index < steps.length - 1 && (
              <div className="ui-stepper__step-connector" />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Stepper;
