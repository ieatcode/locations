import React from "react";
import {Col, Row} from "antd";
import PropTypes from 'prop-types'

const LocationForm = ({onSubmit, register, handleSubmit, errors, location}) => {
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <label>Location</label>
          <input type="hidden" name="id" defaultValue={location.id || 0}
                 ref={register()}/>
          <input className="ant-input" name="location" defaultValue={location.location}
                 ref={register({required: true})}/>
          {errors.location && <p className="ant-alert-error">This is required.</p>}
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <label>Description</label>
          <input className="ant-input" name="description" defaultValue={location.description}
                 ref={register({required: true})}/>
          {errors.description && <p className="ant-alert-error">This is required.</p>}
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <button className="ant-btn ant-btn-primary" type="submit">Save</button>
        </Col>
      </Row>
    </form>
  )
}

LocationForm.propTypes = {
  register: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default LocationForm
