import Link from "next/link";

export default function Home() {
  return (
    <div className="container !px-4 md:px-6 lg:px-8">
      <div className="card hero">
        <p className="mb-5 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
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
