import react from "react";
import "../styles/CardSlider.css";
export default function CardSlider() {
  return (
    <>
      <div className="scrolling-header">Latest News</div>
      <div class="scrolling-wrapper">
        <div class="card">
          <img
            class="card-img-top"
            src={
              require("./img/michael-dziedzic-0XkLAIrknco-unsplash 7.png")
                .default
            }
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        <div class="card">
          <img
            class="card-img-top"
            src={
              require("./img/michael-dziedzic-0XkLAIrknco-unsplash 7.png")
                .default
            }
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        <div class="card">
          <img
            class="card-img-top"
            src={
              require("./img/michael-dziedzic-0XkLAIrknco-unsplash 7.png")
                .default
            }
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        <div class="card">
          <img
            class="card-img-top"
            src={
              require("./img/michael-dziedzic-0XkLAIrknco-unsplash 7.png")
                .default
            }
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        <div class="card">
          <img
            class="card-img-top"
            src={
              require("./img/michael-dziedzic-0XkLAIrknco-unsplash 7.png")
                .default
            }
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
