import { BTN_SIZES, BTN_STYLES } from "./ButtonToken";

const Button = ({
  type = "button",
  btnSize = "btn-52",
  btnStyle = "blueBg",
  className,
  onClick,
  children,
  ...props
}) => {
  const sizeClass = BTN_SIZES[btnSize] || "";
  const styleClass = BTN_STYLES[btnStyle] || "";

  return (
    <button
      type={type}
      className={`transition linear hover:brightness-90 bg hover:scale-110  ${sizeClass} ${styleClass} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
