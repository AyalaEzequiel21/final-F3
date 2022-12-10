
export const SwitchTheme = (state, action) => {
  switch(action.type){
    case 'LIGHT':
        return{theme: "light"}
    case 'DARK': 
        return{theme: "dark"}
    default: 
        throw new Error()
  };
}

export const favsReducer = (state, action) => {
    switch(action.type){
        case 'ADD_FAVS':
            return [...state, action.payload]
        case 'REMOVE_ALL':
            return [action.payload]
        default: 
            throw new Error()
    };
  }

export const initialState = {theme: "light"}
export const initialFavsState = []