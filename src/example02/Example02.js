import React, { useEffect, useState, useContext } from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import axios from 'axios';
import { object } from 'prop-types';
const API_URL = 'https://jsonplaceholder.typicode.com/todos/';


function Example02() {

  const [data, setData] = useState();


  function getData() {
    axios.get(API_URL).then(response => {
      if (response.status === 200) {
        console.log(response);

        setData(response.data);
      }
      else {
        console.log(
          "eroooooor"
        )
      }

    })

  }

  useEffect(() => {
    getData();
  }, [])

  useEffect(() => {
    console.log("dataaaaaaaa", data)
  }, [data])

  return (
    <>
      {data &&
        <Table >
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((person , index)=> {
                return(
                <tr  >
                  <th scope="row"key={index} >{person.userId}</th>
                  <td key={index} >{person.userId}</td>
                  <td key={index} >{person.title}</td>
                  <td key={index} >{person.completed === true ? "farideh" : "omid"}</td>
                </tr>
                )
              })
            }

          </tbody>
        </Table>
      }

    </>
  );
}

export default Example02;