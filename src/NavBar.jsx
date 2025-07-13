import React , { use, useState } from 'react' ;




function NavBar (){

    const [openDropdown, setOpenDropdown] = useState(null);
    const [locked, setLocked] = useState(false); // tracks if it's clicked open

    const handleHover = (name) => {
        if (!locked) setOpenDropdown(name);
    };

    const handleLeave = () => {
        if (!locked) setOpenDropdown(null);
    };

    const handleClick = (name) => {
        if (openDropdown === name && locked) {
            setLocked(false);
            setOpenDropdown(null);
        } else {
            setOpenDropdown(name);
            setLocked(true);
        }
    };


    return (
            <nav className="navbar">
            <div className="full-logo">
                <img src="/icon.svg" alt="logo" className="logo" height={52} />
                <h2>crypteez.com</h2>
            </div>
            <ul>
                <li className="navbarTitle"><h2>Prices</h2></li>
                <li className="list-elmt" 
                        onMouseEnter={() => handleHover('products')}
                        onMouseLeave={handleLeave}>
                    <div className="navbarTitle" onClick={() => handleClick('products')}>
                        <h2>Products</h2><img src="/chevron-down.svg" alt="down" />
                    </div>
                        {openDropdown === 'products' && (
                        <div className="dropdown">
                            <h2 className='dropdown-title'>Buy and Sell</h2>
                            <div className='dropdown-content'>
                                <div className='dropdown-subcontent'>
                                    <h3 className='dropdown-subtitle'>App</h3>
                                    <p className='dropdown-text'>Buy over 250+ Cryptocurrencies right from your phone</p> 
                                </div>
                                <div className='dropdown-subcontent'>
                                    <h3 className='dropdown-subtitle'>App</h3>
                                    <p className='dropdown-text'>Buy over 250+ Cryptocurrencies right from your phone</p> 
                                </div>
                            </div>
                            <h2 className='dropdown-title'>Advanced Trading with Defi</h2>
                            <div className='dropdown-content'>
                                <div className='dropdown-subcontent'>
                                    <h3 className='dropdown-subtitle'>Defi Wallet</h3>
                                    <p className='dropdown-text'>1 App, Multiple Defi Wallets</p> 
                                </div>
                                <div className='dropdown-subcontent'>
                                    <h3 className='dropdown-subtitle'>Defi Wallet</h3>
                                    <p className='dropdown-text'>1 App, Multiple Defi Wallets</p> 
                                </div>
                            </div>
                        </div>
                    )}
                </li>
                <li className="list-elmt" 
                        onMouseEnter={() => handleHover('company')}
                        onMouseLeave={handleLeave}>
                    <div className="navbarTitle" onClick={() => handleClick('company')}>
                        <h2>Company</h2><img src="/chevron-down.svg" alt="down" />
                    </div>
                    {openDropdown === 'company' && (
                        <div className="dropdown">
                            <h2 className='dropdown-title'>About Us</h2>
                            <div className='dropdown-content'>
                                <div className='dropdown-subcontent'>
                                    <h3 className='dropdown-subtitle'>About</h3>
                                    <p className='dropdown-text'>Learn more about our vision, our team, and our purpose</p> 
                                </div>
                                <div className='dropdown-subcontent'>
                                    <h3 className='dropdown-subtitle'>Support</h3>
                                    <p className='dropdown-text'>Get 24/7 Chat Support</p> 
                                </div>
                            </div>
                            <h2 className='dropdown-title'>Opportunities</h2>
                            <div className='dropdown-content'>
                                <div className='dropdown-subcontent'>
                                    <h3 className='dropdown-subtitle'>Careers</h3>
                                    <p className='dropdown-text'>Create Web3 with Us</p> 
                                </div>
                                <div className='dropdown-subcontent'>
                                    <h3 className='dropdown-subtitle'>Partners</h3>
                                    <p className='dropdown-text'>Discover our World Class Partners</p> 
                                </div>
                            </div>
                        </div>
                    )}
                </li>
            </ul>
            <button className="Navbar-button"><h2>Get Started</h2></button>
        </nav>
        
        
        
    )
}

export default NavBar