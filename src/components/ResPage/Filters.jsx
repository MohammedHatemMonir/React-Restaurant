import "./Filters.scss";

const Filters = () => {
  return (
    <div className="my-filters">
      <section className="portfolio section">
        <div className="container">
          <div className="filters">
            <ul>
              <li className="active" data-filter="*">
                All
              </li>
              <li data-filter=".corporate">Corporate</li>
              <li data-filter=".personal">Personal</li>
              <li data-filter=".agency">Agency</li>
              <li data-filter=".portal">Portal</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Filters;
