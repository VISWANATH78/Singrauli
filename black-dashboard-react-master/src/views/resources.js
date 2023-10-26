import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="text-center">
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Heading 1</h5>
                <p className="card-text">
                  Description of Heading 1 content.
                  <ul>
                    <li>
                      <a href="/link1">Link 1</a>
                    </li>
                    <li>
                      <a href="/link2">Link 2</a>
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Heading 2</h5>
                <p className="card-text">
                  Description of Heading 2 content.
                  <ul>
                    <li>
                      <a href="/link3">Link 3</a>
                    </li>
                    <li>
                      <a href="/link4">Link 4</a>
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Heading 3</h5>
                <p className="card-text">
                  Description of Heading 3 content.
                  <ul>
                    <li>
                      <a href="/link5">Link 5</a>
                    </li>
                    <li>
                      <a href="/link6">Link 6</a>
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
