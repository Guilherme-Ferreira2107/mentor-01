import img01 from "./assets/images/01.jpg";
import img02 from "./assets/images/03.jpg";
import sharedIcon from "./assets/images/icon-share.svg";

function App() {
  return (
    <div className="container">
      <div className="cols-left">
        <img src={img01} alt="" />
      </div>
      <div className="cols-right">
        <div className="title">
          <h1>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium
          </h1>
        </div>
        <div className="text">
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
          </p>
        </div>
        <div className="shared">
          <div className="cols-left">
            <img src={img02} alt="" />
            <div>
              <b>Guilherme Santos</b>
              <small>21 Jun 1995</small>
            </div>
          </div>
          <div className="cols-right">
            <img src={sharedIcon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
