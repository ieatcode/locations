import React from "react";
import {Modal, Spin} from "antd";
import PropTypes from 'prop-types'
import LocationForm from "./location-form";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import locationSlice from "../../shared/reducers/location.slice";

const LocationModal = ({isVisible, onClose, location}) => {
  const dispatch = useDispatch()
  const {add, update} = locationSlice.actions
  const {status} = useSelector(state => state.locations)

  const handleSubmit = data => {
    if (parseInt(data.id, 10)) {
      dispatch(update(data))
    } else {
      dispatch(add(data))
    }
  }

  const modalTitle = location?.id ? 'Edit Location' : 'Add Location'

  return (
    <Modal title={modalTitle} visible={isVisible} onCancel={onClose} destroyOnClose footer={null}>
      <Spin spinning={status.loading}>
        <LocationForm {...useForm()} {...{location}} onSubmit={handleSubmit}/>
      </Spin>
    </Modal>
  )
}

LocationModal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
}

export default LocationModal
