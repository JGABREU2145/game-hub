import {
  FaWindows,
  FaXbox,
  FaPlaystation,
  FaLinux,
  FaApple,
  FaAndroid,
  FaSteam,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Game } from "../hooks/useGames";
import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  const iconMap = {
    PC: FaWindows,
    Xbox: FaXbox,
    PlayStation: FaPlaystation,
    Linux: FaLinux,
    iOS: FaApple,
    Android: FaAndroid,
    macOS: FaApple,
    Nintendo: SiNintendo,
    Web: BsGlobe,
    Steam: FaSteam,
    iPhone: MdPhoneIphone,
    iPad: MdPhoneIphone,
    Windows: FaWindows,
  };

  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Image src={game.background_image} alt={game.name} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <PlatformIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
      </CardBody>
    </Card>
  );
};

export default GameCard;
