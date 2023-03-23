import produceData from '../mockData/produce.json'


const POPULATE = 'produce/POPULATE'

export default function produceReducer(state = {}, action) {
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

export const populateProduce = () => {
    // debugger
    return {
        type: POPULATE,
        produce: produceData
    }
}
