import Album from "./Album";
import {
  ReactChild,
  ReactFragment,
  ReactPortal,
  useContext,
  useEffect,
  useState,
} from "react";

import DiscogsContext from "../data/DiscogsData";
import { discogs } from "../data/DiscogsData";
import { useParams } from "react-router-dom";
import BarLoader from "./BarLoader/BarLoader";

const AlbumDetail = (props: any) => {
  const { id } = useParams();
  const { albumDetail, setAlbumDetail, onAdd, cartItems, setCartItems } =
    useContext(DiscogsContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      setIsLoading(true);
      discogs
        .get(`/masters/${id}`)

        .then((res) => {
          setAlbumDetail(res.data);

          setIsLoading(false);
        })
        .catch((e) => {
          console.log("error albumId call");
          if (e.response.status === 404) {
            window.location.href = "/notfound";
            return;
          }
        });
    };
    fetchData();
  }, []);

  return isLoading ? (
    <BarLoader speed={6} customText={"Loading..."} />
  ) : (
    <div>
      <div className="container my-12 px-4 md:px-12 flex flex-wrap mx-auto ">
        <div className="flex-initial max-h-[600px] mx-10 my-7">
          <img
            alt="Placeholder"
            className="block  object-contain"
            src={albumDetail?.images[0].resource_url}
          />
        </div>

        <div
          className="max-w-[600px] my-7
         h-fit   rounded overflow-hidden w-auto shadow-lg  flex-auto flex"
        >
          <div className="px-6 py-4  ">
            <div className="font-bold text-xl mb-8">
              {albumDetail?.title}
              <div className="font-medium mb-4 ">
                Price: ${albumDetail?.lowest_price}
              </div>
              <button
                onClick={() => {
                  onAdd(albumDetail);
                  alert("Album Added");
                }}
                className="bg-peri-200 hover:bg-peri-100 text-white font-bold py-2 px-4 rounded"
              >
                Add to Cart
              </button>
            </div>
            <h2 className="font-bold text-lg mb-4">TrackList</h2>
            {albumDetail.tracklist.map((track: any) => (
              <p key={track.position} className="text-gray-700 text-base">
                {track.position}.-{}
                {track.title}
              </p>
            ))}
            <div className="flex items-center mt-10">
              <img
                className="w-11 h-11 rounded-full mr-4"
                src={albumDetail.artists[0].thumbnail_url}
                alt="Avatar of Jonathan Reinink"
              />
              <div className="text-sm">
                <p className="text-gray-900 leading-none">
                  {albumDetail.artists[0].name}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlbumDetail;
