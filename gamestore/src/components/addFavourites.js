import { writeClient } from "../utils/sanity/client";
import { useState } from "react";
import { useParams } from "react-router-dom";

export default function AddFavourite() {
  const { id } = useParams();
  const [favourite, setFavourite] = useState([]);

  function saveFavourite(event) {
    event.preventDefault();

    const reviewObject = {
      _type: "user",
      navn: "John Doe",
      epost: "johndoe@example.com",
      favourite: ["Terraria", "dog"],
    };

    setFavourite([...favourite, reviewObject]);

    writeClient
      .patch(id)
      .set({ favourite: favourite })
      .commit({ autoGenerateArrayKeys: true })
      .then((r) => {
        console.log("Favourite saved");
      })
      .catch((error) => {
        console.log("Something went wrong: ", error.message);
      });
  }

  return (
    <div>
      <button onClick={saveFavourite}>Save Favourite</button>
    </div>
  );
}