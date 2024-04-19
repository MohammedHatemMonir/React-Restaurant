export default function HemaTest() {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
      />

      <header className=" header">
        <a href="#" className=" logo">
          <i className=" fas fa-utensils" /> food
        </a>
        <nav className=" navbar">
          <a href="#home">home</a>
          <a href="#about">about</a>
          <a href="#popular">popular</a>
          <a href="#menu">menu</a>
          <a href="#order">order</a>
          <a href="#blogs">blogs</a>
        </nav>
        <div className=" icons">
          <div id="menu-btn" className=" fas fa-bars" />
          <div id="search-btn" className=" fas fa-search" />
          <div id="cart-btn" className=" fas fa-shopping-cart" />
          <div id="login-btn" className=" fas fa-user" />
        </div>
      </header>
      {/* header section ends  */}
      {/* search-form  */}
      {/* shopping-cart section  */}
      <section className="shopping-cart-container">
        <div className=" products-container">
          <h3 className=" title">your products</h3>
          <div className=" box-container">
            <div className=" box">
              <i className=" fas fa-times" />
              <img src="image/menu-1.png" alt="" />
              <div className="content">
                <h3>delicious food</h3>
                <span> quantity : </span>
                <input type="number" name="" defaultValue={1} id="" />
                <br />
                <span> price : </span>
                <span className=" price"> $40.00 </span>
              </div>
            </div>
            <div className=" box">
              <i className=" fas fa-times" />
              <img src="image/menu-2.png" alt="" />
              <div className=" content">
                <h3>delicious food</h3>
                <span> quantity : </span>
                <input type="number" name="" defaultValue={1} id="" />
                <br />
                <span> price : </span>
                <span className=" price"> $40.00 </span>
              </div>
            </div>
            <div className=" box">
              <i className=" fas fa-times" />
              <img src="image/menu-3.png" alt="" />
              <div className=" content">
                <h3>delicious food</h3>
                <span> quantity : </span>
                <input type="number" name="" defaultValue={1} id="" />
                <br />
                <span> price : </span>
                <span className=" price"> $40.00 </span>
              </div>
            </div>
            <div className=" box">
              <i className=" fas fa-times" />
              <img src="image/menu-4.png" alt="" />
              <div className=" content">
                <h3>delicious food</h3>
                <span> quantity : </span>
                <input type="number" name="" defaultValue={1} id="" />
                <br />
                <span> price : </span>
                <span className=" price"> $40.00 </span>
              </div>
            </div>
            <div className=" box">
              <i className=" fas fa-times" />
              <img src="image/menu-5.png" alt="" />
              <div className=" content">
                <h3>delicious food</h3>
                <span> quantity : </span>
                <input type="number" name="" defaultValue={1} id="" />
                <br />
                <span> price : </span>
                <span className=" price"> $40.00 </span>
              </div>
            </div>
          </div>
        </div>
        <div className=" cart-total ">
          <h3 className=" title"> cart total </h3>
          <div className=" box">
            <h3 className=" subtotal">
              subtotal : <span>$200</span>
            </h3>
            <h3 className=" total">
              total : <span>$200</span>
            </h3>
            <a href="#" className=" btn">
              proceed to checkout
            </a>
          </div>
        </div>
      </section>
      {/* home section starts  */}
      <section className=" home" id="home">
        <div className=" content">
          <span>Welcome To Dine Me</span>
          <h3>different spices for the different tastes 😋</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis unde
            dolores temporibus hic quam debitis tenetur harum nemo.
          </p>
          <a href="#" className=" btn">
            order now
          </a>
        </div>
        <div className=" image">
          <img src="image/home-parallax-img.png" alt="" className=" home-img" />
          <img
            src="image/home-parallax-img.png"
            alt=""
            className=" home-parallax-img"
          />
        </div>
      </section>
      {/* home section ends  */}
      {/* category section starts  */}
      <section className=" category">
        <a href="#" className=" box">
          <img src="image/home-parallax-img.png" alt="" />
          <h3>combo</h3>
        </a>
        <a href="#" className=" box">
          <img src="image/cat-2.png" alt="" />
          <h3>pizza</h3>
        </a>
        <a href="#" className=" box">
          <img src="image/cat-3.png" alt="" />
          <h3>burger</h3>
        </a>
        <a href="#" className=" box">
          <img src="image/cat-4.png" alt="" />
          <h3>chicken</h3>
        </a>
        <a href="#" className=" box">
          <img src="image/cat-5.png" alt="" />
          <h3>dinner</h3>
        </a>
        <a href="#" className=" box">
          <img src="image/cat-6.png" alt="" />
          <h3>coffee</h3>
        </a>
      </section>
      {/* category section ends */}
      {/* about section starts  */}
      <section className=" about" id="about">
        <div className=" image">
          <img src="image/about-img.png" alt="" />
        </div>
        <div className=" content">
          <span>why choose us?</span>
          <h3 className=" title">what's make our food delicious!</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ut
            explicabo, numquam iusto est a ipsum assumenda tempore esse
            corporis?
          </p>
          <a href="#" className=" btn">
            read more
          </a>
          <div className=" icons-container">
            <div className=" icons">
              <img src="image/serv-1.png" alt="" />
              <h3>fast delivery</h3>
            </div>
            <div className=" icons">
              <img src="image/serv-2.png" alt="" />
              <h3>fresh food</h3>
            </div>
            <div className=" icons">
              <img src="image/serv-3.png" alt="" />
              <h3>best quality</h3>
            </div>
            <div className=" icons">
              <img src="image/serv-4.png" alt="" />
              <h3>24/7 support</h3>
            </div>
          </div>
        </div>
      </section>
      {/* Slider Here */}

      {/* order section ends */}
      {/* blogs section starts  */}
      <section className=" blogs" id="blogs">
        <div className=" heading">
          <span>our blogs</span>
          <h3>our daily stories</h3>
        </div>
        <div className=" box-container">
          <div className=" box">
            <div className=" image">
              <h3>
                <i className=" fas fa-calendar" /> 21st may, 2021
              </h3>
              <img src="image/blog-1.jpg" alt="" />
            </div>
            <div className=" content">
              <div className=" tags">
                <a href="#">
                  <i className=" fas fa-tag" /> food /
                </a>
                <a href="#">
                  <i className=" fas fa-tag" /> burger /
                </a>
                <a href="#">
                  <i className=" fas fa-tag" /> pizza
                </a>
              </div>
              <h3>blog title goes here...</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem,
                earum.
              </p>
              <a href="#" className=" btn">
                read more
              </a>
            </div>
          </div>
          <div className=" box">
            <div className=" image">
              <h3>
                <i className=" fas fa-calendar" /> 21st may, 2021
              </h3>
              <img src="image/blog-2.jpg" alt="" />
            </div>
            <div className=" content">
              <div className=" tags">
                <a href="#">
                  <i className=" fas fa-tag" /> food /
                </a>
                <a href="#">
                  <i className=" fas fa-tag" /> burger /
                </a>
                <a href="#">
                  <i className=" fas fa-tag" /> pizza
                </a>
              </div>
              <h3>blog title goes here...</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem,
                earum.
              </p>
              <a href="#" className=" btn">
                read more
              </a>
            </div>
          </div>
          <div className=" box">
            <div className=" image">
              <h3>
                <i className=" fas fa-calendar" /> 21st may, 2021
              </h3>
              <img src="image/blog-3.jpg" alt="" />
            </div>
            <div className=" content">
              <div className=" tags">
                <a href="#">
                  <i className=" fas fa-tag" /> food /
                </a>
                <a href="#">
                  <i className=" fas fa-tag" /> burger /
                </a>
                <a href="#">
                  <i className=" fas fa-tag" /> pizza
                </a>
              </div>
              <h3>blog title goes here...</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem,
                earum.
              </p>
              <a href="#" className=" btn">
                read more
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
