const initialState = [
{
    id:0,
    note:"React project",
    description:"This project is pending",
},
{
    id:1,
    note:"To do list",
    description:"In this project Redux used as localstorage",
},
];
const contactReducer = (state = initialState,action)=>{
    switch(action.type){
            case "ADD_CONTACT":
              state = [...state, action.payload];
              return state;
              case "UPDATE_CONTACT":
                const updateState = state.map(contact=> contact.id === action.payload.id? action.payload:contact);
                state = updateState;
                return state;
                case "DELETE_CONTACT":
                    const filterCotacts = state.filter(contact=>contact.id !== action.payload && contact);
                    state = filterCotacts;
                    return state;
        default:
            return state;
    }
};
export default contactReducer;