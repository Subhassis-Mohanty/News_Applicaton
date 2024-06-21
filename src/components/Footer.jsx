import React from 'react'

const Footer = () => {
  return (
    <div className='container-fluid d-flex pt-5 pb-4 bg-dark text-white  justify-content-center aline-items-center'>
      
      <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-3">
            <h5>About Us</h5>
            <p>
              Welcome to NewsPulse, your reliable source for the latest news and in-depth analysis from around the world. Our dedicated team of experienced journalists and editors work tirelessly to bring you timely and accurate news on politics, business, technology, sports, entertainment, and more. At NewsPulse, we believe in the power of informed citizens and strive to provide you with the information you need to stay ahead in today’s fast-paced world. Thank you for choosing NewsPulse as your trusted news provider.
            </p>
          </div>
          <div className="col-md-3 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white">Home</a></li>
              <li><a href="/" className="text-white">About</a></li>
              <li><a href="/" className="text-white">Contact</a></li>
              <li><a href="/" className="text-white">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="col-md-3 mb-3">
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white">Facebook</a></li>
              <li><a href="/" className="text-white">Twitter</a></li>
              <li><a href="/" className="text-white">Instagram</a></li>
              <li><a href="/" className="text-white">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
            <p className="mb-0">&copy; 2024 NewsPulse. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer