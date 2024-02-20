import React, { useEffect, useState } from 'react';
import './Sidebar.css';
import { toggle } from '../../Globals';

export default function Sidebar() {
  const [activeParentItem, setActiveParentItem] = useState(null);
  const [activeSubItem, setActiveSubItem] = useState(null);
  const [activeColor, setActiveColor] = useState(null);

  const handleIndicator = (e, isParent) => {
      setActiveColor(e.target.getAttribute('active-color'));
      if (isParent) {
          setActiveParentItem(e.target);
      } else {
          setActiveSubItem(e.target);
      }
  };

  useEffect(() => {
    const handleResize = () => {
        setActiveParentItem(document.querySelector('.nav-item-parent.is-active'));
        setActiveSubItem(document.querySelector('.nav-item-sub.is-active'));
    };

    window.addEventListener('resize', handleResize);

    return () => {
        window.removeEventListener('resize', handleResize);
    };
}, []);


    return (
        <>
            <div className={`d-flex ${toggle.value && "toggled"}`} id="wrapper">
                {/* Sidebar */}
                <div className="bg-dark border-right" id="sidebar-wrapper">
                    <div className="sidebar-heading text-light">eCRM Dashboard</div>
                    <div className="list-group list-group-flush">
                        <a href="#" className="list-group-item list-group-item-action bg-dark text-light">Table</a>
                        <div className="nav-container ml-1 mr-1">
                            <div className="parent-nav table-nav row">
                                <a href="#" className="nav-item nav-item-parent is-active col" active-color="DarkTurquoise" onClick={(e) => handleIndicator(e, true)}>Clone</a>
                                <a href="#" className="nav-item nav-item-parent col" active-color="DarkTurquoise" onClick={(e) => handleIndicator(e, true)}>Upgrade</a>
                                <span className="nav-indicator-parent" style={{ width: activeParentItem?.offsetWidth, left: activeParentItem?.offsetLeft, backgroundColor: activeColor }} />
                            </div>
                            <div className="sub-nav table-nav row">
                                <a href="#" className="nav-item nav-item-sub is-active col" active-color="DarkTurquoise" onClick={(e) => handleIndicator(e, false)}>Advance</a>
                                <a href="#" className="nav-item nav-item-sub col" active-color="DarkTurquoise" onClick={(e) => handleIndicator(e, false)}>Advise</a>
                                <a href="#" className="nav-item nav-item-sub col" active-color="DarkTurquoise" onClick={(e) => handleIndicator(e, false)}>Recruit</a>
                                {activeSubItem && (<span className="nav-indicator-sub" style={{ width: activeSubItem.offsetWidth, left: activeSubItem.offsetLeft, backgroundColor: activeColor }} />
)}                            </div>
                        </div>
                        <a href="#" className="list-group-item list-group-item-action bg-dark text-light">Refresh</a>
                        <a href="#" className="list-group-item list-group-item-action bg-dark text-light">Format</a>
                    </div>
                </div>
                ttttt
            </div>
            {/* /#wrapper */}
        </>
    );
}