import React from 'react';

import ReactDOM  from "react-dom";




export default class Clock extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {date : new Date()};
    }    
    
    componentDidMount(){
        this.timerId = setInterval(() => this.tick(),1000);
        console.log("this",this.timerId);
    }
    componentWillUnmount(){
        clearInterval(this.timerId);
    }
    tick(){
        this.setState({
            date : new Date()
        })
    }

    render(){
        console.log("object",this.props);
        console.log("objectHuha",this.state);
        return(
            <div>
                <h1>Hello There!!!....</h1>
                <h4>It's {this.state.date.toLocaleTimeString()}</h4>
            </div>
        );
    }


}

// function Clock(props) {
    //     console.log("lalall",props.date.toLocaleDateString());
    //   return (
        //     <div>
        //       <h1>Hello, world!</h1>
        //       <h2>It is {props.date.toLocaleTimeString()}.</h2>
        //     </div>
        //   );
        // }
        
    const root = ReactDOM.createRoot(document.getElementById('root'));
        // export default function tick(){
            root.render(<Clock />);  
    // }
// setInterval(tick, 5000);