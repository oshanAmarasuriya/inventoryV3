import React from 'react'
import { formatDate } from '../utils/formatDate';
const TableReport = (props) => {
    const {details} = props;
    
    if(details.length===0){
        return (
        
        <div className="container text-center p-5">
        <p className="display-6 ">No records found!</p>
        </div>)
    }
console.log(details);
  return (
    <div className="mt-2">
        <table className="table table-primary ">
          <thead>
            <tr>
              <th>Check-in-out ID</th>
              <th>Resource ID</th>
              <th>Resource Name</th>
              <th>User ID</th>
              <th>Lab name</th>
              <th>Status</th>
              <th>Check-out date time</th>
              <th>Due date time</th>
              <th>Check-in datetime</th>
            </tr>
          </thead>
          <tbody>
            {details.map((item) => (
              <tr key={item.check_in_out_id}>
                <td>{item.check_in_out_id}</td>
                <td>{item.resource_id}</td>
                <td>{item.name}</td>
                <td>{item.user_id}</td>
                <td>{item.lab_name}</td>
                <td>{item.status}</td>
                <td>{formatDate(item.check_out_datetime)}</td>
                <td>{formatDate(item.due_datetime)}</td>
                <td>{formatDate(item.check_in_datetime)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      
      
    </div>
  );
}

export default TableReport