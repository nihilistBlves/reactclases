import { Component } from "react";
import logohome from '../../assets/images/home.png';

class Home extends Component {
    
    render() {
        return (
            <div>
                <h1>Estoy en Home</h1>
                <img src={logohome} style={{height:"200px"}}/>
            </div>
        )
    }

}

export default Home;