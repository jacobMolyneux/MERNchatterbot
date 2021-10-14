import { UserCard } from "./components/userCard";
import ashleyImage from "./components/peopleImages/ashley.jpg";
import BrianImage from "./components/peopleImages/Brian.jpg";
import OliviaImage from "./components/peopleImages/Olivia.jpg";
import Row from "react-bootstrap/Row";

const Homepage = () => {
  return (
    <div id="homepageContainer">
      <Row xs={1} md={2} className="g-3">
        <UserCard name="Ashley" image={ashleyImage} />
        <UserCard name="Brian" image={BrianImage} />
        <UserCard name="Olivia" image={OliviaImage} />
      </Row>
    </div>
  );
};
export { Homepage };
