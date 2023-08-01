import { Game, Gamequery } from "../Interfaces/Reuseable";

import useData from "./useData";

const useGames = (
 gameQuery:Gamequery
) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
      },
    },
    [gameQuery]
  );

export default useGames;
