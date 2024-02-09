import {
  HStack,
  List,
  ListItem,
  Image,
  Spinner,
  Button,
  Heading,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import { Genre } from "../hooks/useGenres";

interface GenreListProps {
  onSelectGenre: (genre: Genre) => void;
  seletedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, seletedGenre }: GenreListProps) => {
  const { data, isLoading, error } = useGenres();

  if (error) {
    return null;
  }

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <Heading size="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data.map((genre: any) => (
          <ListItem paddingY={1} key={genre.id}>
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit={"cover"}
                src={genre.image_background}
              />
              <Button
                onClick={() => onSelectGenre(genre)}
                variant={"link"}
                fontSize="lg"
                fontWeight={seletedGenre?.id === genre.id ? "bold" : "normal"}
                whiteSpace={"normal"}
                textAlign={"left"}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
