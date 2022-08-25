import { nanoid } from "nanoid";
import user_1 from "../assets/img/1.jpeg";
import user_2 from "../assets/img/2.jpeg";

export const users = [
  {
    id: nanoid(),
    img: user_1,
    name: "Jimmie Lewis",
  },
  {
    id: nanoid(),
    img: user_2,
    name: "Mary Kyles",
  },
];
