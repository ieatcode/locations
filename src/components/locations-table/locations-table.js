import React from 'react'
import {Table} from "antd";

const LocationsTable = () => {
  return (
    <div>
      <Table dataSource={dataSource} columns={columns}/>
    </div>
  )
}

export default LocationsTable