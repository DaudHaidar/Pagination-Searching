import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Button, Nav, Table} from 'react-bootstrap';
import {  useNavigate } from 'react-router-dom';
import EBreadcrumb from '../../components/Breadcrumb';
import './listData.css'
import * as Icon from 'react-bootstrap-icons'
import ReactPaginate from 'react-paginate'

const ListData = () => {

    const [data,setData] = useState([])
    const [pagination,setPagination] = useState({
        page:1,
        pages:0,
        rows:0,
        limit:5,
       
    })
   
    const[keyword,setKeyword]= useState("")
    const[query,setQuery]=useState("")

    const navigate = useNavigate()

    useEffect(()=>{
        const getData = async()=>{
            try {
                const response = await axios.get(`http://localhost:3000/profile?page=${pagination.page}&limit=${pagination.limit}&search_query=${keyword}`)

                setData(response.data.data)
                setPagination({
                    page:response.data.page,
                    pages:response.data.totalPages,
                    rows:response.data.totalRows,
                    limit:response.data.limit
                })

            } catch (error) {
                console.log(error)
            }
        }
        getData()
    },[keyword,pagination.page])

    const handleClick =()=>{
        navigate('/addData')
    }

    const handlePage=({selected})=>{
        setPagination({page:selected+1})
    }

    const handleChange =(e)=>{
        setQuery(e.target.value)
    }

    const handleSearchQuery=(e)=>{
        e.preventDefault
        setKeyword(query)
    }

    

  return (
    <div className='listData p-3'>
        <EBreadcrumb title1={'List'}/>

        <div className='findAndAdd'>
            <Button className='add' onClick={handleClick}>+ Tambah</Button> 
            <div className='findGroup'>
                <input  className='find' placeholder='cari sesuatu disini' type='input' value={query} onChange={handleChange}/>
                <Button variant='secondary' className='search mx-1' onClick={handleSearchQuery}>
                    <Icon.Search></Icon.Search>
                </Button>
            </div>
        </div>

        <Table  className='mt-4' striped bordered hover >
        <thead >
        <tr>
            <th>No</th>
            <th>wanted Job Titte</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Country</th>
            <th>City</th>
            <th>Address</th>
            <th>postal Code</th>
            <th>Driving License</th>
            <th>Nationality</th>
            <th>Place of Birth</th>
            <th>Date of Birth</th>
            <th>Image</th>
        </tr>
        </thead>
        <tbody>
            {data.map((value)=>{
                return(
                    <tr key={value.drivingLicense}>
                        <td>{value.profileCode}</td>
                        <td>{value.wantedJobTitte}</td>
                        <td>{value.firstName}</td>
                        <td>{value.lastName}</td>
                        <td>{value.country}</td>
                        <td>{value.city}</td>
                        <td>{value.address}</td>
                        <td>{value.postalCode}</td>
                        <td>{value.drivingLicense}</td>
                        <td>{value.nationality}</td>
                        <td>{value.placeOfBirth}</td>
                        <td>{value.dateOfBirth}</td>
                        <td>{value.image}</td>
                    </tr>
                )
            })}
        </tbody>
    </Table>
    <div className='paginate'>
        <p>
            Total Rows : {pagination.rows} Page : {pagination.rows ? pagination.page:0} Out of  {pagination.pages}
        </p>
        <Nav className='pagination' role='navigation' aria-label='pagination' >
                <ReactPaginate
                    previousLabel={'<Previous'}
                    nextLabel={'>Next'}
                    pageCount={pagination.pages}
                    onPageChange={handlePage}
                    containerClassName={'pagination-list'}
                    pageLinkClassName={'pagination-link'}
                    nextLinkClassName={'pagination-next'}
                    previousLinkClassName={'pagination-previous'}
                    activeLinkClassName={'pagination-link is-current'}
                    disabledLinkClassName={'pagination-link is-disabled'}
                    
                />
        </Nav>
    </div>
    
  </div>
  )
}

export default ListData