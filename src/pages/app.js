import React, {Fragment, Suspense, useState} from 'react';
import {Row} from 'react-bootstrap';
import Preloader from '../components/preloader';
import LocationsTable from '../components/locations-table'
import {Button, Col} from "antd";
import LocationModal from "../components/manage-location";

const App = () => {
  const [isShowManageLocationModal, setIsShowManageLocationModal] = useState(false)
  const [selectedLocation, setSelectedLocation] = useState({})
  const showManageLocationModal = () => {
    setIsShowManageLocationModal(true)
  }
  const closeManageLocationModal = () => {
    setSelectedLocation({})
    setIsShowManageLocationModal(false)
  }
  return (
    <Fragment>
      <Suspense fallback={<Preloader/>}>
        <Row style={{marginBottom: 20}}>
          <Col span={24}>
            Locations
            <Button type="primary" style={{float: 'right'}} onClick={showManageLocationModal}>
              Add Location
            </Button>
          </Col>
        </Row>
        <Row>
          <LocationModal isVisible={isShowManageLocationModal} onClose={closeManageLocationModal} location={selectedLocation}/>
          <LocationsTable {...{showManageLocationModal, closeManageLocationModal, setSelectedLocation}} />
        </Row>
      </Suspense>
    </Fragment>
  )
}

export default App