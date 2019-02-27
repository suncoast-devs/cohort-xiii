import React, { Component } from 'react'

class AddItemForm extends Component {
  render() {
    return (
      <form className="add-form" onSubmit={this.props.addItemToApi}>
        <input
          type="text"
          id="newItem"
          placeholder="Add TODO"
          value={this.props.newItemText}
          onChange={this.props.updateStateWithNewItem}
        />
        <button>
          <i className="fas fa-plus" />
          ADD
        </button>
      </form>
    )
  }
}

export default AddItemForm
