import React from "react";
import Layout from '@/components/Layout';
import '../../styles/main.css';

const Projects = () => {
  return (
    <Layout>
      <div>
        <div>
          <div>
            <h1 className="container">
              Projects
            </h1>
            <p className="centerAlignImage">Check out some of my recent work!</p>
          </div>
          <hr />

          <div className="centerAlignImage">

            <div className="content-div">
              <div className="centerAlignImage">
                <h3> # Plant Disease Detection</h3>
                <p>Flutter Application based on ML.</p>
                <div>
                  <a href="/projects">
                    <button>
                      Demo
                    </button>
                  </a>
                  <a target="blank" href="https://github.com/tanujbordikar/plant_disease">
                    <button>
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>

            <div className="content-div">
              <div className="centerAlignImage">
                <h3># Travelogue</h3>
                <p>An MERN-based Application.</p>
                <div>
                  <a href="/projects">
                    <button>
                      Demo
                    </button>
                  </a>
                  <a target="blank" href="https://github.com/tanujbordikar/travelogue_frontend">
                    <button>
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>

            <div className="content-div">
              <div className="centerAlignImage">
                <h3># My Portfolio</h3>
                <p>Created with Next.js and Sanity.</p>
                <div>
                  <a href="/">
                    <button>
                      Demo
                    </button>
                  </a>
                  <a target="blank" href="https://github.com/tanujbordikar/mywebsite">
                    <button>
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;