
const SET_FORM='SET_FORM'
const SET_OPTION='SET_OPTION'
const SET_ID='SET_ID'
const SET_INIT='SET_INIT'

let initialState = {
      products: [],
      switchOption:'null',
      deleteID:false,

}

const FormReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FORM:return { ...state,products: [...action.state.data]};
    case SET_OPTION:debugger;return { ...state,switchOption:action.option};
    case SET_ID:debugger;return { ...state,deleteID: [...state.deleteID, action.id]};
    case SET_INIT:return(state=initialState);
    default:return { ...state };
  }
};

export const formAC=(state)=>{{return{type:SET_FORM,state}}}
export const switchAC=(option)=>{debugger;{return{type:SET_OPTION,option}}}
export const deleteIdAC=(id)=>{debugger;{return{type:SET_ID,id}}}
export const initAC=()=>{debugger;{return{type:SET_INIT}}}


export default FormReducer;