import "./styles.css";

export const Button = props => {
  return (
    <button
      className={`
        ${props.className}
        flex items-center justify-center
        absolute bottom-0 right-0
        m-[5%]
        w-[150px] h-[50px]
        bg-[#fff] border-2 border-black
        text-[18px]
        hover:bg-black hover:text-white
        transition-all duration-300
      `}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
};

export const ButtonIcon = ({ onClick, className, children }) => {
  return <button className={className} onClick={onClick}>{children}</button>
}

export const ButtonForm = props => {
  return (
    <button
      className={`
      ${props.classname}
       border-2 border-black 
      w-[40%] h-[40px] bg-[#fff] 
      rounded 
      hover:bg-black hover:text-white 
      transition-all duration-300 
      `}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}

export const ButtonNewTask = props => {
  return (
    <button
      className="w-1/2 h-[50px] bg-emerald-300 border-2 border-black"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}