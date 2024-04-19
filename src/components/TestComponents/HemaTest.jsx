// import "./HemaTest.scss";

export default function HemaTest() {
  return (
    <section class="menu" id="menu">
      <div class="box-container">
        <div class="box">
          <div class="image">
            <img
              src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/92edf264-8a29-4efb-997a-ca2fdf9b3a92.jpg"
              alt=""
            />
            <a href="#" class="fas fa-heart"></a>
          </div>
          <div class="content">
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
            </div>
            <h3>delicious food</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusamus, officia.
            </p>
            <a href="#" class="btn">
              add to cart
            </a>
            <span class="price">$12.99</span>
          </div>
        </div>
      </div>
    </section>
  );
}
