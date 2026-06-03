export default function BookingPage() {
  return (
    <main style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>Book a Slot</h1>

      <p>Select an available time for The District Sports Arena football pitch.</p>

      <div style={{ marginTop: "20px" }}>
        <h3>Available Slots</h3>

        <ul>
          <li>08:00 - 10:00</li>
          <li>10:00 - 12:00</li>
          <li>12:00 - 14:00</li>
          <li>14:00 - 16:00</li>
          <li>16:00 - 18:00</li>
          <li>18:00 - 20:00</li>
        </ul>
      </div>
    </main>
  );
}