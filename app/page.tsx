import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>The District Booking</h1>
      <p>Book your football pitch easily and instantly.</p>

      <div style={{ marginTop: "20px" }}>
        <Link href="/booking">
          <button style={{ padding: "10px 20px", cursor: "pointer" }}>
            Book a Slot
          </button>
        </Link>
      </div>
    </main>
  );
}