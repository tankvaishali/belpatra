import React from "react";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
// import TittlesAll from "./TittlesAll";

function Team() {
    const teamMembers = [
        {
            name: "Team 1",
            post: "Inhaber & Geschäftsführer",
            imgSrc: require("../../Assets/Images/teammember.jpg"),
            aos: "fade-right",
            delay: ""
        },
        {
            name: "Team 2",
            post: "Stellvertretender",
            imgSrc: require("../../Assets/Images/teammember.jpg"),
            aos: "fade-up",
            delay: "400"
        },
        {
            name: "Team 3",
            post: "Dipl. Physiotherapeut",
            imgSrc: require("../../Assets/Images/teammember.jpg"),
            aos: "fade-down",
            delay: "800"
        },
        {
            name: "Team 4",
            post: "Dipl. Physiotherapeut",
            imgSrc: require("../../Assets/Images/teammember.jpg"),
            aos: "fade-left",
            delay: "1200"
        },
    ];

    return (
        <>
            <div className="team_bg_image py-1 py-md-5 overflow-hidden">
                <div className="our-team-section position-relative py-5 my-5">
                    <div className="container">
                        <div className="text-center">
                            
                                <h1
              className="titletext mx-auto fstyle pb-2  "
              data-aos="zoom-in"
              data-aos-duration="1500"
              data-aos-once="true"
            >
             Our Team
            </h1>       
                            <div className="pera py-3" data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur eaque fuga quisquam praesentium quibusdam quae suscipit nulla id laboriosam mollitia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis deleniti ratione et illum quam sit aspernatur facere assumenda sed unde.</div>
                        </div>
                        <div className="row mt-5 overflow-hidden">
                            {teamMembers.map((member, index) => (
                                <div className="col-lg-3 col-md-6 col-sm-6 " key={index} data-aos={member.aos} data-aos-duration="1800" data-aos-delay={member.delay} data-aos-once="true">
                                    <div className="our-team text-center overflow-hidden position-relative bg-light">
                                        <div className="pic d-inline-block mb-5 z-1 position-relative">
                                            <img
                                                src={member.imgSrc}
                                                alt={member.name}
                                                className="position-relative z-2"
                                            />
                                        </div>
                                        <div className="team-content">
                                            <h3 className="title jr_tittle">{member.name}</h3>
                                            <span className=" pera">{member.post}</span>
                                        </div>
                                        <ul className="social p-2 m-0 text-white position-absolute d-flex justify-content-evenly fs-4">
                                            <li>
                                                <Link to={"/"} className="text-decoration-none social_about d-flex align-content-center align-items-center justify-content-center p-1">   <FaFacebook /></Link>
                                            </li>
                                            <li>
                                                <Link to={"/"} className="text-decoration-none social_about d-flex align-content-center align-items-center justify-content-center p-1">   <AiFillTwitterCircle /></Link>
                                            </li>
                                            <li>
                                                <Link to={"/"} className="text-decoration-none social_about d-flex align-content-center align-items-center justify-content-center p-1">  <FaLinkedin /></Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Team;