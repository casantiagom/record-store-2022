import axios from "axios";
import { Link } from "react-router-dom";

const discogs = axios.create({
  baseURL: "https://api.discogs.com",
  headers: {
    Authorization: "Discogs token=BNTbCmOagQriqBkNjkQFSnvZgxLvFyIjlRCDANoK",
  },
});

const Album = (props: any) => {
  return (
    <Link to={`/albums/${props.id}`}>
      <article className="overflow-hidden rounded-lg shadow-lg">
        <img
          alt="Placeholder"
          className="block h-auto w-full object-cover"
          src={props.albumImage}
        />

        <header className="flex items-center justify-between leading-tight p-2 md:p-4">
          <h1 className="text-xl">
            <div className="no-underline hover:underline text-black">
              {props.albumName}
            </div>
          </h1>
        </header>

        <footer className="flex items-center justify-between leading-none p-2 md:p-4">
          <p className="ml-2 text-sm" id="year">
            Year: {props.albumYear}
          </p>
        </footer>
      </article>
    </Link>
  );
};

export default Album;
