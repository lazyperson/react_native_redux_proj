import { HOME_PAGE_STATUS} from '../actions/ActionTypes';

const initialState = {
    isLoading: false,
    content:'',
};


export let Home = (state = initialState, action) => {
    switch (action.type) {
        case HOME_PAGE_STATUS.START_LOADING:
            return {
                ...state,
                isLoading: true,
            };
         case HOME_PAGE_STATUS.SUCCESS:
            return {
                ...state,
                isLoading: false,
                content:action.content,
            };
        case HOME_PAGE_STATUS.FAILURE:
            return {
                ...state,
                isLoading: false,
                content:action.content,
            };
        default:
            return state;
    }
}