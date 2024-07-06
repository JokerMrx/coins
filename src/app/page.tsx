import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <div className="card hero">
        <p className="text-display-1 hero-title">
          {"Let's"} take a look at <br /> Cryptocurrencies
        </p>

        <Link
          href="/dashboard"
          rel="noreferrer"
          className="btn btn-light btn-big"
        >
          Go to
        </Link>
      </div>
    </div>
  );
}
