import "./CookingLoader.scss";

const CookingLoader = () => {
  return (
    <div className="Cooking-Loader">
      <div className="spinner-container">
        <div className="spinner">
          <div className="bubble bubble--1" />
          <div className="bubble bubble--2" />
          <div className="bubble bubble--4" />
          <div className="bubble bubble--3" />
          <div className="bubble bubble--5" />
          <div className="bubble bubble--6" />
          <div className="aliment aliment--1" />
          <div className="aliment aliment--2" />
          <div className="aliment aliment--3" />
          <div className="stove">
            <div className="stove--handle" />
            <div className="stove--base" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookingLoader;
