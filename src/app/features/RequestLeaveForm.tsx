export default function RequestLeaveForm() {
  return (
    <form action={} className="leave-form">
      <div>
        <label htmlFor="month">Month:</label>
        <input
          id="month"
          name="month"
          type="text"
          placeholder="e.g. OCT"
          required
        />
      </div>

      <div>
        <label htmlFor="day">Day:</label>
        <input
          id="day"
          name="day"
          type="number"
          placeholder="e.g. 10"
          required
        />
      </div>

      <div>
        <label htmlFor="meta">Meta:</label>
        <input
          id="meta"
          name="meta"
          type="text"
          placeholder="All Day / 09:00"
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}
