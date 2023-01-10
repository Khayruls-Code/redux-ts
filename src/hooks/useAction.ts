import {bindActionCreators} from 'redux'
import { actionCreator } from "../state";
import { useDispatch } from "react-redux";

export const useAction = () => {
  const dispatch = useDispatch()
  return bindActionCreators(actionCreator, dispatch)
}