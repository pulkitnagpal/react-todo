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
    },
    // update tag hashmap
    updateTags(tagname, itemhash){
        let tagHashMap = JSON.parse(window.localStorage.getItem('tag'));
        if (tagHashMap){
            if (tagHashMap[tagname]){
                // simply add new item hash corresponsing to the tag name
                let prevArr = tagHashMap[tagname]
                prevArr.push(itemhash)
                tagHashMap[tagname] = prevArr
            }
            else{
                // initiate the tag name in hash map if not already found
                tagHashMap[tagname] = [itemhash]
            }
        }
        else{
            // if there is no tag in local storage
            tagHashMap = {
                [tagname] : [itemhash]
            }
        }
        window.localStorage.setItem('tag', JSON.stringify(tagHashMap))
    }
}

export default store