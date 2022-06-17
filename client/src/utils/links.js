import { AiFillHome } from "react-icons/ai"
import { AiOutlineInfo, AiFillVideoCamera } from "react-icons/ai"

const links = [
  {
    id: 1,
    text: "home",
    path: "/",
    icon: <AiFillHome />,
  },
  {
    id: 2,
    text: "about",
    path: "about",
    icon: <AiOutlineInfo />,
  },
  {
    id: 3,
    text: "watch",
    path: "videos",
    icon: <AiFillVideoCamera />,
  },
]

export default links
