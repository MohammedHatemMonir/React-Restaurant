import { v4 as uuidv4 } from "uuid";
import Emotions from "./Emotions";
// To Generate a random ID
const randomId1 = uuidv4();
const randomId2 = uuidv4();
const randomId3 = uuidv4();
const randomId4 = uuidv4();
const randomId5 = uuidv4();
const RandomIDS = () => {
  return (
    <Emotions
      id1={randomId1}
      id2={randomId2}
      id3={randomId3}
      id4={randomId4}
      id5={randomId5}
    />
  );
};

export default RandomIDS;
