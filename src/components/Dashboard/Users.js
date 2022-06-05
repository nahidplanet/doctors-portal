
import React from 'react';

const Users = () => {
  return (
    <div>
      <h1 className='text-4xl text-center mb-4'>All Users</h1>
      <div>
      <div class="overflow-x-auto">
  <table class="table w-full">
    {/* <!-- head --> */}
    <thead>
      <tr>
        <th></th>
        <th>Email</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      {/* <!-- row 1 --> */}
      <tr>
        <th>1</th>
        <td>simple@example.com</td>
        <td><button class="btn btn-xs">Make Admin</button></td>
        <td><button class="btn btn-xs">Remove User</button></td>
      </tr>
     
    </tbody>
  </table>
</div>
      </div>
    </div>
  );
};

export default Users;