import React from 'react'
import { Link }  from 'react-router-dom';



const Title = (props) => {
    return (
        <div class="game">
            <h1 class="title">Hit and Blow</h1>
            <div class="homebtn">
                <button type='button' className="playStartbtn" id="startBtn" >
                    <Link to="/Preparation" onClick={this} >スタート</Link>
                    </button>
                <button type="button" className="helpbtn">
                    <Link to = "/ruleplay" onClick = {this} >遊び方</Link>
                    </button>
            </div>
        </div>
    )
}

export default Title