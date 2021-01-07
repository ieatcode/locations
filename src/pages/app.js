import React, {Fragment, Suspense, useEffect} from 'react';
import {Row} from 'react-bootstrap';
import Preloader from '../components/preloader';
import {useDispatch} from "react-redux";
import locationSlice from "../shared/reducers/location.slice";

const App = () => {
  const dispatch = useDispatch()
  const {getList} = locationSlice.actions

  useEffect(() => {
    dispatch(getList())
  }, [])

  return (
    <Fragment>
      <Suspense fallback={<Preloader/>}>
        <Row>
          Locations
        </Row>
      </Suspense>
    </Fragment>
  )
}

export default App