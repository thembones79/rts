import { Component } from "react";
import { Input, Button, Container } from "@chakra-ui/react";

interface User {
  name: string;
  age: number;
}

interface UserSearchProps {
  users: User[];
}

interface UserSearchState {
  name: string;
  user: User | undefined;
}

class UserSearch extends Component<UserSearchProps> {
  state: UserSearchState = {
    name: "",
    user: undefined,
  };

  onClick = () => {
    const foundUser = this.props.users.find((user) => {
      return user.name === this.state.name;
    });
    this.setState({ user: foundUser });
  };

  render() {
    const { name, user } = this.state;
    return (
      <Container>
        <h1>User Search</h1>
        <Input
          value={name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <Button onClick={this.onClick}>Find User</Button>
        <div>
          {user && user.name}
          {user && user.age}
        </div>
      </Container>
    );
  }
}

export default UserSearch;
