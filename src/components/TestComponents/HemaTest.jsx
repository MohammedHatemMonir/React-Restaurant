import "./HemaTest.scss";

export default function HemaTest() {
  return (
    <div className="my-meal-card-box">
      <article className="rating--box">
        <aside className="cover">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/12117/new_hope.jpg"
            alt="Ghost In The Shell Cover"
          />
        </aside>
        <div className="meta">
          <h1>Star Wars Episode IV: A New Hope</h1>
          <h3>by George Lucas</h3>
          <p className="excerpt">
            Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a
            wookiee and two droids to save the universe from the Empire's
            world-destroying battle-station, while also attempting to rescue
            Princess Leia from the evil Darth Vader.
          </p>
          <input
            type="radio"
            data-rate={1}
            name="rating"
            className="rating--star"
          />
          <input
            type="radio"
            data-rate={2}
            name="rating"
            className="rating--star"
          />
          <input
            type="radio"
            data-rate={3}
            name="rating"
            className="rating--star"
          />
          <input
            type="radio"
            data-rate={4}
            name="rating"
            className="rating--star"
            defaultChecked=""
          />
          <input
            type="radio"
            data-rate={5}
            name="rating"
            className="rating--star"
          />
        </div>
      </article>
    </div>
  );
}
