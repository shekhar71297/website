import React from 'react';
import { Breadcrumb } from "react-bootstrap";
import './breadCrumb.css';
import { Link } from 'react-router-dom';

function CustomBreadCrumb({ pageTitle }) {
  return (
    <div className="header">
      <div className='container'>
        <span className='PageName'>{pageTitle}</span>
        <Breadcrumb className="custom-breadcrumb">
          <Breadcrumb.Item  linkAs={Link} linkProps={{ to: '/' }}>
            <span className='breadcrumb-link' >Home</span>
          </Breadcrumb.Item>
          <Breadcrumb.Item active>
            {pageTitle}
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
    </div>
  );
}

export default CustomBreadCrumb;
