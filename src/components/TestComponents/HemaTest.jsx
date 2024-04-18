export default function HemaTest() {
  return (
    <div className="text-decoration-none main1 text-decoration-none">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
      />

      <header className="text-decoration-none header">
        <a href="#" className="text-decoration-none logo">
          <i className="text-decoration-none fas fa-utensils" /> food
        </a>
        <nav className="text-decoration-none navbar">
          <a href="#home">home</a>
          <a href="#about">about</a>
          <a href="#popular">popular</a>
          <a href="#menu">menu</a>
          <a href="#order">order</a>
          <a href="#blogs">blogs</a>
        </nav>
        <div className="text-decoration-none icons">
          <div id="menu-btn" className="text-decoration-none fas fa-bars" />
          <div id="search-btn" className="text-decoration-none fas fa-search" />
          <div
            id="cart-btn"
            className="text-decoration-none fas fa-shopping-cart"
          />
          <div id="login-btn" className="text-decoration-none fas fa-user" />
        </div>
      </header>
      {/* header section ends  */}
      {/* search-form  */}
      <section className="text-decoration-none search-form-container">
        <form action="">
          <input
            type="search"
            name=""
            placeholder="search here..."
            id="search-box"
          />
          <label
            htmlFor="search-box"
            className="text-decoration-none fas fa-search"
          />
        </form>
      </section>
      {/* shopping-cart section  */}
      <section className="text-decoration-none shopping-cart-container">
        <div className="text-decoration-none products-container">
          <h3 className="text-decoration-none title">your products</h3>
          <div className="text-decoration-none box-container">
            <div className="text-decoration-none box">
              <i className="text-decoration-none fas fa-times" />
              <img src="image/menu-1.png" alt="" />
              <div className="text-decoration-none content">
                <h3>delicious food</h3>
                <span> quantity : </span>
                <input type="number" name="" defaultValue={1} id="" />
                <br />
                <span> price : </span>
                <span className="text-decoration-none price"> $40.00 </span>
              </div>
            </div>
            <div className="text-decoration-none box">
              <i className="text-decoration-none fas fa-times" />
              <img src="image/menu-2.png" alt="" />
              <div className="text-decoration-none content">
                <h3>delicious food</h3>
                <span> quantity : </span>
                <input type="number" name="" defaultValue={1} id="" />
                <br />
                <span> price : </span>
                <span className="text-decoration-none price"> $40.00 </span>
              </div>
            </div>
            <div className="text-decoration-none box">
              <i className="text-decoration-none fas fa-times" />
              <img src="image/menu-3.png" alt="" />
              <div className="text-decoration-none content">
                <h3>delicious food</h3>
                <span> quantity : </span>
                <input type="number" name="" defaultValue={1} id="" />
                <br />
                <span> price : </span>
                <span className="text-decoration-none price"> $40.00 </span>
              </div>
            </div>
            <div className="text-decoration-none box">
              <i className="text-decoration-none fas fa-times" />
              <img src="image/menu-4.png" alt="" />
              <div className="text-decoration-none content">
                <h3>delicious food</h3>
                <span> quantity : </span>
                <input type="number" name="" defaultValue={1} id="" />
                <br />
                <span> price : </span>
                <span className="text-decoration-none price"> $40.00 </span>
              </div>
            </div>
            <div className="text-decoration-none box">
              <i className="text-decoration-none fas fa-times" />
              <img src="image/menu-5.png" alt="" />
              <div className="text-decoration-none content">
                <h3>delicious food</h3>
                <span> quantity : </span>
                <input type="number" name="" defaultValue={1} id="" />
                <br />
                <span> price : </span>
                <span className="text-decoration-none price"> $40.00 </span>
              </div>
            </div>
          </div>
        </div>
        <div className="text-decoration-none cart-total text-decoration-none">
          <h3 className="text-decoration-none title"> cart total </h3>
          <div className="text-decoration-none box">
            <h3 className="text-decoration-none subtotal">
              subtotal : <span>$200</span>
            </h3>
            <h3 className="text-decoration-none total">
              total : <span>$200</span>
            </h3>
            <a href="#" className="text-decoration-none btn">
              proceed to checkout
            </a>
          </div>
        </div>
      </section>
      {/* home section starts  */}
      <section className="text-decoration-none home" id="home">
        <div className="text-decoration-none content">
          <span>Welcome To Dine Me</span>
          <h3>different spices for the different tastes 😋</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis unde
            dolores temporibus hic quam debitis tenetur harum nemo.
          </p>
          <a href="#" className="text-decoration-none btn">
            order now
          </a>
        </div>
        <div className="text-decoration-none image">
          <img
            src="image/home-parallax-img.png"
            alt=""
            className="text-decoration-none home-img"
          />
          <img
            src="image/home-parallax-img.png"
            alt=""
            className="text-decoration-none home-parallax-img"
          />
        </div>
      </section>
      {/* home section ends  */}
      {/* category section starts  */}
      <section className="text-decoration-none category">
        <a href="#" className="text-decoration-none box">
          <img src="image/home-parallax-img.png" alt="" />
          <h3>combo</h3>
        </a>
        <a href="#" className="text-decoration-none box">
          <img src="image/cat-2.png" alt="" />
          <h3>pizza</h3>
        </a>
        <a href="#" className="text-decoration-none box">
          <img src="image/cat-3.png" alt="" />
          <h3>burger</h3>
        </a>
        <a href="#" className="text-decoration-none box">
          <img src="image/cat-4.png" alt="" />
          <h3>chicken</h3>
        </a>
        <a href="#" className="text-decoration-none box">
          <img src="image/cat-5.png" alt="" />
          <h3>dinner</h3>
        </a>
        <a href="#" className="text-decoration-none box">
          <img src="image/cat-6.png" alt="" />
          <h3>coffee</h3>
        </a>
      </section>
      {/* category section ends */}
      {/* about section starts  */}
      <section className="text-decoration-none about" id="about">
        <div className="text-decoration-none image">
          <img src="image/about-img.png" alt="" />
        </div>
        <div className="text-decoration-none content">
          <span>why choose us?</span>
          <h3 className="text-decoration-none title">
            what's make our food delicious!
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ut
            explicabo, numquam iusto est a ipsum assumenda tempore esse
            corporis?
          </p>
          <a href="#" className="text-decoration-none btn">
            read more
          </a>
          <div className="text-decoration-none icons-container">
            <div className="text-decoration-none icons">
              <img src="image/serv-1.png" alt="" />
              <h3>fast delivery</h3>
            </div>
            <div className="text-decoration-none icons">
              <img src="image/serv-2.png" alt="" />
              <h3>fresh food</h3>
            </div>
            <div className="text-decoration-none icons">
              <img src="image/serv-3.png" alt="" />
              <h3>best quality</h3>
            </div>
            <div className="text-decoration-none icons">
              <img src="image/serv-4.png" alt="" />
              <h3>24/7 support</h3>
            </div>
          </div>
        </div>
      </section>
      {/* Slider Here */}

      {/* order section ends */}
      {/* blogs section starts  */}
      <section className="text-decoration-none blogs" id="blogs">
        <div className="text-decoration-none heading">
          <span>our blogs</span>
          <h3>our daily stories</h3>
        </div>
        <div className="text-decoration-none box-container">
          <div className="text-decoration-none box">
            <div className="text-decoration-none image">
              <h3>
                <i className="text-decoration-none fas fa-calendar" /> 21st may,
                2021
              </h3>
              <img src="image/blog-1.jpg" alt="" />
            </div>
            <div className="text-decoration-none content">
              <div className="text-decoration-none tags">
                <a href="#">
                  <i className="text-decoration-none fas fa-tag" /> food /
                </a>
                <a href="#">
                  <i className="text-decoration-none fas fa-tag" /> burger /
                </a>
                <a href="#">
                  <i className="text-decoration-none fas fa-tag" /> pizza
                </a>
              </div>
              <h3>blog title goes here...</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem,
                earum.
              </p>
              <a href="#" className="text-decoration-none btn">
                read more
              </a>
            </div>
          </div>
          <div className="text-decoration-none box">
            <div className="text-decoration-none image">
              <h3>
                <i className="text-decoration-none fas fa-calendar" /> 21st may,
                2021
              </h3>
              <img src="image/blog-2.jpg" alt="" />
            </div>
            <div className="text-decoration-none content">
              <div className="text-decoration-none tags">
                <a href="#">
                  <i className="text-decoration-none fas fa-tag" /> food /
                </a>
                <a href="#">
                  <i className="text-decoration-none fas fa-tag" /> burger /
                </a>
                <a href="#">
                  <i className="text-decoration-none fas fa-tag" /> pizza
                </a>
              </div>
              <h3>blog title goes here...</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem,
                earum.
              </p>
              <a href="#" className="text-decoration-none btn">
                read more
              </a>
            </div>
          </div>
          <div className="text-decoration-none box">
            <div className="text-decoration-none image">
              <h3>
                <i className="text-decoration-none fas fa-calendar" /> 21st may,
                2021
              </h3>
              <img src="image/blog-3.jpg" alt="" />
            </div>
            <div className="text-decoration-none content">
              <div className="text-decoration-none tags">
                <a href="#">
                  <i className="text-decoration-none fas fa-tag" /> food /
                </a>
                <a href="#">
                  <i className="text-decoration-none fas fa-tag" /> burger /
                </a>
                <a href="#">
                  <i className="text-decoration-none fas fa-tag" /> pizza
                </a>
              </div>
              <h3>blog title goes here...</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem,
                earum.
              </p>
              <a href="#" className="text-decoration-none btn">
                read more
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
