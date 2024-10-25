import axios from "axios";
import { useEffect, useState } from "react";
import {
  FaClipboardCheck,
  FaHourglassHalf,
  FaUserCheck,
  FaUsers,
} from "react-icons/fa";
import dayjs from "dayjs";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const DashHome = () => {
  const [loading, setLoading] = useState(false);
  const [stats, setStats] = useState({
    totalVaccinated: 0,
    totalUsers: 0,
    thisMonthVaccinations: 0,
    waitingForVaccination: 0,
  });

  useEffect(() => {
    const fetchUserVaccine = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://vaccination-management-backend-drf.vercel.app/vaccine-campaign/booking/"
        );
        if (response.data) {
          calculateStats(response.data);
          setLoading(false);
        }
      } catch (error) {
        setLoading(false);
        console.log("Something went wrong", error);
      }
    };
    fetchUserVaccine();
  }, []);

  const calculateStats = (data) => {
    const totalVaccinated = data.filter((entry) => entry.is_completed).length;
    const uniqueUsers = new Set(data.map((entry) => entry.patient.id));
    const currentMonth = dayjs().month();
    const thisMonthVaccinations = data.filter((entry) =>
      ["first_dose_date", "second_dose_date"].some(
        (dateField) => dayjs(entry[dateField]).month() === currentMonth
      )
    ).length;
    const waitingForVaccination = data.filter(
      (entry) => !entry.is_completed
    ).length;

    setStats({
      totalVaccinated,
      totalUsers: uniqueUsers.size,
      thisMonthVaccinations,
      waitingForVaccination,
    });
  };

  const data = [
    {
      title: "Total Vaccinated",
      value: stats.totalVaccinated,
      icon: <FaUserCheck size={30} />,
      color: "bg-blue-500",
    },
    {
      title: "Total Users",
      value: stats.totalUsers,
      icon: <FaUsers size={30} />,
      color: "bg-green-500",
    },
    {
      title: "This Month Vaccinations",
      value: stats.thisMonthVaccinations,
      icon: <FaClipboardCheck size={30} />,
      color: "bg-yellow-500",
    },
    {
      title: "Total Waiting for Vaccination",
      value: stats.waitingForVaccination,
      icon: <FaHourglassHalf size={30} />,
      color: "bg-red-500",
    },
  ];

  // Data for the Doughnut Chart
  const doughnutData = {
    labels: ["Completed Vaccinations", "Pending Vaccinations"],
    datasets: [
      {
        data: [stats.totalVaccinated, stats.waitingForVaccination],
        backgroundColor: ["#4caf50", "#f44336"],
        hoverBackgroundColor: ["#66bb6a", "#e57373"],
      },
    ],
  };

  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center ">
          <div className="w-16 h-16 border-4  border-dashed rounded-full animate-spin border-pink-500"></div>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
            {data.map((item, index) => (
              <div
                key={index}
                className={`flex items-center p-4 rounded-lg shadow-lg ${item.color} text-white`}
              >
                <div className="mr-4">{item.icon}</div>
                <div>
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <p className="text-2xl">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Doughnut Chart */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-center mb-4">
              Vaccination Status Comparison
            </h2>
            <div className="w-1/2 md:w-1/4 sm:w-1/3 m-auto">
              <Doughnut data={doughnutData} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default DashHome;
