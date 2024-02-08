import { SimpleGrid, Skeleton } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

const GameGrid = () => {
  const { data, error, isLoading } = useGames();

  const skeletons = Array.from({ length: 10 });

  return (
    <SimpleGrid
      columns={{
        sm: 1,
        md: 2,
        lg: 3,
        xl: 5,
      }}
      padding="10px"
      spacing={3}
    >
      {isLoading &&
        skeletons.map((_, index) => (
          <GameCardContainer key={index}>
            <GameCardSkeleton key={index} />
          </GameCardContainer>
        ))}
      {data.map((game) => (
        <GameCardContainer key={game.id}>
          <GameCard key={game.id} game={game} />
        </GameCardContainer>
      ))}
      {error && <div>{error}</div>}
    </SimpleGrid>
  );
};

export default GameGrid;
