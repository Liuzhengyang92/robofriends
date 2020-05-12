import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from './constants';

interface IStateSearch{
  readonly searchField: string
}

const initialStateSearch: IStateSearch = {
  searchField: ''
};

export const searchRobots = (state=initialStateSearch, action: any) => {
  switch(action.type) {
    case CHANGE_SEARCH_FIELD:
      return { ...state, searchField: action.payload };
    default:
      return state;
  }
};

export interface IRobot {
  name: string,
  email: string,
  id: number
}

interface IStateRobots {
  readonly isPending: boolean,
  readonly robots: IRobot[]
  readonly error: string
}

const initialStateRobots: IStateRobots = {
  isPending: false,
  robots: [],
  error: ''
};

export const requestRobots = (state=initialStateRobots, action: any) => {
  switch(action.type) {
    case REQUEST_ROBOTS_PENDING:
      return { ...state, isPending: true };
      // return Object.assign({}, state, { isPending: true })
    case REQUEST_ROBOTS_SUCCESS:
      return { ...state, robots: action.payload, isPending: false };
      // return Object.assign({}, state, { robots: action.payload, isPending: false })
    case REQUEST_ROBOTS_FAILED:
      return { ...state, error: action.payload, isPending: false };
    default:
      return state;
  }
};

export interface IRootReducerState {
  readonly searchRobots: IStateSearch,
  readonly requestRobots: IStateRobots,
}
