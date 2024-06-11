import React from 'react';
import { Breadcrumb } from "react-bootstrap";
import './BreadCrumb.css'
import { Link } from 'react-router-dom';
function CustomBreadcrumb({ pageTitle }) {
  return (
    
    <div className="header">
        <div className='container'>
      <h3>{pageTitle}</h3>
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

export default CustomBreadcrumb;
