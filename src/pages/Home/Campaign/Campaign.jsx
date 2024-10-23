import axios from "axios";
import { useEffect, useState } from "react";

const Campaign = () => {
  const [vaccines, setVaccines] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVaccines = async () => {
      try {
        const response = await axios(
          "https://vaccination-management-backend-drf.vercel.app/vaccine-campaign/list/"
        );
        setVaccines(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchVaccines();
  }, []);

  return (
    <>
      <div>
        <div className="stylish-regular text-5xl  text-pink-500 text-center font-bold">
          Campaign going on ...
        </div>

        <div className="container mx-auto px-4 py-8">
          {loading ? (
            <div className="flex justify-center items-center">
              <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-pink-500"></div>
            </div>
          ) : (
            <>
              <div className="flex justify-end mb-4">
                {vaccines.length > 4 && (
                  <a
                    href="/vaccine-campaign"
                    className="bg-pink-500 hover:bg-pink-700 btn btn-sm text-white font-bold py-2 px-4 rounded"
                  >
                    Show All
                  </a>
                )}
              </div>
              <div className="flex flex-wrap mx-auto w-4/5 md:w-full">
                {vaccines.slice(0, 4).map((vaccine) => (
                  <div
                    key={vaccine.id}
                    className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8"
                  >
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                      <img
                        src={vaccine.image}
                        alt={vaccine.name}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4">
                        <h2 className="text-xl font-semibold mb-2">
                          {vaccine.name}
                        </h2>

                        <div className="flex justify-between items-center">
                          <a
                            href={`/vaccine-campaign/details/${vaccine.id}`}
                            className="border border-pink-500 text-pink-500  hover:bg-pink-500 hover:text-white font-bold py-2 px-4 rounded"
                          >
                            Details
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Campaign;
