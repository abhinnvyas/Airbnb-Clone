import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";

export default function Home({ exploreData }) {
  //pull in the props
  return (
    <div>
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      {/* Banner */}
      <Banner />

      <main className="max-w-5xl mx-auto bg-gray-50 px-8 sm:px-16">
        <section className="pt-6">
          <h1 className="text-4xl font-semibold pb-5">Explore Nearby</h1>

          {exploreData.map((item) => (
            <h2>{item.location}</h2>
          ))}
        </section>
      </main>
    </div>
  );
}

// Implementing Static Server Side Rendering
export async function getStaticProps() {
  const exploreData = await fetch("https://links.papareact.com/pyp").then(
    (res) => res.json()
  );

  return {
    props: {
      exploreData, //Same as exploreData: exploreData
    },
  };
}
