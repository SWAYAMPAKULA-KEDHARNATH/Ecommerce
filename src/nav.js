import React, { useState } from 'react'
import { FaTruckMoving } from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsBagCheck } from 'react-icons/bs';
import { AiOutlineUser } from 'react-icons/ai';
import { CiLogin } from 'react-icons/ci';
import { CiLogout } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import './nav.css'
const Nav = ({searchbtn}) => {
    const [search, setSearch] = useState()
    const { loginWithRedirect, logout, user, isAuthenticated} = useAuth0();
    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };

    const handleSearchClick = () => {
        searchbtn(search);}
  return (
    <>
    <div className='free'>
            <div className='icon'>
            <FaTruckMoving /> 
            </div>
            <p>FREE Shipping when shopping upto ₹1000</p>
    </div>
    <div className='main_header'>
        <div className='container' style={{ paddingBottom: 0, marginBottom: 0 }}>
            <div className='logo'>
                <img src='./img/logo.jpg' alt='logo'></img>
            </div>
            <div className='search_box'>
                <input type='text' value={search} placeholder='Search Your Product...' autoComplete='off' onChange={handleSearchChange}></input>
                <button onClick={handleSearchClick}>Search</button>
            </div>
            <div className='icon'>
                {
                    isAuthenticated &&
                    (
                        <div className='account'>
                        <div className='user_icon'>
                        <AiOutlineUser />
                        </div>
                        <p>Hello, {user.name}</p>
                    </div>
                    )
                }
                <div className='second_icon'>
                <Link to="/" className='link'><AiOutlineHeart /></Link>
                <Link to="/cart" className='link'><BsBagCheck /></Link>
                </div>
            </div>
        </div>
    </div>
    <div className='header'>
        <div className='container'>
            <div className='nav'>
            <ul>
                <li>
                    <Link to='/' className='link'>Home</Link>
                </li>
                <li>
                    <Link to='/product'className='link'>Product</Link>
                </li>
                <li>
                    <Link to='/about'className='link'>About</Link>
                </li>
                <li>
                    <Link to='/contact'className='link'>contact</Link>
                </li>
            </ul>
            </div>
           
        </div>
    </div>
    </>
  )
}

export default Nav
