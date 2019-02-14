const API_URL = `https://one-list-api.herokuapp.com/items?access_token=cohort-xiii`

// Classes
class ListItem {
  constructor(data) {
    this.text = data.text
    this.id = data.id
  }
}

class TodoList {
  constructor() {
    this.list = []
  }

  render() {
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
        if (item.complete) {
          span.classList.add('completed-item')
        }
        const icon = document.createElement('i')
        icon.classList.add('far')
        icon.classList.add('fa-trash-alt')
        const btn = document.createElement('button')
        btn.appendChild(icon)
        const li = document.createElement('li')
        const section = document.createElement('section')
        section.addEventListener('click', () => {
          markItemAsComplete(item)
        })
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
const main = () => {
  // do a fetch to API
  // diplay my list items
  fetch(API_URL)
    .then(resp => resp.json())
    .then(list => {
      TODO_LIST.list = list
      TODO_LIST.render()
    })
}

const markItemAsComplete = item => {
  item.complete = !item.complete
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
      TODO_LIST.render()
    }
  })
}

const addItem = event => {
  event.preventDefault()
  const newItemToAdd = document.querySelector('#newItem').value
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
}

const TODO_LIST = new TodoList()
document.querySelector('.add-form').addEventListener('submit', addItem)
document.addEventListener('DOMContentLoaded', main)
