import { FaCompass, FaMessage, FaGear } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { IconType } from "react-icons";
import { FaHome } from "react-icons/fa";

interface Section {
  name: string;
  icon: IconType;
}

const sections: Section[] = [
  {
    name: "Home",
    icon: FaHome,
  },
  {
    name: "Profile",
    icon: CgProfile,
  },
  {
    name: "Discover",
    icon: FaCompass,
  },
  {
    name: "Messages",
    icon: FaMessage,
  },

  {
    name: "Settings",
    icon: FaGear,
  },
];

export default sections;
