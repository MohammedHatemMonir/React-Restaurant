import React from "react";
import { Card, Button } from "react-bootstrap";

import { useState, useRef, useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
// import moment from "moment";
import { useSignal } from "@preact/signals-react";

const NotificationMenu = (props) => {
  const imageUrl = `https://img-thumb.chameleoni.com/?type=CL0&uid=23423432423`;

  //PLaceholder Image

  //We can replace <a> </a> with anything that links to other pages, It does not affect the style at all.

  // console.log("Notification Data", data);

  function NotificationItem(props) {
    return (
      <div
        key={props.index}
        index={props.index}
        className="px-2 px-sm-3 py-3 border-300 notification-card position-relative unread border-bottom"
      >
        <div className="d-flex align-items-center justify-content-between position-relative">
          <div className="d-flex">
            <div className="avatar avatar-m status-online me-3">
              {" "}
              {/** Change Online Icon here! */}
              <img className="rounded-circle" src={imageUrl} alt="" />
            </div>

            <div className="flex-1 me-sm-3">
              <h4 className="fs--1 text-black">{props.name}</h4>
              <p className="fs--1 text-1000 mb-2 mb-sm-3 fw-normal">
                <span className="me-1 fs--2">💬</span>
                {props.content}
                <span className="ms-2 text-400 fw-bold fs--2">10m</span>
              </p>
              <p className="fs--1 mb-0 d-flex align-items-center">
                <span>
                  {" "}

                </span>
                <span className="fw-bold"> </span>{" "}
                {moment(props.date).format("Do[-]MMMM[-]YYYY")}
              </p>
            </div>
          </div>
          <div className="font-sans-serif d-none d-sm-block">
            <Dropdown>
              <Dropdown.Toggle
                className=" dropdown-caret-none"
                style={{ padding: "0" }}
                variant="custom"
              >
              </Dropdown.Toggle>

              <Dropdown.Menu className="dropdown-menu dropdown-menu-end py-2">
                <Dropdown.Item> Clear</Dropdown.Item>
                <Dropdown.Item> Snooze 5 min</Dropdown.Item>
                <Dropdown.Item> Snooze 1 hour</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
    );
  }

  const isOpen = useSignal(false);

  const dropdownRef = useRef(null);

  useEffect(() => {
    // Add event listener to the document to handle clicks outside the dropdown
    function handleDocumentClick(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        // Click occurred outside the dropdown, so close it
        isOpen.value = false;
      }
    }

    document.addEventListener("click", handleDocumentClick);

    return () => {
      // Remove the event listener when the component unmounts
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  const toggleDropdown = () => {
    isOpen.value = !isOpen.value;
  };

  const closeDropdown = () => {
    isOpen.value = false;
  };

  return (
    <>
      {/* */}
      <Dropdown
        show={isOpen.value}
        onToggle={toggleDropdown}
        className="d-flex justify-content-center align-items-center"
      >
        <Dropdown.Toggle
          variant="custom"
          className="dropdown-caret-none "
          style={{ padding: "0px", paddingLeft: "0px", paddingRight: "20px" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="0px"
            height="16px"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-bell"
            style={{ height: "20px", width: "20px" }}
          >
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
          </svg>
        </Dropdown.Toggle>

        <Dropdown.Menu
          className="dropdown-menu dropdown-menu-end notification-dropdown-menu py-0 shadow border border-300 navbar-dropdown-caret  responsive-dropdown"
          style={{ width: "389px", marginRight: "13.25px" }}
        >
          <Card className="position-relative border-0">
            <Card.Header className="card-header p-2">
              <div className="d-flex justify-content-between">
                <h5 className="text-black mb-0">Notifications</h5>
                <a className="btn btn-link p-0 fs--1 fw-normal">
                  Mark all as read
                </a>
              </div>
            </Card.Header>
            <Card.Body className="card-body p-0">
              <div
                className="scrollbar-overlay"
                style={{ height: "27rem" }}
                data-simplebar="init"
              >
                <div className="simplebar-wrapper" style={{ margin: "0px" }}>
                  <div className="simplebar-height-auto-observer-wrapper">
                    <div className="simplebar-height-auto-observer"></div>
                  </div>
                  <div className="simplebar-mask">
                    <div
                      className="simplebar-offset"
                      style={{ right: "0px", bottom: "0px" }}
                    >
                      <div
                        className="simplebar-content-wrapper"
                        tabIndex="0"
                        role="region"
                        aria-label="scrollable content"
                        style={{ height: "100%", overflow: "hidden scroll" }}
                      >
                        <div
                          className="simplebar-content"
                          style={{ padding: "0px" }}
                        >
                          <div className="border-300">
                            {/* repeating content of thedropdown menu */}


                            {/* End repeating content of thedropdown menu */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card.Body>

            <Card.Footer className="p-0 border-top border-0">
              <div className="my-2 text-center fw-bold fs--2 text-600">
                <Link to="alerts" className="fw-bolder" onClick={closeDropdown}>
                  Notification history
                </Link>
              </div>
            </Card.Footer>
          </Card>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default NotificationMenu;
