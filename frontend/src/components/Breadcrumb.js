import React from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { useNavigate } from 'react-router-dom';


const EBreadcrumb = ({title1,title2,url}) => {

    const navigate = useNavigate()

    return (
        <Breadcrumb>
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          {title2?
            <>
                <Breadcrumb.Item onClick={()=> navigate(url)}>
                    {title1}
                </Breadcrumb.Item>
                <Breadcrumb.Item active>{title2}</Breadcrumb.Item>
           </>:
                <Breadcrumb.Item active>
                    {title1}
                </Breadcrumb.Item>}
         
        </Breadcrumb>
      );
}

export default EBreadcrumb