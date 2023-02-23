const selectAllPositions = (state) => {
    return state.positions;
};

const selectVisiblePositions = (state, filters = []) => {
    return filters.length 
        ? state.positions.filter(position => {
            const paramsForFilter = [position.role, position.level, ...position.languages, ...position.tools];
            // console.log(paramsForFilter)
            return filters.every(filter => paramsForFilter.includes(filter))      
        }) 
        : state.positions 
}

export {selectAllPositions, selectVisiblePositions}