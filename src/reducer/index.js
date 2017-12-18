export default function(state = 1, action){


switch(action.type){
  case "INCRAMENT":
  return state = state + 1

  case "DECRAMENT":
  return state = state - 1
}
  return state

}
