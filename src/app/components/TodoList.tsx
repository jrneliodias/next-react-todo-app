import React from 'react'



export default function TodoList() {
  return (
    <div className='content-center'>
      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
   
        <th>Name</th>
        <th>Job</th>
     
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr className="hover">
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
      </tr>
     
    </tbody>
  </table>
</div>
    </div>
  )
}
