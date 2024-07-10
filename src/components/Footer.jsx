import React from "react";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";


function Footer (){
    const elements = [faLinkedin, faGithub];
    function createIcon (props){
        return (<FontAwesomeIcon icon={props} />);
    }
    return elements.map(createIcon);

}