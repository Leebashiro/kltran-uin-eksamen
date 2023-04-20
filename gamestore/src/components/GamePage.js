import GameCard from "./GameCard";

export default function GamePage({games}) {
    return (
        <>
        {games?.map((game) => (
            <GameCard 
              key={game.id} 
              name={game.name} 
              background_image={game.background_image} 
              slug={game.slug}
              api_id={game.api_id}
              playtime={game.playtime}
              genres={game.genres}
              is_favorite={game.is_favorite}
            />
          ))}
          </>
    )
}