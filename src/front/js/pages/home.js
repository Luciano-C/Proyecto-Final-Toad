import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Card } from "../component/card";
import { Carousel } from "../component/carousel";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const { page } = useParams();

  useEffect(() => {
    actions.getMascotas();
  }, []);

  return (
    <div className="text-center">
      <div className="carousel">
        <Carousel />
      </div>
      <div className="row">
        {store.mascotas
          .slice(!page ? 0 : Number(page) * 8 - 8, !page ? 8 : Number(page) * 8)
          .map((objeto, index) => (
            <Card
              key={index}
              objeto={objeto}
              index={page ? 8 * Number(page) - 8 + index : index}
            />
          ))}
      </div>
      <div className="page">
        <nav aria-label="page">
          <div className="d-flex flex-column align-items-center">
            <ul
              className="pagination justify-content-around"
              style={{ width: "20%" }}
            >
              {page && Number(page) > 1 ? (
                <Link to={`${Number(page) - 1}`}>Previous</Link>
              ) : (
                <p>Previous</p>
              )}

              {store.paginasHome.map((x, i) => (
                <Link key={i} to={page ? `${x}` : `home/page/${x}`}>
                  {x}
                </Link>
              ))}

              {page && Number(page) < Math.ceil(store.mascotas.length / 8) ? (
                <Link to={`${Number(page) + 1}`}>Next</Link>
              ) : !page && store.paginasHome.includes(2) ? (
                <Link to={`home/page/${2}`}>Next</Link>
              ) : (
                <p>Next</p>
              )}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};
