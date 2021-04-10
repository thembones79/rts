import { useState } from "react";
import { Input, Button, Container } from "@chakra-ui/react";

const users = [
  { name: "Sarah", age: 20 },
  { name: "Alex", age: 20 },
  { name: "Michael", age: 20 },
];

const UserSearch: React.FC = () => {
  const [name, setName] = useState("");
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();
  const onClick = () => {
    const foundUser = users.find((user) => {
      return user.name === name;
    });
    setUser(foundUser);
  };
  return (
    <Container>
      <h1>User Search</h1>
      <Input value={name} onChange={(e) => setName(e.target.value)} />
      <Button onClick={onClick}>Find User</Button>
      <div>
        {user && user.name}
        {user && user.age}
      </div>
    </Container>
  );
};

export default UserSearch;
