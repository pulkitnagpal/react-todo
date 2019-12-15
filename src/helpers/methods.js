import global from '../Global';
export const extractTags = (str) => {
    return str.split(" ").filter((word) => word[0] === '#')
}

export const filterWithTags = (list, selectedtags) => {
    const tagMap = global.store.getTags();
    let updatedList = [];
    let commonListHash = [];
    commonListHash = tagMap[selectedtags[0]];
    for(let i=1; i<selectedtags.length; i++){
        const arr2 = tagMap[selectedtags[i]];
        commonListHash = arr2.filter((value) => commonListHash.indexOf(value) !== -1);
    }
    updatedList = list.filter((value) => commonListHash.indexOf(value.hash) !== -1);
    // update the item list and return
    return updatedList;
}   