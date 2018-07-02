import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Center = styled.div`

div{
    display: grid;
    justify-content: center;
    align-items: center;
    height: 90vh;
    background: grey;
}

a{
    text-decoration:none;
    
    font-size: 100px;
    
}

.square_btn{
    display: inline-block;
    padding: 0.5em 1em;
    text-decoration: none;
    background: #668ad8;/*Button Color*/
    color: #FFF;
    border-bottom: solid 4px #627295;
    border-radius: 3px;
}
.square_btn:active {/*on Click*/
    -ms-transform: translateY(4px);
    -webkit-transform: translateY(4px);
    transform: translateY(4px);/*Move down*/
    border-bottom: none;/*disappears*/
}

`
class LandingPage extends Component {

    render() {
        return (
            <Center>
                <div>
                    <div>
                        <Link className="square_btn" to="/games">ENTER</Link>
                    </div>
                </div>
            </Center>
        );
    }
}

export default LandingPage;