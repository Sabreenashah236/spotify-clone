export const initialState ={ 
  user:null,
  playlists:[],
  playing:false,
  item:null,
  //token:"BQBIHck6csBTfN65AnarKdF-VGVShOawJQDNf8OpzPwkA3aT0zjrwgebq4ioBpOGngoJvsBPXxLdbyJnT7JbXsfZzSh0YKLBPY_edEZiWA5E3DKDJYPQl-UWuzZVckvPciaSZwICiwydYiOzOD2ivl_hlTXQuqgUCYIlVq2X93D6Dcru4BQu"
};
const reducer = (state,action) => {

    console.log(action);

    switch (action.type) {

        case "SET_USER": 

        return {
             ...state,
             user:action.user,
        };

        case "SET_TOKEN":

        return {
            ...state,
            token:action.token
        };

        case "SET__PLAYLISTS":
           return {
             ...state,
             playlists:action.playlists,
           };

           case "SET_DISCOVER_WEEKLY":
          return {
        ...state,
        discover_weekly: action.discover_weekly,
      };


        default:
            return state;

    }

}
export default reducer;