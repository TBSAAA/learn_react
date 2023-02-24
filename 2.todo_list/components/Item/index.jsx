import React, {Component} from 'react';
import './index.css'
import PropTypes from "prop-types";

export default class Item extends Component {

    static propTypes = {
        id:PropTypes.string.isRequired,
        name:PropTypes.string.isRequired,
        done:PropTypes.bool.isRequired,
        updateTodo:PropTypes.func.isRequired,
        deleteTodo:PropTypes.func.isRequired,
    }

    state = {mouse: false}
    handleMouse = (flag) => {
        return () => {
            this.setState({mouse: flag})
        }
    }

    handleCheck = (id) => {
        return (event) => {
            this.props.updateTodo(id, event.target.checked);
        }
    }

    handleDelete = (id) => {

        if (window.confirm('Do you want delete it?')) {
            this.props.deleteTodo(id)
        }
    }

    render() {
        const {id, name, done} = this.props
        const {mouse} = this.state
        // console.log(name)
        return (
            <div>
                <li style={{backgroundColor: mouse ? '#ddd' : 'white'}} onMouseEnter={this.handleMouse(true)}
                    onMouseLeave={this.handleMouse(false)}>
                    <label>
                        <input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
                        <span>{name}</span>
                    </label>
                    <button onClick={() => this.handleDelete(id)} className="btn btn-danger"
                            style={{display: mouse ? 'block' : 'none'}}>Delete
                    </button>
                </li>
            </div>
        );
    }
}
