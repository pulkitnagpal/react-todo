export const extractTags = (str) => {
    return str.split(" ").filter((word) => word[0] === '#')
}