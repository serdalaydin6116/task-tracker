
// import Proptypes from "prop-types";
import Button from "./Button";

const Header = ({title}) => {
    const handleClick = () =>{
        console.log("Click with handle from Header");
    };
  return (
    <div className="header">
        <h1>{title}</h1>
        <Button 
        color = "purple"
        text = "Show Add Task Bar" 
        handleClick ={handleClick}/>
    
    
    </div>
  )
};
// Header.Proptypes = {
//     title: Proptypes.string.isrequired
// };
// Header.defaultProps = {
//     title: "Task Tracker",
// };

export default Header;