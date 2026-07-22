export default function ListEvent() {
  return (
    <section className="event-page">

      <div className="event-card">

        <h1>🎉 List Your Event</h1>

        <p>Create an event and reach thousands of people.</p>

        <form>

          <div className="grid">

            <div className="input-group">
              <label>Event Name</label>
              <input
                type="text"
                placeholder="React Conference"
              />
            </div>

            <div className="input-group">
              <label>Category</label>

              <select>
                <option>Music</option>
                <option>Technology</option>
                <option>Workshop</option>
                <option>Sports</option>
                <option>Business</option>
              </select>

            </div>

          </div>

          <div className="grid">

            <div className="input-group">
              <label>Date</label>
              <input type="date" />
            </div>

            <div className="input-group">
              <label>Time</label>
              <input type="time" />
            </div>

          </div>

          <div className="input-group">
            <label>Venue</label>

            <input
              type="text"
              placeholder="Pune, Maharashtra"
            />
          </div>

          <div className="input-group">
            <label>Description</label>

            <textarea
              rows="5"
              placeholder="Describe your event..."
            ></textarea>
          </div>

          <div className="input-group">
            <label>Banner Image</label>
            <input type="file" />
          </div>

          <button className="publish-btn">
            Publish Event
          </button>

        </form>

      </div>

    </section>
  );
}