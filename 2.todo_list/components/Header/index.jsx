import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {nanoid} from 'nanoid'
import './index.css'

export default class Header extends Component {

    //Restrict the received props: type and necessity
    static propTypes = {
        addTodo: PropTypes.func.isRequired
    }
    // global value
    todo = ''
    inputEvent = null
    //record keystrokes
    handleKeyUp = (event) => {
        // Get input value and input box
        this.inputEvent = event
        this.todo = event.target.value
    }

    addTodo = () => {
        return () => {
            //Prepare a todo object
            const todoObj = {id: nanoid(), name: this.todo, done: false}
            //Pass todoObj to App
            this.props.addTodo(todoObj)
            //clear input
            this.inputEvent.target.value = ''
        }
    }

    render() {
        return (
            <div className="todo-header">
                <input onKeyUp={this.handleKeyUp} type="text" placeholder="Please enter your to-do"/>
                <button style={{position: 'relative', left: '480px', marginTop: "10px"}} onClick={this.addTodo()}
                        className="btn btn-add">Add to-do
                </button>
            </div>
        )
    }
}
