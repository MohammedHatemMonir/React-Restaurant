import "./ResFilters.scss";
import Input from "./Input";

const ResFilters = () => {
  return (
    <div className="my-filters">
      <section>
        {/* Categories */}
        <h2 className="sidebar-title">Category</h2>
        <div>
          <label className="sidebar-label-container">
            <input type="radio" value="" name="test" />
            <span className="checkmark"></span>All
          </label>
          <Input value="sneakers" title="Sneakers" name="test" />
          <Input value="flats" title="Flats" name="test" />
          <Input value="sandals" title="Sandals" name="test" />
          <Input value="heels" title="Heels" name="test" />
        </div>
        {/* Prices */}

        <div className="ml">
          <h2 className="sidebar-title price-title">Price</h2>
          <label className="sidebar-label-container">
            <input type="radio" value="" name="test2" />
            <span className="checkmark"></span>All
          </label>
          <Input value={50} title="$0 - 50" name="test2" />
          <Input value={100} title="$50 - $100" name="test2" />
          <Input value={150} title="$100 - $150" name="test2" />
          <Input value={200} title="Over $150" name="test2" />
        </div>
      </section>
    </div>
  );
};

export default ResFilters;
