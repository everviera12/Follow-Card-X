import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard.jsx";

const users = [
  {
    userName: "everviera12",
    name: "Ever Viera",
    isFollowing: true,
  },
  {
    userName: "Hermandell",
    name: "Pedro Salazar",
    isFollowing: false,
  },
  {
    userName: "tito_bonito",
    name: "Jorge Hdz",
    isFollowing: false,
  },
  {
    userName: "fazt",
    name: "Fazt Code",
    isFollowing: false,
  },
];

export function App() {
  return (
    <section className="App">
      {users.map(({ userName, name, isFollowing }) => (
        <TwitterFollowCard
          key={userName}
          userName={userName}
          initialIsFollowing={isFollowing}
        >
          {name}
        </TwitterFollowCard>
      ))}
    </section>
  );
}
