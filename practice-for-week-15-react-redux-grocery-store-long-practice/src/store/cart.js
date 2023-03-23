const POPULATE = 'cart/POPULATE'


export default function cartReducer(state = {}, action) {
    // Object.freeze(state)
    
    switch (action.type) {
        case POPULATE:
            const newState = {}
            action.produce.forEach(produce => {
                newState[produce.id] = produce;
            })
            return newState
        default:
            return state
    }
}


export const populateCart = () => {
    // debugger
    return {
        type: POPULATE,
        produce: produceData
    }
}