import "./ResPageBox.scss";
import "./ResPage.scss";
import Slider from "./Slider";
import Footer from "./Footer";
import { useQuery } from "react-query";
import { apiClient } from "../../Data/apiclient";
import { Container } from "reactstrap";
import Filters from "./Filters";
import AddRestaurantButton from "./AddRestaurantButton";
import { UserData } from "../../Globals";
import CookingLoader from "./../Loaders/CookingLoader";
import ResCard from "./ResCard";

export default function ResPage() {
  const q = useQuery({
    queryKey: ["getAllresturant"],
    cacheTime: 3 * 60000, //3 minutes
    enabled: true,
    queryFn: async () => {
      let url = "/getAllresturant";

      var ret = await apiClient.get(url);
      console.log("restaurants", ret.data);

      return ret;
    },
  });
  if (q.isLoading) {
    return (
      <>
        <CookingLoader />
      </>
    );
  }

  if (q.data)
    return (
      <>
        {/* <style
          type="text/css"
          dangerouslySetInnerHTML={{
            __html:
              ".vue-star-rating-star[data-v-34cbeed1]{display:inline-block}.vue-star-rating-pointer[data-v-34cbeed1]{cursor:pointer}.vue-star-rating[data-v-34cbeed1]{display:flex;align-items:center}.vue-star-rating-inline[data-v-34cbeed1]{display:inline-flex}.vue-star-rating-rating-text[data-v-34cbeed1]{margin-top:7px;margin-left:7px}.vue-star-rating-rtl[data-v-34cbeed1]{direction:rtl}.vue-star-rating-rtl .vue-star-rating-rating-text[data-v-34cbeed1]{margin-right:10px;direction:rtl}",
          }}
        /> */}
        <section className="">
          <Slider />
          <Container style={{ width: "85%" }}>
            {/* Old navbar with search */}
            {/* <div className="bg-danger">
          <Header />
        </div> */}
          </Container>
          {/* NavBar & Loader*/}
          {/* <MainCards /> */}
          <div className="mt-5 ">
            <div id="app" className="">
              <div id="page-content" className="page-content ">
                <div className="container ">
                  {UserData.value.role == "ADMIN" && (
                    <div>
                      <AddRestaurantButton />
                    </div>
                  )}

                  {/* select-res-page */}
                  {/* row */}
                  <div className="select-res-page">
                    {/* col-xs-16 */}
                    <div className="">
                      <h2 className="inline-block my-4">
                        Restaurants
                        <p style={{ display: "inline", fontSize: "17px" }}>
                          ( 1074 )
                        </p>
                      </h2>
                    </div>
                    <div
                    // id="rest-list-col"
                    // col-sm-13 col-xs-16
                    // className="delivery-rest-list "
                    >
                      <div className="row">
                        <div className="col-sm-12 col-md-2">
                          <Filters />
                        </div>

                        <div className="col-sm-12 col-md-10">
                          <div className="row">
                            {!q.isLoading &&
                              Array.isArray(q.data?.data) &&
                              q.data.data.map((data, index) => (
                                <div className="col-md-6" key={index}>
                                  <ResCard
                                    id={data._id}
                                    name={data.ResName}
                                    ResImg={data.ResImg}
                                    MealImg={data.MealImg}
                                    start1={data.rating}
                                  />
                                </div>
                              ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Footer />
        </section>
      </>
    );
}
