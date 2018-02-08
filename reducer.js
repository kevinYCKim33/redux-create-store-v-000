//GENERIC WAY REDUCERS AND ACTION COMBINE TO UPDATE THE STATE
function createStore(reducer) {
  let state;
  //state now accessible to dispatch

  function dispatch(action){
    state = reducer(state, action)
    render()
  }

  function getState(){
    return state;
  }

  dispatch({ type: '@@INIT'})

  return {
    dispatch,
    getState
  };
}

//APP SPECIFIC FUNCTIONS
function changeCount(state = {count: 0}, action){
    switch (action.type) {
      case 'INCREASE_COUNT':
        return {count: state.count + 1}
      default:
        return state;
    }
  }

function render(){
  let container = document.getElementById('container')
  container.textContent = store.getState().count;
}

let button = document.getElementById('button');
let store = createStore(changeCount);

button.addEventListener('click', function(){
  store.dispatch({type: 'INCREASE_COUNT'})
})
