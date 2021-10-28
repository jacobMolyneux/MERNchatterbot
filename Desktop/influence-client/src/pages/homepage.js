import Container from "react-bootstrap/Container";
import { UserCard } from "../components/userCard";
import joe from "../images/joe.jpg";
import lauren from "../images/lauren.jpg";
import Mike from "../images/Mike.jpg";
import Steven from "../images/Steven.jpg";
import Beth from "../images/Beth.jpg";

const Homepage = () => {
  return (
    <div>
      <h1>Influence</h1>
      <Container>
        <UserCard name="Mike" image={Mike} />
        <UserCard name="Joe" image={joe} />
        <UserCard name="Lauren" image={lauren} />
        <UserCard name="Steven" image={Steven} />
        <UserCard name="Beth" image={Beth} />
      </Container>
    </div>
  );
};
export { Homepage };
