
import React from 'react';

import { useQuery } from "react-query";

import { apiClient } from "../../Data/apiclient";
import Card from '../Card/Card';
export default function MedoTest(){


    function switchResponsiveCollapse() {
        //reponsiveNavbarCollapsed.value = !reponsiveNavbarCollapsed.value;
      }

      
      const q = useQuery({
        queryKey: [],
        // cacheTime: 60000000,
        // staleTime: 60000000,
        queryFn: async () => {
        let url = "/getcards";

        var ret = await apiClient.get(url, {text: "Backend test"});

        return ret;
        },
    });

    console.log("query data",q.data?.data);

    return( 

        <>
        {q.data?.data?.map((item, index) => {
            return <Card key={index} name={item.name} rating={item.rating}/>
        })}
        </>
    //     <>
    //     <Navbar
    //         className="navbar navbar-top fixed-top navbar-expand "
    //         id="navbarDefault"
    //     >
    //         <div className="collapse navbar-collapse justify-content-between">
    //         <Navbar.Toggle
    //             aria-controls="basic-navbar-nav"
    //             className="btn navbar-toggler navbar-toggler-humburger-icon hover-bg-transparent"
    //             onClick={switchResponsiveCollapse}
    //         >
    //             <span className="navbar-toggle-icon">
    //             <span className="toggle-line"></span>
    //             </span>
    //         </Navbar.Toggle>

    //         <div className="navbar-logo">
    //             <Link href="/" className="navbar-brand me-1 me-sm-3">
    //             <div className="d-flex align-items-center">
    //                 <div className="d-flex align-items-center">
    //                 <p className="logo-text ms-2 d-none d-sm-block">DineMe</p>
    //                 </div>
    //             </div>
    //             </Link>
    //         </div>

    //         <Navbar.Collapse
    //             id="basic-navbar-nav"
    //             className="justify-content-center"
    //         >
    //             <div className="search-box navbar-top-search-box d-none d-lg-block">
    //             <SearchDropdown />

    //             </div>
    //         </Navbar.Collapse>


    //         <Nav>


    //             <ThemeController></ThemeController>


    //             <div className= {`d-flex justify-content-center align-items-center`} style={{cursor:"pointer", paddingRight: "12px" , userSelect:"none"}}>
    //             <Link to={"emails"} style={{color: "currentColor"}}>
    //             </Link>
    //             </div>


    //             <NotificationMenu></NotificationMenu>

    //             {/* <NavDropdown
    //             title=" "
    //             id="basic-nav-dropdown"
    //             align="start"
    //             className="waffle-icon rounded-circle avatar avatar-l nav-dropdown  "
    //             >
    //             <Nav.Link onClick={() => fnLogout()} className="px-3">
    //                 Logout
    //             </Nav.Link>
    //             </NavDropdown> */}
    //         </Nav>
    //         </div>
    //   </Navbar>
    //     </>
    )

}