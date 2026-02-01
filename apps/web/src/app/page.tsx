import Link from "next/link";

export default function LocaleEntry() {
  return (
    <main style={{ padding: "2rem" }}>
      <h1>Choose a locale</h1>
      <p>Select the language you want to continue with.</p>
      <ul>
        <li>
          <Link href="/vi">Tiếng Việt</Link>
        </li>
        <li>
          <Link href="/en">English</Link>
        </li>
      </ul>
    </main>
  );
}
