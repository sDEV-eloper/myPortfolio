
import React from "react";
import Arrow from '../../shared/arrow/Arrow'
import "./showcase.scss";

const Showcase = ({ data, transition }) => {
    return (
        <div className="projects-showcase">
            {data.map((project) => (
                <div
                    key={project.name}
                    className={`showcase-item ${
                        transition === "zoomOut"
                            ? "zoomOut"
                            : transition === "zoomIn"
                            ? "zoomIn"
                            : ""
                    }`}
                >
                    <div className="meta-content" onClick={() => { window.open(`${project.link}`, '_blank');  }}>
                        <h3>{project.name}</h3>
                        <span>{project.technologyUsed}</span>
                        <div className="go-to-cta">
                            <span className="text">{project.goto}</span>
                            <Arrow />
                        </div>
                    </div>
                    <img src={project.media.thumbnail} alt=""/>
                </div>
            ))}
        </div>
    );
};

export default Showcase;
