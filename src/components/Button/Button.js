import "./styles.css";

export const Button = ({ onClick, children, className }) => {
  return <button className={className} onClick={onClick}>{children}</button>;
};

export const ButtonIcon = ({ onClick, className, children }) => {
  return <button className={className} onClick={onClick}>{children}</button>
}