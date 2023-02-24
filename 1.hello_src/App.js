import React,{Component} from "react";
import Hello from "./component/Hello";
// create and export class app component
export default class App extends Component{
    render(){
        return(
            <div>
                <Hello/>
            </div>
        )
    }
}

