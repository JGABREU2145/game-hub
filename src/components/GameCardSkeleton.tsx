import { Skeleton, Card, CardBody } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card width="300px">
      <Skeleton height="200px" />
      <CardBody>
        <Skeleton height="20px" width="80%" />
        <Skeleton height="20px" width="40%" />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
