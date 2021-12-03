import React from 'react'
import "tailwindcss/tailwind.css";
import styles from "../styles/Home.module.css";

function Skill() {
  return (
    <>
      <div className="col-start-2 col-span-3">
        <div className={styles.card}>
          <h2 className="font-serif">Skills</h2>
          <hr />
          <div className="mt-2">
            <ul className="mb-3">
              <h3>GENERAL PROGRAMMING</h3>
              <hr />
              <li className="px-6">c++</li>
              <li className="px-6">python</li>
            </ul>
            <ul className="mb-3">
              <h3>OPERATING SYSTEMS</h3>
              <hr />
              <li className="px-6">linux</li>
              <li className="px-6">windows</li>
            </ul>
            <ul className="mb-3">
              <h3>SOFTWARE</h3>
              <hr />
              <li className="px-6"> ROS </li>
              <li className="px-6">MATLAB</li>
            </ul>
            <ul className="mb-3">
              <h3>FRAMEWORKS</h3>
              <hr />
              <li className="px-6">Pytorch</li>
              <li className="px-6">Sklearn</li>
              <li className="px-6">Django</li>
              <li className="px-6">Streamlit</li>
            </ul>
          </div>

        </div>
      </div>
    </>
  )
}

export default Skill
