import React, { Component } from 'react';
import AddTask from './AddTask';
import TodoItems from './TodoItems';

class TodoList extends Component {
    inputElement = React.createRef();
    constructor(){
        super();
        this.state = {
            items: [],
            currentItem: { text: '', key: ''}
        }
    }

    addItem = (e) => {
        e.preventDefault();
        const newItem = this.state.currentItem;
        if(newItem.text !== ''){
            const items = [...this.state.items, newItem];
            const currentItem = { text: '', key: ''};
            this.setState({
                items,
                currentItem
            })
        }
    };

    handleInput = (e) => {
        const val = e.target.value;
        const currentItem = { text: val, key: Date.now() };
        this.setState({
                currentItem
        });
    };

    deleteItem = (itemKey) => {
        const items = this.state.items.filter(item => (item.key !== itemKey))
        this.setState({
            items
        });
    };

    render() {
        return(
          <div>
              <h1> TODO APP</h1>
              <AddTask
                  addItem={this.addItem}
                  inputElement={this.inputElement}
                  handleInput={this.handleInput}
                  currentItem={this.state.currentItem}
              />
              <TodoItems
                  items={this.state.items}
                  deleteItem={this.deleteItem}
              />

          </div>
        );
    }
}

export default TodoList;