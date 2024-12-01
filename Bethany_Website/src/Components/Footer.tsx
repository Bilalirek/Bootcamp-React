import IGlogo from "../images/IG-logo.png"
import FBlogo from "../images/FB-logo.png"
import TWlogo from "../images/Twiter-logo.png"
import INlogo from "../images/IN-logo.png"
import "./Footer.css"


export default function Fotter(){
    return(
        <div className="Footer">
            <p>
            @realygreatsite
            </p>
            <div className="Icons">
                <img src={IGlogo} alt="Instagram" />
                <img src={FBlogo} alt="Facebook" />
                <img src={TWlogo} alt="twitter" />
                <img src={INlogo} alt="linkedin" />

            </div>
        </div>
    )
}