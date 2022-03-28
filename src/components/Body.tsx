import Album from "./Album";
import { useContext, useState } from "react";
import DiscogsContext from "../data/DiscogsData";
import BarLoader from "./BarLoader/BarLoader";

const Body = () => {
  const { albums, onAdd } = useContext(DiscogsContext);

  const [isLoading, setIsLoading] = useState(false);

  return (
    <div>
      <div className="container my-12 mx-auto px-4 md:px-12">
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          {isLoading ? (
            <BarLoader speed={6} customText={"Loading..."} />
          ) : (
            albums.map(
              (e: {
                id: number;
                cover_image: string;
                title: string;
                year: number;
                masterId: number;
              }) => (
                <div
                  key={e.id}
                  className="my-1 px-1 w-full md:w-1/2 md:h-1/2 lg:my-4 lg:px-4 lg:w-1/3 lg:h-1/3"
                >
                  <Album
                    key={e.id}
                    id={e.id}
                    albumImage={e.cover_image}
                    albumName={e.title}
                    albumYear={e.year}
                    masterId={e.masterId}
                    album={e}
                    onAdd={onAdd}
                  />
                </div>
              )
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Body;
