import { useState } from "react";
import { Input, Button, Container, Text } from "@chakra-ui/react";

const users = [
  { name: "Sarah", age: 20 },
  { name: "Alex", age: 20 },
  { name: "Michael", age: 20 },
];

const EventComponent: React.FC = () => {
  const [name, setName] = useState("");
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();
  const onClick = () => {
    const foundUser = users.find((user) => {
      return user.name === name;
    });
    setUser(foundUser);
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value);

  const onDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    console.log(
      e.clientX,
      e.clientY,
      e.movementX,
      e.movementY,
      e.screenX,
      e.screenY,
      e.pageX,
      e.pageY,
      e.eventPhase
    );
  };
  return (
    <Container>
      <Text
        bgGradient="linear(to-l, #7928CA,#FF0080)"
        bgClip="text"
        fontSize="6xl"
        fontWeight="extrabold"
      >
        Event Component
      </Text>

      <div draggable onDragStart={onDragStart}>
        Drag Me!
      </div>
      <Input value={name} onChange={onChange} />
      <Button
        color="white"
        fontWeight="bold"
        borderRadius="md"
        bgGradient="linear(to-r, teal.500,green.500)"
        _hover={{
          bgGradient: "linear(to-r, red.500, yellow.500)",
        }}
        onClick={onClick}
      >
        Find User
      </Button>
      <div>
        {user && user.name}
        {user && user.age}
      </div>
    </Container>
  );
};

export default EventComponent;
