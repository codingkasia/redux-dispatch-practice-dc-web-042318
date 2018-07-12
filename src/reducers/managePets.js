export let state;


export function managePets(){
}

export function dispatch(action){
    state = managePets(state, action)
}

export function render(){
    document.innerHTML = state.count

}
dispatch({type: @@INIT})