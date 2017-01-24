'use strict'

import * as types from './ActionTypes';


export let HomeAction = () => {

    return dispatch => {
        dispatch(startFetchDataList());

        setTimeout(function() {
            dispatch(receivedDataList(true,'这是一段请求成功后的描述！'));
        }, 5000);

    }
}

let startFetchDataList = () => {
    return {
        type: types.HOME_PAGE_STATUS.START_LOADING,
    };
}

let receivedDataList = (successed,desc) => {
    if (successed)
        return {
            type: types.HOME_PAGE_STATUS.SUCCESS,
            content:desc,
        }
    else
        return {
            type: types.HOME_PAGE_STATUS.FAILURE,
            content:desc,
        }
}