import { useState } from "react";

export default function ListEvent() {
  const [event, setEvent] = useState({
    title: "",
    category: "",
    date: "",
    time: "",
    venue: "",
    city: "",
    price: "",
    capacity: "",
    organizer: "",
    email: "",
    phone: "",
    description: "",
    banner: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "banner") {
      setEvent({
        ...event,
        banner: files[0],
      });
    } else {
      setEvent({
        ...event,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !event.title ||
      !event.category ||
      !event.date ||
      !event.time ||
      !event.venue
    ) {
      alert("Please fill all required fields.");
      return;
    }

    console.log(event);

    alert("🎉 Event Published Successfully (Frontend Only)");
  };

  return (
    <section className="list-event-page">
      <div className="event-container">

        {/* Form */}

        <div className="event-form">

          <h1>List Your Event</h1>

          <p>Create and publish your event in minutes.</p>

          <form onSubmit={handleSubmit}>

            <div className="input-group">
              <label>Event Title</label>

              <input
                type="text"
                name="title"
                placeholder="Tech Conference 2026"
                value={event.title}
                onChange={handleChange}
              />
            </div>

            <div className="input-group">
              <label>Category</label>

              <select
                name="category"
                value={event.category}
                onChange={handleChange}
              >
                <option value="">Select Category</option>
                <option>Technology</option>
                <option>Music</option>
                <option>Business</option>
                <option>Sports</option>
                <option>Workshop</option>
                <option>Festival</option>
              </select>
            </div>

            <div className="grid-2">

              <div className="input-group">
                <label>Date</label>

                <input
                  type="date"
                  name="date"
                  value={event.date}
                  onChange={handleChange}
                />
              </div>

              <div className="input-group">
                <label>Time</label>

                <input
                  type="time"
                  name="time"
                  value={event.time}
                  onChange={handleChange}
                />
              </div>

            </div>

            <div className="grid-2">

              <div className="input-group">
                <label>Venue</label>

                <input
                  type="text"
                  name="venue"
                  placeholder="Balewadi Stadium"
                  value={event.venue}
                  onChange={handleChange}
                />
              </div>

              <div className="input-group">
                <label>City</label>

                <input
                  type="text"
                  name="city"
                  placeholder="Pune"
                  value={event.city}
                  onChange={handleChange}
                />
              </div>

            </div>

            <div className="grid-2">

              <div className="input-group">
                <label>Ticket Price (₹)</label>

                <input
                  type="number"
                  name="price"
                  placeholder="499"
                  value={event.price}
                  onChange={handleChange}
                />
              </div>

              <div className="input-group">
                <label>Capacity</label>

                <input
                  type="number"
                  name="capacity"
                  placeholder="500"
                  value={event.capacity}
                  onChange={handleChange}
                />
              </div>

            </div>

            <div className="input-group">
              <label>Organizer Name</label>

              <input
                type="text"
                name="organizer"
                placeholder="Rahul Tiwari"
                value={event.organizer}
                onChange={handleChange}
              />
            </div>

            <div className="grid-2">

              <div className="input-group">
                <label>Email</label>

                <input
                  type="email"
                  name="email"
                  placeholder="example@gmail.com"
                  value={event.email}
                  onChange={handleChange}
                />
              </div>

              <div className="input-group">
                <label>Phone</label>

                <input
                  type="tel"
                  name="phone"
                  placeholder="+91 9876543210"
                  value={event.phone}
                  onChange={handleChange}
                />
              </div>

            </div>

            <div className="input-group">

              <label>Event Banner</label>

              <input
                type="file"
                name="banner"
                onChange={handleChange}
              />

            </div>

            <div className="input-group">

              <label>Description</label>

              <textarea
                rows="5"
                name="description"
                placeholder="Write about your event..."
                value={event.description}
                onChange={handleChange}
              />

            </div>

            <button className="primary-btn">
              Publish Event
            </button>

          </form>

        </div>

        {/* Preview */}

        <div className="event-preview">

          <h2>Live Preview</h2>

          <div className="preview-card">

            <div className="preview-banner">

              {event.banner ? (
                <img
                  src={URL.createObjectURL(event.banner)}
                  alt="banner"
                />
              ) : (
                <div className="placeholder">
                  Upload Banner
                </div>
              )}

            </div>

            <h3>
              {event.title || "Your Event Title"}
            </h3>

            <p>
              📂 {event.category || "Category"}
            </p>

            <p>
              📅 {event.date || "Date"}
            </p>

            <p>
              ⏰ {event.time || "Time"}
            </p>

            <p>
              📍 {event.venue || "Venue"}
            </p>

            <p>
              🌍 {event.city || "City"}
            </p>

            <p>
              💰 ₹{event.price || "0"}
            </p>

            <p>
              👥 {event.capacity || "0"} Seats
            </p>

            <p>
              👤 {event.organizer || "Organizer"}
            </p>

            <p className="preview-description">
              {event.description ||
                "Your event description will appear here."}
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}