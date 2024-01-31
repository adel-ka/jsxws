import { MDBFooter } from 'mdb-react-ui-kit'
import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";

const Fotter = () => {
  return (
    <div>
         <MDBFooter bgColor='light' className='text-center text-lg-left'>
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
    <FaFacebookSquare />
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-dark' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
    </div>
  )
}

export default Fotter