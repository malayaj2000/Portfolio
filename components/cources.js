import React from 'react'
import "tailwindcss/tailwind.css";
import styles from "../styles/Home.module.css";
function Cources() {
    return (
        <>
            <div className="col-start-2 col-span-3">
                <div className={styles.card}>
                    <h2 className="font-serif">Relevant Courses</h2>
                    <hr />
                    <ul className="px-6 pt-2">Data Structures & Algorithm</ul>
                    <ul className="px-6 pt-2" >Deep Neural Networks</ul>
                    <ul className="px-6 pt-2" >Backend Development</ul>
                    <ul className="px-6 pt-2" >Machine Learning</ul>
                    <ul className="px-6 pt-2" >Computer Vision</ul>
                    <ul className="px-6 pt-2 " >DBMS & PostgreSQL</ul>
                    <ul className="px-6 pt-2" >Image processing</ul>
                </div>
            </div>
        </>
    )
}

export default Cources
