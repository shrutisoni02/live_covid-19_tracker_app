import React,{ useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
// import axios from 'axios';
import "./statewise.css";
import { useState } from 'react';


const StateWise = () => {
  const[data,setData] = useState([]);

  const getCovidData = async () => {
    const res =  await fetch("https://data.covid19india.org/data.json");
    const actualData = await res.json();
    console.log(actualData.statewise);
    setData(actualData.statewise)
  };
   useEffect(() => {
    getCovidData();
  },[]);
  return (
    <>
       <div className='container-fluid mt-5'>
      <div className='main-heading'>
        <h1 className='mb-5 text-center' ><span className='font-weight-bold'>INDIA</span> COVID-19 DASHBOARD</h1>
      </div>

      <div className='table-responsive'>
        <table className='table table-hover'>
          <thead className='table-dark'>
            <tr>
              <th>State</th>
              <th>Confirmed</th>
              <th>recovered</th>
              <th>death</th>
              <th>active</th>
              <th>Updated</th>
            </tr>
          </thead>
          <tbody>
          {
            data.map((currElem,indx) => {
              return(
              <tr key = {indx}>
                <td>{currElem.state}</td>
                <td>{currElem.confirmed}</td>
                <td>{currElem.recovered}</td>
                <td>{currElem.deaths}</td>
                <td>{currElem.active}</td>
                <td>{currElem.lastupdatedtime}</td>
            </tr>
              );
            })
          }
          </tbody>
        </table>
      </div>
      </div>
    </>
  );
}

export default StateWise;
