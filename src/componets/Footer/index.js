import React from "react";
import "../Footer/style.css"
import insta from "../../assets/insta.png"
import face from "../../assets/face.png"
export default function Footer(props){
return(
    <div className="footer">
        <a><img src={face} alt="face"/>Facebook</a>
        <a><img src={insta} alt="insta"/>Instagran</a>
    </div>

);

}