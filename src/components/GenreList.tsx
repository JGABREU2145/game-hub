import { HStack, List, ListItem, Image, Text, Spinner } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();

  if (error) {
    return null;
  }

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <List>
      {data.map((genre) => (
        <ListItem paddingY={1} key={genre.id}>
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={genre.image_background}
            />
            <Text fontSize="lg" fontWeight="medium">
              {genre.name}
            </Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
