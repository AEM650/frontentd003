// File: components/Navbar.js
'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    // Remove token from localStorage
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    // Redirect to the home page
    router.push('/signin');
  };

  useEffect(() => {
    // Check for token in localStorage
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    } else {
      router.push('/signin');
    }

    // Add event listener for storage changes
    const handleStorageChange = () => {
      const token = localStorage.getItem('token');
      setIsLoggedIn(!!token);
    };

    window.addEventListener('storage', handleStorageChange);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [router]);



  return (
    <header className="p-3 mb-3 border-bottom">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none">
            <img src="img/Lilac_Cat_Pet_Shops_Logo-removebg-preview.png" alt="" width="50" height="50" className="d-inline-block align-text-top" />
            Long Do
          </a>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li><Link href="/" className="nav-link px-2 link-secondary">Home</Link></li>
            <li><Link href="/about" className="nav-link px-2 link-body-emphasis">About</Link></li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Services
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Service 1</a></li>
                <li><a className="dropdown-item" href="#">Service 2</a></li>
                <li><a className="dropdown-item" href="#">Service 3</a></li>
              </ul>
            </li>
            <li><Link href="/contact" className="nav-link px-2 link-body-emphasis">Contact</Link></li>
          </ul>

          <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
            <input type="search" className="form-control" placeholder="Search..." aria-label="Search"></input>
          </form>

          <div className="dropdown text-end">
            <a href="#" className="d-block link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
              <Image src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle" crossOrigin="anonymous" />
            </a>
            <ul className="dropdown-menu text-small">
              {isLoggedIn ? (
                <>
                  <li><a className="dropdown-item" href="#" onClick={handleLogout}>Sign out</a></li>
                </>
              ) : (
                <>
                  <li><Link href="/signin" className="dropdown-item">Sign in</Link></li>
                  <li><Link href="/signup" className="dropdown-item">Sign up</Link></li>
                </>
              )}
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="#">Profile</a></li>
              <li><a className="dropdown-item" href="#">Settings</a></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
