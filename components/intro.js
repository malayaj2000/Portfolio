import React from 'react'
import "tailwindcss/dist/base.css";
import styles from '../styles/Home.module.css'
function Intro() {
    return (
        <>

            <div className="col-start-5 col-span-5">
                <div className={styles.card}>
                    <h2 className="font-serif">Machine Learning Engineer & Software Developer</h2>
                    <hr />
                    <div>
                    <h2>B.Tech. | NIT Rourkela</h2>
                    <h3>3rd Year, Electronics & Communication Engg.</h3> 
                    <h3>DOB: 18 July 2000</h3>
                    <h3>Contact: +91 9439444441</h3> 
                    <h3>Email.:malayajrath@gmail.com</h3> 
                    </div>

                </div>
            </div>

        </>
    )
}

export default Intro
