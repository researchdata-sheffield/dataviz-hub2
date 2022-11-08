import { React, useState, useEffect } from "react";

export const useFetch = (url, json = true) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      await fetch(url)
        .then((res) => {
          if (!res.ok) {
            console.log(res);
            throw Error("Response is not ok.");
          }
          if (!json) {
            return res.text();
          }
          return res.json();
        })
        .then((resData) => {
          setData(resData);
        })
        .catch((err) => {
          window.alert("Cannot fetch the required data for the current page.");
          console.log(err);
        });

      setLoading(false);
    };

    fetchData();
  }, [url, json]);

  return [loading, data];
};

export const loadingLayer = () => {
  return (
    <div
      style={{
        position: "fixed",
        height: "100vh",
        width: "100vw",
        top: 0,
        left: 0,
        zIndex: "900",
        background:
          "linear-gradient(293deg, rgba(185, 78, 99, .8) 15%, rgba(153, 172, 76, .8), rgba(28, 135, 164, .8), rgba(43, 255, 136, .8))",
        backgroundSize: "400% 400%",
        animation: "AnimateBackground 15s ease infinite",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <h1 style={{ fontWeight: "600" }}>Loading data, please wait ...</h1>
    </div>
  );
};
