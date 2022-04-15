import React from "react";
import { motion } from "framer-motion";
import xSolid from "../images/x-solid.png";

function ExpandedCard(props) {
  return (
    <motion.div
      className="expandedCard"
      layoutId="expandableCard"
      transition={{ duration: 0.5 }}
      layout
    >
      <button className="btn-close" onClick={props.customClickEvent}>
        <img className="btn-image" src={xSolid} />
      </button>
      <motion.div layoutId="techStack" className="expanded-card-tech">
        {props.html && <p className="html">html</p>}
        {props.css && <p className="css">css</p>}
        {props.javascript && <p className="javascript">javascript</p>}
        {props.react && <p className="react">react</p>}
        {props.solidity && <p className="solidity">solidity</p>}
        {props.rust && <p className="rust">rust</p>}
        {props.node && <p className="node">node</p>}
        {props.express && <p className="express">express</p>}
        {props.mongoDB && <p className="mongoDB">mongoDB</p>}
      </motion.div>
      <motion.h2 className="expanded-card-title" layoutId="title">
        {props.title}
      </motion.h2>
      <div className="main-content-container">
        <div className="description">{props.description}</div>
        <div className="card-image-container">
          <motion.img className="card-image" src={props.thumbnail} />
        </div>
      </div>
      <div className="links">
        <div className="site-link-container">
          {props.url && (
            <a href={props.url} target="_blank" className="live-site-link">
              Live site
            </a>
          )}
          {props.metamask && (
            <div className="metamask">
              <p className="metamask-text">*requires MetaMask</p>
              <a href="https://metamask.io/" target="blank">
                <img
                  width="64"
                  src="https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg"
                />
              </a>
            </div>
          )}
        </div>
        {props.code && (
          <a href={props.code} target="_blank" className="code-link">
            Code
          </a>
        )}
        {props.video && <a>video</a>}
      </div>
    </motion.div>
  );
}

export { ExpandedCard };
