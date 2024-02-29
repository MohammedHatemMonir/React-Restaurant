
import React from 'react';

import { useQuery } from "react-query";

import { apiClient } from "../../Data/apiclient";
import StarIcon from '../../Icons/StarIcon';
import LocationArrowIcon from '../../Icons/LocationArrowIcon';
import LocationDotIcon from '../../Icons/LocationDotIcon';
import PhoneIcon from '../../Icons/PhoneIcon';
import ClockIcon from '../../Icons/ClockIcon';
import Day2DayIcon from '../../Icons/Day2DayIcon';
import Card from '../Card/Card';
import MealCard from '../SelectedResPage/MealCard';
import Reviews from '../Reviews/Reviews';
import Stars from '../Stars/Stars';
import { Container } from 'react-bootstrap';
import RightArrowIcon from '../../Icons/RightArrowIcon';
export default function MedoTest(){

  const q = useQuery({
    queryKey: [],
    // cacheTime: 60000000,
    // staleTime: 60000000,
    queryFn: async () => {
      let url = "/getcards";

      var ret = await apiClient.get(url, { text: "Backend test" });

      return ret;
    },
  });

  console.log("query data", q.data?.data);

  return (
   <>
    <div id="page-content restaurant-container" className="page-content">

    <div className="restaurant-cover active-on-menu-tab  menu-tab-activated">
        <img
            src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/e7a942a5-9893-4587-8ece-07b967e44745.jpg"
            alt="cover photo"
            onerror="this.onerror=null;this.src='/public/img/default-cover.png';"
        />
    </div>


    <div className="container">
        <div className="row section separator restaurant-details-section active-on-menu-tab  menu-tab-activated">
                <div className="section-header col-sm-12">
                    <div className="restaurant-image-container"><div className="restaurant-image image-ratio ratio-square"><img src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/9a48939b-f7b2-4232-b2e0-c3e2ea588103.jpg" alt="Munch &amp; Shake" className="v-center" /></div></div>
               
                    <div className="resturant-info-container">
                        <div className="header-content-container"> 
                        <div className="content">
                            <div className="resturant-name">
                                            <h1 className="title">
                                            Munch &amp; Shake<span className="green">Order online</span></h1>
                            </div>
                            <div className="subheader">
                                <div className="tags-rate-container"> 
                                    <div className="rate-container">
                                        <div className="rest-rate"> 
                                            <div data-v-34cbeed1="" className="vue-star-rating">
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />

                                            </div>

                                        </div>
                                    </div>
                                    <ul className="cuisines-list h-dots-list"><li className="list-item">
                                            American
                                            </li></ul>
                                </div>
                                <div className="info-item">
                                        <span className="info-icon">
                                            <svg viewBox="0 0 15 20">
                                            <LocationDotIcon />
                                            </svg>
                                        </span>{" "}
                                        <p className="info-value">
                                            Tivolli Dome, Omar Ibn Khattab St ( Delivery Only )
                                            <a href="/cairo/delivery/heliopolis" className="address-link">
                                            Almaza, Heliopolis
                                            </a>{" "}
                                            <a
                                            href="/cairo/munch-shake-my54k/heliopolis-yv4k3/branches"
                                            aria-controls="reviews-tab"
                                            role="tab"
                                            className="side-margin more-btn"
                                            >
                                            +3 more
                                            </a>
                                        </p>
                                        </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                {/* <div className="col-sm-4 restaurant-actions"> <span><a className="circular-btn"> <PhoneIcon /> </a></span></div> */}

            
        </div>
            <div className="row"> 
                <div className="col-sm-8 col-sm-push-8">
                    {/* <div className="section delivery-info-section"></div> */}
                </div>
                <div className="tabs-header col-sm-8 col-sm-pull-8">
                        <div className="nav nav-tabs">
                            <ul id="restaurant-tabs-nav" role="tablist">
                            <li role="presentation" className="tab-btn menu-tab-btn active false">
                                <h2>
                                <a
                                    aria-controls="reviews-tab"
                                    role="tab"
                                >
                                    Menu
                                </a>
                                </h2>
                            </li>{" "}
                            <li role="presentation" className="tab-btn false">
                                <h2>
                                <a
                                    aria-controls="info-tab"
                                    role="tab"
                                >
                                    About
                                </a>
                                </h2>
                            </li>{" "}
                            <li role="presentation" className="tab-btn false">
                                <h2>
                                <a
                                    aria-controls="reviews-tab"
                                    role="tab"
                                >
                                    Branches
                                </a>
                                </h2>
                            </li>{" "}
                            <li role="presentation" className="tab-btn false">
                                <h2>
                                <a
                                    aria-controls="reviews-tab"
                                    role="tab"
                                >
                                    Reviews
                                </a>
                                </h2>
                            </li>
                            </ul>
                        </div>

                        <div className="info-items-group"> 
                        
                        <span className="info-item positive">
                            <span className="icon info-icon"><Day2DayIcon /></span></span> 

                            <div className="info-item text-center">
                                <span className="icon info-icon"><ClockIcon /></span>  
                                
                                    12:00 PM-02:00 AM
                                
                            </div></div>
                        </div>
                    </div>


                <div class="row"> 
                    <div class="col-sm-12 col-xs-16 main-content">
                        <div class="section tabs-section restaurant-tabs-section "> 
                            <div class="tabs-body"> 
                                <div class="tab-content no-padding">
                                    <div role="tabpanel" id="menu-tab" class="tab-pane restaurant-menu-tab active"> 
                                        <div>
                                            <div>
                                                <div class="row"> 
                                                    <div class="tab-content no-padding">

                                                        <div class="container d-flex"> 
                                                            <div class="col-3 p-0 border-right"> 

                                                                            <ul  className="menu-cats p-0">
                                                                                <li className="cat ">
                                                                                    <a  className="scroll-to-div">
                                                                                    Offers
                                                                                    <span className="arrow-right">
                                                                                        <RightArrowIcon />
                                                                                    </span>
                                                                                    </a>
                                                                                </li>{" "}
                                                                                <li className="cat">
                                                                                    <a  className="scroll-to-div">
                                                                                    Top Dishes
                                                                                    </a>
                                                                                </li>{" "}
                                                                                <li className="cat">
                                                                                    <a  className="scroll-to-div">
                                                                                    Value Meals

                                                                                    </a>
                                                                                </li>
                                                                                <li className="cat">
                                                                                    <a  className="scroll-to-div">
                                                                                    Munchies

                                                                                    </a>
                                                                                </li>
                                                                                <li className="cat">
                                                                                    <a  className="scroll-to-div">
                                                                                    Beef &amp; Dogs
                    
                                                                                    </a>
                                                                                </li>
                                                                                <li className="cat">
                                                                                    <a  className="scroll-to-div">
                                                                                    Chicken Sandwiches
                    
                                                                                    </a>
                                                                                </li>
                                                                                <li className="cat">
                                                                                    <a  className="scroll-to-div">
                                                                                    Vegan Sandwiches

                                                                                    </a>
                                                                                </li>
                                                                            </ul>

                                                                        </div>


                                                                        <div class="col-6"> 
                                                                        {/* ibrahimmmm start here*/}
                                                                                <Container style={{width: "50vh"}}>
                                                                                    <TempMealCard />
                                                                                    <TempMealCard />

                                                                                </Container>
                                                                        </div>
                                                                        <div class="col-3"> 
                                                                                <Reviews />
                                                                        </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    </div>
   </>
  );
}

function TempMealCard(){

    return(<>
    
    <div>

          <div
            className="bg-[white] shadow-lg rounded-lg overflow-hidden my-3 hover:cursor-pointer hover:bg-[#ccc]"
            key="1"
          >
            <img
              src="../../utils/meals-img/item-1.jpeg"
              alt="meal-img"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">Title</h3>
              <p className="text-gray-600 mb-4">Desc</p>
              <div className="flex justify-between items-center">
                <div>
                  <del className="text-gray-500">$20</del>
                  <p className="text-red-600 text-lg font-semibold">
                    $1231
                  </p>
                </div>
                <div className="flex items-center">
                  <button
                    className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full mr-2"
                    
                  >
                    -
                  </button>
                  <button
                    className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full mr-2"
                   
                  >
                    +
                  </button>
                  <div className="-mt-[55px]">
                    <Stars stars1="5" />
                    
                  </div>
                  
                </div>
                <input
                  type="button"
                  className="btn"
                  value="Buy"
                />
              </div>
            </div>
          </div>
        </div>
    
    </>);
}