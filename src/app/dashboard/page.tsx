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
    <div className="container">
      <div className="my-10">
        <DataTable columns={columns} data={cryptocurrencies} />
      </div>
    </div>
  );
};

export default Dashboard;
