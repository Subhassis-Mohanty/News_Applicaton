import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const FetchData = ({ catagory }) => {
  const [Data, setData] = useState("");

  const fetchData = async () => {
    await axios
      .get(
        catagory
          ? `https://newsapi.org/v2/top-headlines?country=in&category=${catagory}&apiKey=010d7347524143198403f29b52ffbbc7`
          : "https://newsapi.org/v2/top-headlines?country=in&apiKey=010d7347524143198403f29b52ffbbc7"
      )
      .then((res) => setData(res.data.articles));
  };

  useEffect(() => {
    fetchData();
  }, [catagory]);

  return (
    <div className="container my-4 text-black">
      <h3>
        <u>Top Headlines</u>
      </h3>
      <div
        className="container my-4 d-flex justify-content-center align-items-center flex-column"
        style={{ minHeight: "100vh" }}
      >
        {Data
          ? Data.map((items, index) => (
              <>
                <div
                  className="container my-3 p-3"
                  style={{
                    width: "600px",
                    boxShadow: "2px 2px 10px silver",
                    borderRadius: "12px",
                  }}
                >
                  <h5 className="my-2">{items.title}</h5>
                  <div className=" d-flex justify-content-center align-items-center">
                    <img
                      src={items.urlToImage}
                      alt="Img not found"
                      className="img-fluid"
                      style={{
                        width: "500px",
                        height: "300px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <p className="my-1">{items.description}</p>
                  <Link to={items.url} target="_blank">
                    view more
                  </Link>
                </div>
              </>
            ))
          : "LOADING...."}
      </div>
    </div>
  );
};

export default FetchData;
