import { all, fork } from 'redux-saga/effects'

import locationSaga from './location.saga'

export default function* root() {
    yield all([
        fork(locationSaga)
    ])
}