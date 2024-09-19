import React from 'react';
import { Breadcrumb } from "react-bootstrap";
// import './BreadCrumb.css'
import './breadCrumb.css'
import { Link } from 'react-router-dom';
function CustomBreadCrumb({ pageTitle }) {
  return (

    <div className="header">
      <div className='container'>
        <span className='PageName' >{pageTitle}</span>
        <Breadcrumb className="custom-breadcrumb">
          <Breadcrumb.Item>
            <Link className="breadcrumb-link" to='/'>Home</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item className="active-item" active>
            {pageTitle}
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
    </div>
  );
}

export default CustomBreadCrumb;
