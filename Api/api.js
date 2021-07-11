import list from './productList.json'

export const fetchData = async() => {
    const productlist = list;
    const result = await JSON.parse(JSON.stringify(productlist))
    return result
}