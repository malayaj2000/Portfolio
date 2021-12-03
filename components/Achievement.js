import React from 'react'
import "tailwindcss/tailwind.css";
import styles from "../styles/Home.module.css";


function Achievement() {
    return (
        <>
            <div className="col-start-5 col-span-5">
                <div className={styles.card}>
                    <h2 className="font-serif">Achievements/Certifications</h2>
                    <hr />
                    <div>
                        <ul className="mb-3">
                            <h3><strong><em> Winter Of Codes by DSC NSEC </em></strong></h3>
                            <hr />
                            <div>
                                Contributed to Rake_new2 library by adding feature of SpellCheck & Topic Modelling
                            </div>
                        </ul>
                        <ul className="mb-3">
                            <h3><strong><em> ABInBev, Maverick 2.0</em></strong></h3>
                            <hr />
                            <div>
                                Developed Flasked Based API for Translation & Summarization
                            </div>
                        </ul>
                        <ul className="mb-3">
                            <h3><strong><em> Machine Learning Coursera by Andrew Ng</em></strong></h3>
                            <hr />
                            <div>
                                Completed a course on ML offered by Stanford University.
                            </div>
                        </ul>
                        <ul className="mb-3" >
                            <h3><strong><em> Cadet, National Cadet Corps</em></strong></h3>
                            <hr />

                            <div>I have been part ofthe NCC and attended several campsthat
                                aim to develop character, discipline, leadership,and ideals
                                of selfless service.</div>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Achievement
