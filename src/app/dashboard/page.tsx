import { columns } from "@/components/cryptocurrencies/columns";
import { DataTable } from "@/components/tables/data-table";
import { getCryptocurrenciesListingsLatest } from "@/services/api/cryptocurrency.api";

const getData = async () => {
  const data = await getCryptocurrenciesListingsLatest();

  return {
    data,
  };
};

const Dashboard = async () => {
  const {
    data: { data: cryptocurrencies },
  } = await getData();

  return (
    <div className="w-full mx-auto px-4 md:px-6">
      <div className="my-10">
        <DataTable columns={columns} data={cryptocurrencies} />
      </div>
    </div>
  );
};

export default Dashboard;
