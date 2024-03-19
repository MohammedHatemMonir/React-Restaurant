import "./HemaTest.scss";

const HemaTest = () => {
  return <div className="modal-content">
  <div className="item-cover">
    <button
      type="button"
      data-dismiss="modal"
      aria-label="Close"
      className="close-modal"
    >
      <svg viewBox="0 0 25 25">
        <use xlinkHref="#close" />
      </svg>
    </button>{" "}
    <div className="image image-ratio ratio-dish-cover">
      <div className="ratio-content">
        <img
          src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/04234959-eccc-4c09-bf71-3c3b0ea3d36b.jpg"
          alt="Classic Nachos"
          className="v-center"
        />
      </div>
    </div>
  </div>{" "}
  <div className="modal-body">
    <p className="unavailable-top-text unavailable-img-exists">
      Restaurant currently doesn't deliver to your zone
    </p>{" "}
    {/**/}{" "}
    <div className="item-header">
      <h3 className="title">Classic Nachos</h3>
    </div>{" "}
    <p className="item-description">
      12 pieces of tortilla bread with mix cheese, mashed black beans, queso and
      jalapenos, served with sour cream and pico salad
    </p>{" "}
    <div className="item-actions">
      <div className="reactions">
        <button
          type="button"
          disabled="disabled"
          className="action-btn reaction-btn like-btn"
        >
          <span className="icon">
            <svg viewBox="0 0 25 25">
              <use xlinkHref="#like" />
            </svg>
          </span>{" "}
          <span className="count">323</span>
        </button>
      </div>{" "}
      <div className="item-sizes">
        {/**/}{" "}
        <ul className="sizes-list custom-radio-group">
          <li className="size">
            <label className="size-option toggle-active custom-radio-holder active">
              {/**/} <p className="input-label">Regular</p>
            </label>{" "}
            <div className="price pull-right">
              <span className="cost"> 258.93</span>{" "}
              <span className="currency">EGP</span>
            </div>{" "}
            {/**/}
          </li>
        </ul>
      </div>{" "}
      <div className="item-extras">
        <h4
          id="category-list-collapse-2b52469d-a8d3-4985-baff-7da2042f1127-id"
          className="title"
        >
          Additions
          {/**/}
        </h4>{" "}
        <ul
          id="category-list-collapse-2b52469d-a8d3-4985-baff-7da2042f1127"
          className="extras-list collabe-custom"
        >
          <li className="item">
            <label className="item-option custom-checkbox-holder">
              <input
                type="checkbox"
                disabled="disabled"
                className="visuallyhidden custom-checkbox-input"
                defaultValue="42c02f07-0018-4b1f-9461-9c4b4ab2e98d"
              />{" "}
              <p className="input-label">Sour Cream</p>
            </label>{" "}
            <div className="price pull-right">
              <span className="cost">31.25</span>{" "}
              <span className="currency">EGP</span>
            </div>
          </li>
          <li className="item">
            <label className="item-option custom-checkbox-holder">
              <input
                type="checkbox"
                disabled="disabled"
                className="visuallyhidden custom-checkbox-input"
                defaultValue="7b44fa59-5d0a-4ead-97f1-98311c62e2f7"
              />{" "}
              <p className="input-label">3 Pieces Beef Bacon</p>
            </label>{" "}
            <div className="price pull-right">
              <span className="cost">71.43</span>{" "}
              <span className="currency">EGP</span>
            </div>
          </li>
          <li className="item">
            <label className="item-option custom-checkbox-holder">
              <input
                type="checkbox"
                disabled="disabled"
                className="visuallyhidden custom-checkbox-input"
                defaultValue="2eda3fd9-2f7d-4f88-8a5a-ceb797a84869"
              />{" "}
              <p className="input-label">Shrimp</p>
            </label>{" "}
            <div className="price pull-right">
              <span className="cost">142.85</span>{" "}
              <span className="currency">EGP</span>
            </div>
          </li>
          <li className="item">
            <label className="item-option custom-checkbox-holder">
              <input
                type="checkbox"
                disabled="disabled"
                className="visuallyhidden custom-checkbox-input"
                defaultValue="4d65b3cb-7c45-4392-b1f8-9013170f1d6f"
              />{" "}
              <p className="input-label">Mushroom</p>
            </label>{" "}
            <div className="price pull-right">
              <span className="cost">58.04</span>{" "}
              <span className="currency">EGP</span>
            </div>
          </li>
          <li className="item">
            <label className="item-option custom-checkbox-holder">
              <input
                type="checkbox"
                disabled="disabled"
                className="visuallyhidden custom-checkbox-input"
                defaultValue="32e2c246-7f10-4298-9bd5-cad68fb92341"
              />{" "}
              <p className="input-label">Guacamole</p>
            </label>{" "}
            <div className="price pull-right">
              <span className="cost">53.57</span>{" "}
              <span className="currency">EGP</span>
            </div>
          </li>
          <li className="item">
            <label className="item-option custom-checkbox-holder">
              <input
                type="checkbox"
                disabled="disabled"
                className="visuallyhidden custom-checkbox-input"
                defaultValue="1f37d91c-c71f-4611-afaf-4635ec52a34c"
              />{" "}
              <p className="input-label">Chicken</p>
            </label>{" "}
            <div className="price pull-right">
              <span className="cost">75.89</span>{" "}
              <span className="currency">EGP</span>
            </div>
          </li>
          <li className="item">
            <label className="item-option custom-checkbox-holder">
              <input
                type="checkbox"
                disabled="disabled"
                className="visuallyhidden custom-checkbox-input"
                defaultValue="9d950673-d057-4a5f-8308-d4cce438c985"
              />{" "}
              <p className="input-label">Beef</p>
            </label>{" "}
            <div className="price pull-right">
              <span className="cost">120.53</span>{" "}
              <span className="currency">EGP</span>
            </div>
          </li>
          <li className="item">
            <label className="item-option custom-checkbox-holder">
              <input
                type="checkbox"
                disabled="disabled"
                className="visuallyhidden custom-checkbox-input"
                defaultValue="7a61633c-df20-4cbd-957f-94cd14a23c23"
              />{" "}
              <p className="input-label">Egg</p>
            </label>{" "}
            <div className="price pull-right">
              <span className="cost">26.79</span>{" "}
              <span className="currency">EGP</span>
            </div>
          </li>
          <li className="item">
            <label className="item-option custom-checkbox-holder">
              <input
                type="checkbox"
                disabled="disabled"
                className="visuallyhidden custom-checkbox-input"
                defaultValue="1e0f7e5f-755c-4b17-bf36-74fe4d61aa2a"
              />{" "}
              <p className="input-label">Mushroom Sauce</p>
            </label>{" "}
            <div className="price pull-right">
              <span className="cost">62.49</span>{" "}
              <span className="currency">EGP</span>
            </div>
          </li>
          <li className="item">
            <label className="item-option custom-checkbox-holder">
              <input
                type="checkbox"
                disabled="disabled"
                className="visuallyhidden custom-checkbox-input"
                defaultValue="6f179de2-dcef-422c-8d6e-e239f86f3879"
              />{" "}
              <p className="input-label">Pepper Sauce</p>
            </label>{" "}
            <div className="price pull-right">
              <span className="cost">62.49</span>{" "}
              <span className="currency">EGP</span>
            </div>
          </li>
          <li className="item">
            <label className="item-option custom-checkbox-holder">
              <input
                type="checkbox"
                disabled="disabled"
                className="visuallyhidden custom-checkbox-input"
                defaultValue="1855be9b-60a5-4680-af81-47f1f11a4a8e"
              />{" "}
              <p className="input-label">Queso Sauce</p>
            </label>{" "}
            <div className="price pull-right">
              <span className="cost">29.47</span>{" "}
              <span className="currency">EGP</span>
            </div>
          </li>
          <li className="item">
            <label className="item-option custom-checkbox-holder">
              <input
                type="checkbox"
                disabled="disabled"
                className="visuallyhidden custom-checkbox-input"
                defaultValue="672d9310-ebee-49dc-90a6-2c4f9c119edf"
              />{" "}
              <p className="input-label">Salsa</p>
            </label>{" "}
            <div className="price pull-right">
              <span className="cost">31.25</span>{" "}
              <span className="currency">EGP</span>
            </div>
          </li>
          <li className="item">
            <label className="item-option custom-checkbox-holder">
              <input
                type="checkbox"
                disabled="disabled"
                className="visuallyhidden custom-checkbox-input"
                defaultValue="359a9a43-189f-4c84-a364-65fee88ccf6d"
              />{" "}
              <p className="input-label">Jack Cheese</p>
            </label>{" "}
            <div className="price pull-right">
              <span className="cost">40.17</span>{" "}
              <span className="currency">EGP</span>
            </div>
          </li>
          <li className="item">
            <label className="item-option custom-checkbox-holder">
              <input
                type="checkbox"
                disabled="disabled"
                className="visuallyhidden custom-checkbox-input"
                defaultValue="01628480-f8d0-4936-9b79-e0ae6bbdc1fa"
              />{" "}
              <p className="input-label">Mix Cheese</p>
            </label>{" "}
            <div className="price pull-right">
              <span className="cost">40.17</span>{" "}
              <span className="currency">EGP</span>
            </div>
          </li>
          <li className="item">
            <label className="item-option custom-checkbox-holder">
              <input
                type="checkbox"
                disabled="disabled"
                className="visuallyhidden custom-checkbox-input"
                defaultValue="3675f5fe-34a8-4ff0-a8a1-319b7340cc98"
              />{" "}
              <p className="input-label">Cheddar Cheese</p>
            </label>{" "}
            <div className="price pull-right">
              <span className="cost">40.17</span>{" "}
              <span className="currency">EGP</span>
            </div>
          </li>
          <li className="item">
            <label className="item-option custom-checkbox-holder">
              <input
                type="checkbox"
                disabled="disabled"
                className="visuallyhidden custom-checkbox-input"
                defaultValue="8e61487c-13cc-4d89-9bfc-bf8a1ac579c3"
              />{" "}
              <p className="input-label">Swiss Cheese</p>
            </label>{" "}
            <div className="price pull-right">
              <span className="cost">70.17</span>{" "}
              <span className="currency">EGP</span>
            </div>
          </li>
        </ul>
      </div>
      <div className="item-extras">
        <h4
          id="category-list-collapse-5a91d3ed-9d45-4616-8557-8a389c52fbd5-id"
          className="title"
        >
          Extra Dressing
          {/**/}
        </h4>{" "}
        <ul
          id="category-list-collapse-5a91d3ed-9d45-4616-8557-8a389c52fbd5"
          className="extras-list collabe-custom"
        >
          <li className="item">
            <label className="item-option custom-checkbox-holder">
              <input
                type="checkbox"
                disabled="disabled"
                className="visuallyhidden custom-checkbox-input"
                defaultValue="36048dc5-79a8-4859-8375-b31586aa0350"
              />{" "}
              <p className="input-label">Honey Mustard</p>
            </label>{" "}
            <div className="price pull-right">
              <span className="cost">31.25</span>{" "}
              <span className="currency">EGP</span>
            </div>
          </li>
          <li className="item">
            <label className="item-option custom-checkbox-holder">
              <input
                type="checkbox"
                disabled="disabled"
                className="visuallyhidden custom-checkbox-input"
                defaultValue="a01c4863-6acc-412c-bb92-f74c3a05d144"
              />{" "}
              <p className="input-label">Blue Cheese</p>
            </label>{" "}
            <div className="price pull-right">
              <span className="cost">31.25</span>{" "}
              <span className="currency">EGP</span>
            </div>
          </li>
          <li className="item">
            <label className="item-option custom-checkbox-holder">
              <input
                type="checkbox"
                disabled="disabled"
                className="visuallyhidden custom-checkbox-input"
                defaultValue="207ee66b-cc66-48e3-9e60-ee0aebad8f7a"
              />{" "}
              <p className="input-label">Caesar Dressing</p>
            </label>{" "}
            <div className="price pull-right">
              <span className="cost">31.25</span>{" "}
              <span className="currency">EGP</span>
            </div>
          </li>
          <li className="item">
            <label className="item-option custom-checkbox-holder">
              <input
                type="checkbox"
                disabled="disabled"
                className="visuallyhidden custom-checkbox-input"
                defaultValue="b28c9518-2492-4073-b9ef-f173a7013538"
              />{" "}
              <p className="input-label">Balsamic Citrus</p>
            </label>{" "}
            <div className="price pull-right">
              <span className="cost">31.25</span>{" "}
              <span className="currency">EGP</span>
            </div>
          </li>
          <li className="item">
            <label className="item-option custom-checkbox-holder">
              <input
                type="checkbox"
                disabled="disabled"
                className="visuallyhidden custom-checkbox-input"
                defaultValue="94288daf-3324-4476-9d11-ba829c727b8b"
              />{" "}
              <p className="input-label">Ranch</p>
            </label>{" "}
            <div className="price pull-right">
              <span className="cost">31.25</span>{" "}
              <span className="currency">EGP</span>
            </div>
          </li>
          <li className="item">
            <label className="item-option custom-checkbox-holder">
              <input
                type="checkbox"
                disabled="disabled"
                className="visuallyhidden custom-checkbox-input"
                defaultValue="d0e831d1-1acd-44bf-af69-11a433ffc334"
              />{" "}
              <p className="input-label">BBQ</p>
            </label>{" "}
            <div className="price pull-right">
              <span className="cost">31.25</span>{" "}
              <span className="currency">EGP</span>
            </div>
          </li>
          <li className="item">
            <label className="item-option custom-checkbox-holder">
              <input
                type="checkbox"
                disabled="disabled"
                className="visuallyhidden custom-checkbox-input"
                defaultValue="ff29d9de-7f51-4540-9da1-ebdd7f2483e9"
              />{" "}
              <p className="input-label">Buffalo</p>
            </label>{" "}
            <div className="price pull-right">
              <span className="cost">31.25</span>{" "}
              <span className="currency">EGP</span>
            </div>
          </li>
        </ul>
      </div>{" "}
      {/**/}{" "}
      <p className="paragraph error-message restaurant-closed-now">
        Restaurant currently doesn't deliver to your zone
      </p>
    </div>
  </div>{" "}
  {/**/}
</div>
;
};

export default HemaTest;
