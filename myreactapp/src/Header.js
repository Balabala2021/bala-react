import './Header.css'
import styles from './Header.module.css';

function Header() {
   const mystyle = {
         color:"red",
         backgroundColor:"lightblue",
         padding:"10px",
         fontFamily:"Sans-Serif"
   }

    return <>
    {/* <h1 style={{color:"red",backgroundColor:"lightblue"}}>Hello styling</h1> */}
    {/* <h1 style={mystyle}>Hello styling</h1> */}
    <h1 className={styles.bigBlue}>Hello styling</h1>

    <p>Add a little style</p>  
    </>
    

}

export default Header;
