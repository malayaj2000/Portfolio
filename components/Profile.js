import React from 'react'
import "tailwindcss/dist/base.css";
import styles from '../styles/Home.module.css'
import Image from "next/image";

function Profile() {
    return (
        <>
            <div className="col-start-2 col-span-3">
                <div className={styles.card}>
                    <div className="text-center">
                        <Image src={`/images/profile.png`} alt="profile" width={100} height={100} priority />
                    </div>
                    <hr></hr>
                    <h2 className="text-center font-serif"><strong>Malayaj Rath</strong></h2>
                </div>
            </div>
        </>
    )
}

export default Profile
