"use client"
import Link from "next/link";
import { teamdata } from "../constant/alldata";
import { useState } from "react";
import Image from "next/image";

function Teams() {
    const [hover, setHover] = useState(1);
    return (
        <>
            {teamdata.map((data, i) => (
                <div className="col-xl-3 col-sm-6 m-b30 wow fadeInUp" data-wow-delay={data.dealy} data-wow-duration="0.8s" key={i}>
                    <div className={`dz-team style-2 box-hover ${hover === data.id ? "active" : ""}`} onMouseEnter={() => setHover(data.id)}>
                        <div className="dz-content">
                            <h3 className="dz-name">
                                <Link href="/team-detail">{data.title}</Link>
                            </h3>
                            <span className="dz-position">Cardiac Surgery</span>
                        </div>
                        <div className="dz-media">
                            <Image src={data.image} alt="/" />
                            <Link href="/appointment" className="btn btn-primary"> <i className="feather icon-calendar m-r5" /> Appointment Now </Link>
                            <ul className="dz-social">
                                <li> <Link className="linkedin" href="#" target="_blank"> <i className="fa-brands fa-linkedin" /> </Link> </li>
                                <li> <Link className="instagram" href="#" target="_blank"><i className="fa-brands fa-instagram" /> </Link> </li>
                                <li> <Link className="facebook" href="#" target="_blank"><i className="fa-brands fa-facebook-f" /> </Link> </li>
                                <li> <Link className="x-twitter" href="#" target="_blank"><i className="fa-brands fa-x-twitter" /> </Link> </li>
                                <li> <Link className="youtube" href="#" target="_blank"><i className="fa-brands fa-youtube" /> </Link> </li>
                            </ul>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}
export default Teams;