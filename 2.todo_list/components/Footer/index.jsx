import React, {Component} from 'react';
import './index.css'
import PropTypes from "prop-types";

export default class Footer extends Component {


    static propTypes = {
        checkAll:PropTypes.func.isRequired,
        clearAllDone:PropTypes.func.isRequired,
    }
    handleCheckAll=()=>{
        return (event)=>{
            this.props.checkAll(event.target.checked)
        }
    }

    clearCompletedTasks=()=>{
        return ()=>{
            this.props.clearAllDone()
        }
    }

    render() {
        const {todos} = this.props
        const completed = todos.reduce((pre, current) => {
            return pre + (current.done ? 1 : 0)
        }, 0)
        const total = todos.length
        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" onChange={this.handleCheckAll()} checked={completed === total && total !== 0}/>
                </label>
                <span>
					<span>{completed}</span> / {total}
				</span>
                <button onClick={this.clearCompletedTasks()} className="btn btn-danger">Clear completed tasks</button>
            </div>
        )
    }
}
