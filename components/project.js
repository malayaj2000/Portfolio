import React from 'react'
import "tailwindcss/tailwind.css";
import styles from "../styles/Home.module.css";
function Project() {
    return (
        <>
            <div className="col-start-5 col-span-5">
                <div className={styles.card}>
                    <h2 className="font-serif">Project</h2>
                    <hr />
                    <div className="mt-4">
                        <ul>
                            <div className="mb-2">
                                <h3><strong><em>Translation & Summarization Web App</em></strong></h3>
                                <hr />
                                <div>
                                    Streamlit Based General NLP Web App for Translation, Summarization & language identification.
                                </div>
                                
                            </div>
                        </ul>

                        <ul>
                            <div className="mb-2">
                                <h3><strong><em>Face Recognition Project</em></strong></h3>
                                <hr />
                                <text>Recording Attendance of student using their facial landmark Encoding.</text>
                            </div>
                        </ul>
                        <ul>
                            <div className="mb-2" >
                                <h3><strong><em>Customer Dwelling Time</em></strong></h3>
                                <hr />
                                <text>Calculation of real‐time customer dwelling time
                                    in different sections of shop using deepSort and
                                    YoloV5.</text>
                            </div>
                        </ul>
                        <ul>

                            <div className="mb-2" >
                                <h3><strong><em>Image Denoising using Auto‐Encoder</em></strong></h3>
                                <hr />
                                <text>Denoising MNIST dataset images using Auto‐Encoder.</text>
                            </div>
                        </ul>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Project
