import Header from "../components/Header";
import Footer from "../components/Footer";
import InfoCard from "../components/InfoCard";
import { useRouter } from "next/dist/client/router";
import { format } from "date-fns";

function Search({ searchResults }) {
  const router = useRouter();
  const { location, startDate, endDate, noOfGuests } = router.query;

  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${noOfGuests} Guests`} />

      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-sm">
            300+ Stays - {range} - for {noOfGuests} Guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6 ">
            Stays in {location}
          </h1>

          <div className="hidden lg:inline-flex mb-5 space-x-3 items-center text-gray-800 whitespace-nowrap">
            <p className="button">Cancelation Flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More Filters</p>
          </div>

          <div className="flex flex-col">
            {searchResults.map(
              ({ img, location, title, description, star, price, total }) => (
                <InfoCard
                  key={img}
                  img={img}
                  location={location}
                  title={title}
                  description={description}
                  star={star}
                  price={price}
                  total={total}
                />
              )
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Search;

// the information is build per request
export async function getServerSideProps() {
  // you can put "context" as the parameter to this function to get acess to all the "query" data
  const searchResults = await fetch("https://links.papareact.com/isz").then(
    (response) => response.json()
  );

  return {
    props: {
      searchResults,
    },
  };
}
