import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  
    return (
      <div>
                <nav className="navbar navbar-expand-lg fixed-top bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">
            {/* <a className="navbar-brand" href="/">Akhbaar</a> */}
            <Link className="navbar-brand" to="/">Akhbaar</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                {/* <a className="nav-link " aria-current="page" href="/">Home</a> */}
                <Link className="nav-link " aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                {/* <a className="nav-link" href="/business">Business</a> */}
                <Link className="nav-link" to="/business">Business</Link>
                </li>
                <li className="nav-item">
                {/* <a className="nav-link" href="/entertainment">Entertainment</a> */}
                <Link className="nav-link" to="/entertainment">Entertainment</Link>
                </li>
                <li className="nav-item">
                {/* <a className="nav-link" href="/general">General</a> */}
                <Link className="nav-link" to="/general">General</Link>
                </li> <li className="nav-item">
                {/* <a className="nav-link" href="/health">Health</a> */}
                <Link className="nav-link" to="/health">Health</Link>
                </li> <li className="nav-item">
                {/* <a className="nav-link" href="/science">Science</a> */}
                <Link className="nav-link" to="/science">Science</Link>
                </li>
                <li className="nav-item">
                {/* <a className="nav-link" href="/sports">Sports</a> */}
                <Link className="nav-link" to="/sports">Sports</Link>
                </li>
                 <li className="nav-item">
                {/* <a className="nav-link" href="/technology">Technology</a> */}
                <Link className="nav-link" to="/technology">Technology</Link>
                </li>
            </ul>
            
            </div>
        </div>
        </nav>
      </div>
    )
  }

export default NavBar