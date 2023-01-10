import { ActionType } from "../action-type";

interface SearchRepisitoriesAction {
  type: ActionType.SEARCH_REPOSITORIES
}

interface SearchRepisitoriesSuccessAction {
  type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
  payload: string[]
}

interface SearchRepisitoriesErrorAction {
  type: ActionType.SEARCH_REPOSITORIES_ERROR,
  payload: string
}

export type Action = SearchRepisitoriesAction | SearchRepisitoriesSuccessAction | SearchRepisitoriesErrorAction