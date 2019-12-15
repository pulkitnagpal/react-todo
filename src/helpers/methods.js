import global from '../Global';
export const extractTags = (str) => {
    return str.split(" ").filter((word) => word[0] === '#')
}

export const filterWithTags = (list, selectedtags) => {
    const tagMap = global.store.getTags();
    let updatedList = [];
    for (let i=0; i<selectedtags.length; i++){
        const tag = selectedtags[i];
        const hashItemList = tagMap[tag];
        for (let j=0; j<hashItemList.length; j++){
            const itemhash = hashItemList[j];
            const item = list.find((listItem) => listItem.hash === itemhash);
            if (item){
                updatedList.push(item)
            }
        }
    }
    return updatedList;
}   