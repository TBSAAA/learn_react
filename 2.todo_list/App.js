import React, {Component} from 'react';
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";

import './App.css'


export default class App extends Component {
    // Where is the state, where is the method of operation

    //initialization status
    state = {
        todos: [
            {id: '001', name: 'eat', done: true},
            {id: '002', name: 'sleep', done: true},
            {id: '003', name: 'write code', done: false},
            {id: '004', name: 'find job', done: false}
        ]
    }

    //addTodo is used to add a todo, and the received parameter is a todo object
    addTodo = (todoObj) => {
        //Get original todos
        const {todos} = this.state
        //Append a todo
        const newTodos = [todoObj, ...todos]
        //update status
        this.setState({todos: newTodos})
    }

    updateTodo = (id, done) => {
        const {todos} = this.state
        const newTodos = todos.map((todoObj) => {
            if (todoObj.id === id) return {...todoObj, done: done}
            return todoObj
        })
        this.setState({todos: newTodos})
    }

    deleteTodo = (id)=>{
        const {todos} = this.state
        const newTodos=todos.filter((todoObj)=>{
            return todoObj.id !== id
        })
        this.setState({todos: newTodos})
    }

    checkAll=(done)=>{
        const {todos} = this.state
        const newTodos=todos.map((todoObj) => {
            return {...todoObj, done: done}
        })
        this.setState({todos: newTodos})
    }

    clearAllDone=()=>{
        const {todos} = this.state
        const newTodos=todos.filter((todoObj)=>{
            return todoObj.done === false
        })
        this.setState({todos: newTodos})
    }

    render() {
        const {todos} = this.state
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addTodo={this.addTodo}/>
                    <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
                    <Footer todos={todos} checkAll={this.checkAll} clearAllDone={this.clearAllDone}/>
                </div>
            </div>
        );
    }
}
