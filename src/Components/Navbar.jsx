

import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {

    const [open, setOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const { pathname } = useLocation();

    const menuList = [
        { title: 'Home', path: '/' },
        {title: 'Service', path:'/service'},
        {title: 'Contact', path:'/service'},
        { title: 'About Us', path: '/about' },
        // {
        //     title: 'Pages',
        //     // path: '/blogs',
        //     icon: <ChevronDown className="inline w-4 h-4 ml-1" />,
        //     submenu: [
        //         { title: 'Shop', path: '/blogs/shop' },
        //         { title: 'Cart', path: '/blogs/cart' },
        //         { title: 'Team', path: '/blogs/team' },
        //         { title: 'Review', path: '/blogs/review' },
        //         { title: 'Load More', path: '/blogs/loadMore' },

        //     ],
        // },
    
    ];


    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-6 lg:px-12 py-4 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="flex items-center">
                    <img className="w-40 md:w-48" src={'/Group 169.svg'} alt="Logo" />
                </Link>

                {/* Hamburger menu icon for mobile */}
                <div className="lg:hidden" onClick={() => setOpen(!open)}>
                    {!open ? <Menu className="w-6 h-6 text-primary" /> : <X className="w-6 h-6 text-primary" />}
                </div>

                {/* Menu items */}
                <ul
                    className={`lg:flex items-center  gap-8 text-xl absolute lg:static bg-white lg:bg-transparent w-full lg:w-auto left-0 lg:left-auto transition-all duration-300 ease-in-out ${open ? 'top-20 p-6 lg:p-0' : '-top-96'
                        }`}
                >
                    {menuList.map((item, index) => (
                        <li
                            key={index}
                            className={`relative ${item.path === pathname ? 'text-primary font-bold' : 'text-black'} text-lg lg:my-0 my-2`}
                            onMouseEnter={() => item.submenu && setDropdownOpen(true)}
                            onMouseLeave={() => item.submenu && setDropdownOpen(false)}
                        >
                            <Link to={item.path} className="flex items-center hover:text-primary transition duration-200">
                                {item.title}
                                {item.icon && item.icon}
                            </Link>

                            {/* Dropdown menu for Pages */}
                            {item.submenu && dropdownOpen && (
                                <ul className="absolute left-0 mt-2 bg-white shadow-lg border rounded-lg w-48 text-black z-10">
                                    {item.submenu.map((subItem, subIndex) => (
                                        <li key={subIndex} className="px-4 py-2 hover:bg-primary hover:text-white transition duration-200">
                                            <Link to={subItem.path}>{subItem.title}</Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}

                    {/* Login and Cart buttons */}
                    <li className="flex items-center gap-4 mt-4 lg:mt-0 lg:ml-4">


                        <div className="dropdown dropdown-end">


                            <button
                                className="cursor-pointer text-white font-bold relative text-[14px] w-[9em] h-[3em] text-center bg-gradient-to-r from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90% bg-[length:400%] rounded-[30px] z-10 hover:animate-gradient-xy hover:bg-[length:100%] before:content-[''] before:absolute before:-top-[5px] before:-bottom-[5px] before:-left-[5px] before:-right-[5px] before:bg-gradient-to-r before:from-violet-500 before:from-10% before:via-sky-500 before:via-30% before:to-pink-500 before:bg-[length:400%] before:-z-10 before:rounded-[35px] before:hover:blur-xl before:transition-all before:ease-in-out before:duration-[1s] before:hover:bg-[length:10%] active:bg-violet-700 focus:ring-violet-700"
                            >
                                Log In
                            </button>
                        </div>




                    </li>
                </ul>
            </div>
        </nav>
    );
}
