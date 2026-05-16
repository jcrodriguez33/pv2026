import Logo from "./Logo";
import style from   "."
function Header(){
    return (
        <nav style={{display:"flex", backgroundColor:"cyan"}}>
            <Logo></Logo>
            <h2>Programacion Visual</h2>
        </nav>
    );
}
export default Header