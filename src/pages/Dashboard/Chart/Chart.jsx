import { Line, Pie } from "react-chartjs-2"; // Import Line chart
import "chart.js/auto";
import { useDashboardData } from "../../../context/DashBoardDataContext";

const Chart = () => {
  const { vaccines, loading, error } = useDashboardData();

  if (loading)
    return (
      <div className="flex justify-center items-center ">
        <div className="w-16 h-16 border-4  border-dashed rounded-full animate-spin border-pink-500"></div>
      </div>
    );

  const vaccineTypes = Array.from(
    new Set(vaccines.map((item) => item.vaccine.name))
  );
  const vaccineCompletionData = vaccineTypes.map((type) => {
    const vaccineTypeData = vaccines.filter(
      (item) => item.vaccine.name === type
    );
    return {
      name: type,
      completed: vaccineTypeData.filter((item) => item.is_completed).length,
      total: vaccineTypeData.length,
    };
  });
  const vaccineCompletionChartData = {
    labels: vaccineCompletionData.map((item) => item.name),
    datasets: [
      {
        data: vaccineCompletionData.map(
          (item) => (item.completed / item.total) * 100
        ),
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4CAF50",
          "#FF9800",
        ],
      },
    ],
  };

  const completionPercentageData = {
    labels: vaccineCompletionData.map((item) => item.name),
    datasets: [
      {
        label: "Completion Percentage",
        data: vaccineCompletionData.map(
          (item) => (item.completed / item.total) * 100
        ),
        backgroundColor: "#FF6384",
        fill: false,
        borderColor: "#FF6384",
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="max-w-screen mx-auto p-4">
      <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0">
        {error && (
          <div className="text-center text-red-600 font-semibold">{error}</div>
        )}
        <div className="flex-1 max-h-[540px]">
          <h2 className="text-xl font-semibold mb-2">
            Vaccine Type Completion Status
          </h2>
          <Line
            data={completionPercentageData}
            options={{ responsive: true }}
            height={250}
          />
        </div>
        <div className="flex-1 max-h-[540px]">
          <h2 className="text-xl font-semibold mb-2">
            Completion Percentage by Vaccine Type
          </h2>
          <Pie
            data={vaccineCompletionChartData}
            options={{ responsive: true }}
            height={250}
          />
        </div>
      </div>
    </div>
  );
};

export default Chart;
