import { Component } from "react";
import imagentv from '../../assets/images/television.jpg';

class Television extends Component {
    
    render() {
        return (
            <div>
                <h1>Estoy en TV</h1>
                <img src={imagentv} style={{height:"400px"}}/>
            </div>
        )
    }

}

export default Television;