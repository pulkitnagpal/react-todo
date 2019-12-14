const store = {
    // getItems from local storage
    getItems(){
      const todoList = JSON.parse(window.localStorage.getItem('todo'))
      const doneList = JSON.parse(window.localStorage.getItem('done'));
      return {todoList, doneList}
    },
    // update local storage based on item's status
    updateItems(newList, type){
        if (type === 'todo'){
            window.localStorage.setItem('todo',JSON.stringify(newList))
        }
        else{
            window.localStorage.setItem('done', JSON.stringify(newList))
        }
    }
}

export default store