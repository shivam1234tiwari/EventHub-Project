import { useState } from "react";

export default function ListEvent() {

  const [event, setEvent] = useState({
    title: "",
    category: "",
    location: "",
    date: "",
    description: "",
  });

  const handleChange = (e) => {

    setEvent({
      ...event,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    console.log(event);

    alert("🎉 Event Submitted Successfully!");

    setEvent({
      title: "",
      category: "",
      location: "",
      date: "",
      description: "",
    });

  };

  return (
    <div className="event-page">

      <div className="event-card">

        <h1>List Your Event</h1>

        <p>Create and publish your event.</p>

        <form onSubmit={handleSubmit}>

          <div className="grid">

            <div className="input-group">
              <label>Event Title</label>

              <input
                name="title"
                value={event.title}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label>Category</label>

              <select
                name="category"
                value={event.category}
                onChange={handleChange}
                required
              >
                <option value="">Select</option>
                <option>Music</option>
                <option>Technology</option>
                <option>Sports</option>
                <option>Business</option>
              </select>
            </div>

            <div className="input-group">
              <label>Location</label>

              <input
                name="location"
                value={event.location}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label>Date</label>

              <input
                type="date"
                name="date"
                value={event.date}
                onChange={handleChange}
                required
              />
            </div>

          </div>

          <div className="input-group">

            <label>Description</label>

            <textarea
              rows="5"
              name="description"
              value={event.description}
              onChange={handleChange}
              required
            />

          </div>

          <button className="publish-btn" type="submit">
            Publish Event
          </button>

        </form>

      </div>

    </div>
  );
}