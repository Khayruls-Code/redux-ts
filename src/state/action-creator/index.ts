import { ActionType } from "../action-type";
import { Action } from "../action";
import { Dispatch } from "redux";
import axios from "axios";

export const searchRepositories = (terms: string) => {
  return async (dispatch:Dispatch<Action>) => {
    dispatch({
      type: ActionType.SEARCH_REPOSITORIES
    })
    try{
      const {data} = await axios.get('https://registry.npmjs.org/-/v1/search', {
        params: {
          text: terms
        }
      })
      const names = data.objects.map((result:any) => {
        return result.package.name
      })
      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
        payload: names
      })
    }catch(err:any){
      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_ERROR,
        payload: err.message
      })
    }
  }
}