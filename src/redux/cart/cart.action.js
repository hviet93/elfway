export const addCart = item => {
    return ({
        type: 'add_cart',
        payload: item
    })
}
