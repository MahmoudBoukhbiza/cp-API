import React from 'react'
import { Table } from 'react-bootstrap';



const UserList = ({ users }) => {
    return (
        <div>
            <Table striped bordered hover>
                <tr>
                    <th style={{width:'5%'}}>ID</th>
                    <th style={{width:'20%'}}>Name</th>
                    <th style={{width:'20%'}}>UserName</th>
                    <th style={{width:'20%'}}>e-mail</th>
                    <th style={{width:'20%'}}>City</th>
                </tr>
            </Table>
            {users?.map((e) => (
            <Table striped bordered hover>
                <tr>
                    <th style={{width:'5%'}}>{e.id}</th>
                    <th style={{width:'20%'}}>{e.name}</th>
                    <th style={{width:'20%'}}>{e.username}</th>
                    <th style={{width:'20%'}}>{e.email}</th>
                    <th style={{width:'20%'}}>{e.address.city}</th>
                </tr>
            </Table>
      ))}

        </div>
    )
}

export default UserList;
