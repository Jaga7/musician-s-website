import { AiFillHome } from "react-icons/ai"
import { AiOutlineInfo, AiFillVideoCamera, AiFillMessage } from "react-icons/ai"
import { MdPhotoSizeSelectActual } from "react-icons/md"

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
    text: "photos",
    path: "photos",
    icon: <MdPhotoSizeSelectActual />,
  },
  {
    id: 4,
    text: "videos",
    path: "videos",
    icon: <AiFillVideoCamera />,
  },
  {
    id: 5,
    text: "contact",
    path: "contact",
    icon: <AiFillMessage />,
  },
]

export default links
