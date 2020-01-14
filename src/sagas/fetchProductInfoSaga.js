import { put } from "redux-saga/effects";
import { baseApi } from '../API'

export function* fetchProductInfoSaga(productId) {
    yield put({ type: "SET_LOADING", data: true });

    try {
        const resp =  yield fetch(`${baseApi}people/${productId.data}`)
        const respData =   yield resp.json()
        yield put({ type: "DATA_RECEIVED_INFO", infoData: respData });
    } catch (error) {
        yield put({ type: "SET_LOADING", data: false });
        yield put({ type: "IS_ERROR", data: true });
    }
    yield put({ type: "SET_LOADING", data: false });
}