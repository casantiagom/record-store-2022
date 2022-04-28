import axios from "axios";
import React, { useState, useEffect, createContext, FC } from "react";

const DiscogsContext = createContext<any>({});

export const discogs = axios.create({
  baseURL: "https://api.discogs.com",
  headers: {
    Authorization: "Discogs token=BNTbCmOagQriqBkNjkQFSnvZgxLvFyIjlRCDANoK",
  },
});

export const DiscogsProvider: FC = ({ children }) => {
  const [albums, setAlbums] = useState<any[]>([]);
  const [keyword, setKeyword] = useState(["radiohead"]);
  const [albumDetail, setAlbumDetail] = useState<any>([]);
  const [albumId, setAlbumId] = useState([""]);
  const [cartItems, setCartItems] = useState<any>([]);
  const [localCart, setLocalCart] = useState<any>([]);

  const onAdd = (album: any) => {
    const exist = cartItems.find((x: any) => x.id === album.id);

    if (exist) {
      setCartItems(
        cartItems.map((x: { id: number }) =>
          x.id === album.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...album, qty: 1 }]);
    }
  };

  const onRemove = (album: any) => {
    const exist = cartItems.find((x: any) => x.id === album.id);
    if (exist) {
      setCartItems(cartItems.filter((item: any) => item.id != album.id));
    }
  };

  const onMinus = (album: any) => {
    const exist = cartItems.find((x: any) => x.id === album.id);
    if (exist && exist.qty != 0) {
      setCartItems(
        cartItems.map((x: { id: number }) =>
          x.id === album.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  useEffect(() => {
    const cartItemsData = JSON.parse(localStorage.getItem("cartItems") || "");

    if (cartItemsData) {
      setCartItems(cartItemsData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    discogs
      .get(`/database/search?artist=${keyword[0]}&type=masters`)

      .then((res) => {
        setAlbums(res.data.results);
      })

      .catch((e) => {
        console.log("error API call");
      });
  }, [keyword]);

  return (
    <DiscogsContext.Provider
      value={{
        albums,
        setAlbums,
        keyword,
        setKeyword,
        albumDetail,
        setAlbumDetail,
        albumId,
        setAlbumId,
        cartItems,
        setCartItems,
        onAdd,
        localCart,
        setLocalCart,
        onMinus,
        onRemove,
      }}
    >
      {children}
    </DiscogsContext.Provider>
  );
};

export default DiscogsContext;
