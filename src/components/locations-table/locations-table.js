import React, {useEffect} from 'react'
import {Button, Col, message, Popconfirm, Row, Table} from "antd";
import {useDispatch, useSelector} from "react-redux";
import PropTypes from 'prop-types'
import locationSlice from "../../shared/reducers/location.slice";
import {locationColumns} from "../../shared/constants/location-columns.constant";

const LocationsTable = ({showManageLocationModal, closeManageLocationModal, setSelectedLocation}) => {
  const dispatch = useDispatch()
  const {getList, deleteLocation, resetStatus} = locationSlice.actions
  const {locationList, status} = useSelector(state => state.locations)
  const {submitted, loading, success, type} = status

  useEffect(() => {
    dispatch(getList())
  }, [])

  const editLocation = (data) => {
    setSelectedLocation(data)
    showManageLocationModal()
  }

  const handleDelete = (data) => {
    dispatch(deleteLocation(data))
  }
  const handleStatus = () => {
    if (submitted && !loading) {
      switch (type) {
        case 'addLocation' :
          if (success) {
            message.success('Location Successfully Added')
            dispatch(getList())
            closeManageLocationModal()
          } else {
            message.error('Location Failed to Add')
          }
          break
        case 'updateLocation' :
          if (success) {
            message.success('Location Successfully Updated')
            dispatch(getList())
          } else {
            message.error('Location Failed to Update')
          }
          break
        case 'deleteLocation' :
          if (success) {
            message.success('Location Successfully Deleted')
            dispatch(getList())
          } else {
            message.error('Location Failed to Delete')
          }
          break
        default:
        //
      }
    }
  }

  useEffect(() => {
    handleStatus()
    return resetStatus()
  }, [status])

  const columns = [
    ...locationColumns,
    {
      title: 'Action',
      key: 'description',
      render: (text, record) => {
        return (
          <Row gutter={5}>
            <Col>
              <Button size="small" onClick={() => editLocation(record)}>Edit</Button>
            </Col>
            <Col>
              <Popconfirm title="Are you sure？" okText="Yes" cancelText="No" onConfirm={() => handleDelete(record)}>
                <Button size="small">Delete</Button>
              </Popconfirm>
            </Col>
          </Row>
        )
      }
    },
  ];

  return (
    <div>
      <Table dataSource={locationList} rowKey="id" columns={columns} loading={loading && type === 'getList'}/>
    </div>
  )
}

LocationsTable.propTypes = {
  showManageLocationModal: PropTypes.func.isRequired,
  closeManageLocationModal: PropTypes.func.isRequired,
  setSelectedLocation: PropTypes.func.isRequired,
}

export default LocationsTable