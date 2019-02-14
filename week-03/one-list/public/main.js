const API_URL = `https://one-list-api.herokuapp.com/items?access_token=cohort-xiii`

// Classes
// build a class to represent a list item
class ListItem {
  constructor (data) {
    this.text = data.text
    this.id = data.id
  }
}

// build a class to represent the list
class TodoList {
  constructor () {
    this.list = []
  }

  render () {
    // this is where we update the HTML
    const parent = document.querySelector('.todo-list')
    // remove all the items
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild)
    }
    // add all the items from the property this.list
    this.list
      .map(item => {
        // create the HTML for an list item
        const span = document.createElement('span')
        span.textContent = item.text
        span.addEventListener('click', () => {
          markItemAsComplete(item)
        })
        if (item.complete) {
          span.classList.add('completed-item')
        }
        const icon = document.createElement('i')
        icon.classList.add('far')
        icon.classList.add('fa-trash-alt')
        const btn = document.createElement('button')
        btn.appendChild(icon)
        btn.addEventListener('click', () => {
          deleteItem(item)
        })
        const li = document.createElement('li')
        const section = document.createElement('section')
        section.appendChild(span)
        section.appendChild(btn)
        li.appendChild(section)
        return li
      })
      .forEach(li => {
        parent.appendChild(li)
      })
  }
}
// Events

// page load event
const main = () => {
  // do a fetch to API
  fetch(API_URL)
    .then(resp => resp.json())
    .then(list => {
      TODO_LIST.list = list
      // diplay my list items using a render function
      TODO_LIST.render()
    })
}

// delete an item from the API/UI
const deleteItem = itemToDelete => {
  // calling the API to delete the item
  fetch(
    `https://one-list-api.herokuapp.com/items/${
      itemToDelete.id
    }?access_token=cohort-xiii`,
    {
      method: 'DELETE'
    }
  ).then(resp => {
    // removing the item from object, and the HTML
    TODO_LIST.list = TODO_LIST.list.filter(item => item.id !== itemToDelete.id)
    TODO_LIST.render()
  })
}

const markItemAsComplete = item => {
  // toggle an item's completin status, this is so the itsm status can be toggled by the user
  item.complete = !item.complete
  // update on the server
  fetch(
    `https://one-list-api.herokuapp.com/items/${
      item.id
    }?access_token=cohort-xiii`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        item: {
          complete: item.complete
        }
      })
    }
  ).then(resp => {
    if (resp.status >= 300) {
      console.log('something went wrong')
    } else {
      // Update the UI on success
      TODO_LIST.render()
    }
  })
}

// create  mesthod that shows a message then hides it after 3 seconds
const showErrorMessage = message => {
  const output = document.querySelector('.output')
  output.textContent = message
  setTimeout(() => {
    output.textContent = ''
  }, 3000)
}

// adds an item to the API
const addItem = event => {
  event.preventDefault()
  const newItemToAdd = document.querySelector('#newItem').value
  // only adds the new item if the item is something (a truthy value)
  if (newItemToAdd) {
    fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        item: {
          text: newItemToAdd
        }
      })
    })
      .then(resp => resp.json())
      .then(listItem => {
        TODO_LIST.list.push(new ListItem(listItem))
        // update the list in the HTML
        TODO_LIST.render()
      })
  } else {
    showErrorMessage('Task cannot be blank')
  }
}

const TODO_LIST = new TodoList()
document.querySelector('.add-form').addEventListener('submit', addItem)
document.addEventListener('DOMContentLoaded', main)
