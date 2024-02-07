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
import { Platform } from "../hooks/useGames";
import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface PlatformIconListProps {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: PlatformIconListProps) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    xbox: FaXbox,
    playstation: FaPlaystation,
    linux: FaLinux,
    apple: FaApple,
    android: FaAndroid,
    nintendo: SiNintendo,
    web: BsGlobe,
    ios: MdPhoneIphone,
    mac: FaApple,
    steam: FaSteam,
  };

  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon as={iconMap[platform.slug]} key={platform.id} color="gray.500" />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
