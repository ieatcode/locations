import {all, call, put, takeLatest} from 'redux-saga/effects'
import locationSlice from '../reducers/location.slice';
import locationService from "../services/location.service";

const {
  getList,
  getListSuccess,
  getListFailed,
  details,
  detailsSuccess,
  detailsFailed,
  add,
  addSuccess,
  addFailed,
  update,
  updateSuccess,
  updateFailed,
  deleteLocation,
  deleteLocationSuccess,
  deleteLocationFailed
} = locationSlice.actions

function* getListSaga() {
  try {
    const {data} = yield call(locationService.list)
    yield put(getListSuccess(data))
  } catch (error) {
    yield put(getListFailed(error))
  }
}

function* addSaga(action) {
  try {
    const {data} = yield call(locationService.add, action.payload)
    yield put(addSuccess(data))
  } catch (error) {
    yield put(addFailed(error))
  }
}

function* detailsSaga(action) {
  try {
    const {data} = yield call(locationService.details, action.payload)
    yield put(detailsSuccess(data))
  } catch (error) {
    yield put(detailsFailed(error))
  }
}

function* updateSaga(action) {
  try {
    const {data} = yield call(locationService.update, action.payload)
    yield put(updateSuccess(data))
  } catch (error) {
    yield put(updateFailed(error))
  }
}

function* deleteLocationSaga(action) {
  try {
    const {data} = yield call(locationService.delete, action.payload)
    yield put(deleteLocationSuccess(data))
  } catch (error) {
    yield put(deleteLocationFailed(error))
  }
}


export default function* root() {
  yield all([
    takeLatest(getList, getListSaga),
    takeLatest(add, addSaga),
    takeLatest(details, detailsSaga),
    takeLatest(update, updateSaga),
    takeLatest(deleteLocation, deleteLocationSaga),
  ])
}
