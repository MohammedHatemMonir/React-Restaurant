// import "./SideBar.scss";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser, faCog, faSignOutAlt, faThLarge, faLock, faUserPlus, faBell } from '@fortawesome/free-solid-svg-icons';
// import { faGridAlt, faLayout } from '@fortawesome/free-solid-svg-icons';

// const SideBar = () => {
//   return (
//     <div className="my-sidebar">
//       <div className="wrapper">
//         <aside id="sidebar">
//           <div className="d-flex">
//             <button className="toggle-btn" type="button">
//               <FontAwesomeIcon icon={faGridAlt} />
//             </button>
//             <div className="sidebar-logo">
//               <a href="#">CodzSword</a>
//             </div>
//           </div>
//           <ul className="sidebar-nav">
//             <li className="sidebar-item">
//               <a href="#" className="sidebar-link">
//                 <FontAwesomeIcon icon={faUser} />
//                 <span>Profile</span>
//               </a>
//             </li>
//             <li className="sidebar-item">
//               <a href="#" className="sidebar-link">
//                 <FontAwesomeIcon icon={faThLarge} />
//                 <span>Task</span>
//               </a>
//             </li>
//             <li className="sidebar-item">
//               <a
//                 href="#"
//                 className="sidebar-link collapsed has-dropdown"
//                 data-bs-toggle="collapse"
//                 data-bs-target="#auth"
//                 aria-expanded="false"
//                 aria-controls="auth"
//               >
//                 <FontAwesomeIcon icon={faLock} />
//                 <span>Auth</span>
//               </a>
//               <ul
//                 id="auth"
//                 className="sidebar-dropdown list-unstyled collapse"
//                 data-bs-parent="#sidebar"
//               >
//                 <li className="sidebar-item">
//                   <a href="#" className="sidebar-link">
//                     Login
//                   </a>
//                 </li>
//                 <li className="sidebar-item">
//                   <a href="#" className="sidebar-link">
//                     Register
//                   </a>
//                 </li>
//               </ul>
//             </li>
//             <li className="sidebar-item">
//               <a
//                 href="#"
//                 className="sidebar-link collapsed has-dropdown"
//                 data-bs-toggle="collapse"
//                 data-bs-target="#multi"
//                 aria-expanded="false"
//                 aria-controls="multi"
//               >
//                 <FontAwesomeIcon icon={faLayout} />
//                 <span>Multi Level</span>
//               </a>
//               <ul
//                 id="multi"
//                 className="sidebar-dropdown list-unstyled collapse"
//                 data-bs-parent="#sidebar"
//               >
//                 <li className="sidebar-item">
//                   <a
//                     href="#"
//                     className="sidebar-link collapsed"
//                     data-bs-toggle="collapse"
//                     data-bs-target="#multi-two"
//                     aria-expanded="false"
//                     aria-controls="multi-two"
//                   >
//                     Two Links
//                   </a>
//                   <ul
//                     id="multi-two"
//                     className="sidebar-dropdown list-unstyled collapse"
//                   >
//                     <li className="sidebar-item">
//                       <a href="#" className="sidebar-link">
//                         Link 1
//                       </a>
//                     </li>
//                     <li className="sidebar-item">
//                       <a href="#" className="sidebar-link">
//                         Link 2
//                       </a>
//                     </li>
//                   </ul>
//                 </li>
//               </ul>
//             </li>
//             <li className="sidebar-item">
//               <a href="#" className="sidebar-link">
//                 <FontAwesomeIcon icon={faBell} />
//                 <span>Notification</span>
//               </a>
//             </li>
//             <li className="sidebar-item">
//               <a href="#" className="sidebar-link">
//                 <FontAwesomeIcon icon={faCog} />
//                 <span>Setting</span>
//               </a>
//             </li>
//           </ul>
//           <div className="sidebar-footer">
//             <a href="#" className="sidebar-link">
//               <FontAwesomeIcon icon={faSignOutAlt} />
//               <span>Logout</span>
//             </a>
//           </div>
//         </aside>
//       </div>
//     </div>
//   );
// };

// export default SideBar;
