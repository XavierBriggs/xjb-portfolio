import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Image from 'react-bootstrap/Image';

const element = <FontAwesomeIcon icon={faGithub} />

const elements = [faLinkedin, faGithub];

function Home (){
    function createIcon (props){
        //return (<FontAwesomeIcon icon={props} />);
    }

    return (<>
    <div class="container">
  <div class="row">
    <div class="col-sm">
    <p> Hi My Name is Xavier and I code sometimes</p>
    </div>
    <div class="col-sm justify-content-end">
    <Image id="mainPic" src="/imgs/xjb-port.jpg" alt="Xavier Briggs" thumbnail fluid/>
    </div>
  </div>
</div>
    
    </>)
}
export default Home;