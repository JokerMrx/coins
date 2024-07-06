import { API_KEY, API_URL_V1 } from "@/constants";
import { pathsAPI } from "@/constants/paths.api";

export const getCryptocurrenciesListingsLatest = async () => {
  try {
    const response = await fetch(
      `${API_URL_V1}${pathsAPI.cryptocurrency.listings.latest}`,
      {
        headers: {
          "X-CMC_PRO_API_KEY": API_KEY ?? "",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.log(error);

    return null;
  }
};
