import { FaCompass, FaMessage, FaGear } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { IconType } from "react-icons";
import { FaHome } from "react-icons/fa";

interface Section {
  name: string;
  icon: IconType;
  route: string;
}

const sections: Section[] = [
  {
    name: "Home",
    icon: FaHome,
    route: "",
  },
  {
    name: "Profile",
    icon: CgProfile,
    route: "profile",
  },
  {
    name: "Discover",
    icon: FaCompass,
    route: "discover",
  },
  {
    name: "Messages",
    icon: FaMessage,
    route: "messages",
  },

  {
    name: "Settings",
    icon: FaGear,
    route: "settings",
  },
];

export default sections;
