"use client"
import RotateBoxModal from "@/component/RotateBoxModal";
import { IMAGES, SVGICON } from "@/constant/theme";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Modal } from "react-bootstrap";

const HeroBanner = () =>{
    const [modalOpen, setModalOpen] = useState(false);
    return(
        <>
            <div className="hero-banner style-3">
                <div className="container">
                    <div className="inner-wrapper">
                        <div className="row align-items-center h-100">
                            <div className="col-md-6">
                                <div className="hero-content">
                                    <h1 className="title wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">Skincare is Like A Workout For Your Skin</h1>
                                    <div className="content-bx style-2 secondary m-b40 wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
                                        Experienced staff is dedicated to improving our patients’ dental health and enhancing
                                    </div>
                                    <div className="d-flex">
                                        <Link href="/appointment" className="btn btn-lg btn-icon btn-primary wow fadeInUp" data-wow-delay="0.6s" data-wow-duration="0.8s">
                                            Appointment
                                            <span className="right-icon"><i className="feather icon-arrow-right" /></span>
                                        </Link>
                                        <div className="avatar-group m-l50 wow fadeInUp" data-wow-delay="0.8s" data-wow-duration="0.8s">
                                            <Image className="avatar avatar-lg rounded-circle" src={IMAGES.smallavatar1} alt="avatr1" />
                                            <Image className="avatar avatar-lg rounded-circle" src={IMAGES.smallavatar2} alt="avatr2" />
                                            <Image className="avatar avatar-lg rounded-circle" src={IMAGES.smallavatar3} alt="avatr3" />
                                            <Image className="avatar avatar-lg rounded-circle" src={IMAGES.smallavatar4} alt="avatr4" />
                                            <Link href="/about-us" className="avatar btn btn-square btn-lg btn-white btn-shadow btn-rounded"
                                                dangerouslySetInnerHTML={{__html : SVGICON.arrowup}}
                                            >                                                                                            
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 align-self-end wow fadeInRight" data-wow-delay="0.8s" data-wow-duration="0.8s">
                                <div className="hero-thumbnail" data-bottom-top="transform: translateY(-50px)" data-top-bottom="transform: translateY(50px)">
                                    <Image className="thumbnail" src={IMAGES.herobanner} alt="thumb" />
                                    <div className="item5" data-bottom-top="transform: translateY(-50px)" data-top-bottom="transform: translateY(50px)">
                                        <Link 
                                            href="#" scroll={false}
                                            onClick={() => setModalOpen(true)} 
                                            className="popup-youtube" 
                                        >
                                            <RotateBoxModal />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item1">
                            <div className="widget-rating1">
                                <ul className="star-list">
                                    <li><i className="fa fa-star" /></li>
                                    <li><i className="fa fa-star" /></li>
                                    <li><i className="fa fa-star" /></li>
                                    <li><i className="fa fa-star" /></li>
                                    <li><i className="fa fa-star" /></li>
                                </ul>
                                <span className="rating text-primary m-r5">(4.8)</span>
                                <span className="text">12k+ ratings on google</span>
                            </div>
                        </div>
                        <div className="item2 move-3" data-bottom-top="transform: translateY(-50px)" data-top-bottom="transform: translateY(50px)">
                            <div className="dz-media2">
                                <Image src={IMAGES.herobanner2} alt="item2" />
                            </div>
                        </div>
                        <div className="item3 move-3" data-bottom-top="transform: translateY(-50px)" data-top-bottom="transform: translateY(50px)">
                            <Image src={IMAGES.herobanner3} alt="item3" />
                        </div>
                        <div className="item4" data-bottom-top="transform: translateY(-50px)" data-top-bottom="transform: translateY(50px)">
                            <Image src={IMAGES.herobanner4} alt="item4" />
                        </div>                   
                        <svg className="shape1" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg"
                            dangerouslySetInnerHTML={{__html :  SVGICON.shape1}}
                        >
                        </svg>
                        <svg className="shape2" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg" 
                            dangerouslySetInnerHTML={{__html :  SVGICON.shape2}}>
                        </svg>
                    
                    </div>
                </div>
                <div className="vertical-info left">
                    <ul className="social-list">
                        <li><Link href="#/" target="_blank">Instagram</Link></li>
                        <li><Link href="#" target="_blank">Facebook</Link></li>
                        <li><Link href="#" target="_blank">twitter</Link></li>
                    </ul>
                    <Link href={"#"} scroll={false} className="btn btn-white btn-sm px-2 py-3 btn-shadow rounded">LET’S TALK</Link>
                </div>
                <div className="banner-shape4"></div>
                <div className="banner-shape5"></div>
                <div className="banner-shape6"></div>
            </div>
            <Modal show={modalOpen} onHide={()=>setModalOpen(false)} centered  size={"lg"} className="video-model">                           
                <video controls style={{width:"100%"}} autoPlay>
                    <source src="/assets/images/demo.mp4" type="video/mp4" />
                </video>
            </Modal>
        </>
    )
}
export default HeroBanner;