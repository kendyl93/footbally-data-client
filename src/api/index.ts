import { MacthesResponse } from "../types";

export const fetchMatches = async (): Promise<MacthesResponse> => {
  const localAddress = `https://filthy-amitie-pstanecki-3c17e27c.koyeb.app`;
  try {
    const response = await fetch(`${localAddress}/matches`);
    console.log({ response });
    return response.json();
  } catch (error) {
    console.error({ errorFromCatch: error });
    throw error;
  }
};
