const store = {
    // getItems from local storage
    getItems(){
      const todoList = JSON.parse(window.localStorage.getItem('todo'));
      const doneList = JSON.parse(window.localStorage.getItem('done'));
      const selectedTags = JSON.parse(window.localStorage.getItem('selectedTags'));
      return {todoList, doneList, selectedTags}
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
    setSelectedTags(newTag){
        const updatedTagList = JSON.parse(window.localStorage.getItem('selectedTags')) || [];
        updatedTagList.push(newTag);
        window.localStorage.setItem('selectedTags',JSON.stringify(updatedTagList));
    },
    getTags(){
        return JSON.parse(window.localStorage.getItem('tags'));
    },
    // update tag hashmap
    updateTags(tagname, itemhash){
        let tagHashMap = JSON.parse(window.localStorage.getItem('tags'));
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
        window.localStorage.setItem('tags', JSON.stringify(tagHashMap))
    }
}

export default store