import usersData from "./usersData";
interface TopCreators {
  username: string;
  name: string;
  picture: string;
}

const returnTopCreators = (number = 10) => {
  const topCreators: TopCreators[] = [];
  for (let i = 0; i < number; i++) {
    const name = usersData[i].name.first + " " + usersData[i].name.last;
    const username = usersData[i].login.username;
    const picture = usersData[i].picture.medium;
    topCreators[i] = { name, username, picture };
  }
  return topCreators;
};

export default returnTopCreators;
