import React from 'react';
import { Outlet } from 'react-router-dom';
import GlobalNavBar from './GlobalNavBar';


export default function GlobalLayout() {
return(<>
 <main className="main d-flex" id="top" style={{flexDirection: "column", height: "100%"}}>

    <GlobalNavBar />
    <div className="content" style={{flexGrow: "1"}}>
        <Outlet />
    </div>

 </main>


</>)
}