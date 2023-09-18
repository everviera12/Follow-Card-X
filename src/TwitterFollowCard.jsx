import { useState } from "react";

// Componente de tarjeta de seguimiento de Twitter
export function TwitterFollowCard({ children, userName, initialIsFollowing }) {
  // Definir una variable de estado 'isFollowing' para rastrear si el usuario está siguiendo algo.
  // 'initialIsFollowing' se utiliza como valor inicial.
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

  console.log("[TwitterFollowCard] render with userName: ", userName);

  // Definir el texto del botón y las clases en función del estado de seguimiento.
  const text = isFollowing ? "Siguiendo" : "Seguir";
  const buttonClassName = isFollowing
    ? "tw-followCard-button is-following"
    : "tw-followCard-button";

  // Manejar el clic en el botón para alternar el estado de seguimiento.
  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          alt="El avatar de midudev"
          src={`https://unavatar.io/${userName}`}
        />
        <div className="tw-followCard-info">
          <strong>{children}</strong>
          <span className="tw-followCard-infoUserName">@{userName}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          <span className="tw-followCard-text">{text}</span>
          <span className="tw-followCard-stopFollow">Dejar de seguir</span>
        </button>
      </aside>
    </article>
  );
}
