import React from "react";
import "../../styles/our-member.css";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import ava01 from "../../assets/all-images/ava-1.jpg";
import ava02 from "../../assets/all-images/ava-2.jpg";
import ava03 from "../../assets/all-images/ava-3.jpg";

const OUR__MEMBERS = [
  {
    name: "Matheus Filipe Costa Mendes Machado",
    experience: "GRR 20197482",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "https://www.linkedin.com/in/matheus-filipe-costa-mendes-machado-9348341a3",
    imgUrl: ava01,
  },

  {
    name: "Murilo dos Santos  ",
    experience: "GRR 20197482",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava02,
  },

  {
    name: "Wenderson Patrick de Souza Costa",
    experience: "GRR 20193841",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava03,
  },

];

const OurMembers = () => {
  return (
    <>
      {OUR__MEMBERS.map((item, index) => (
        <Col lg="3" md="3" sm="4" xs="6" key={index} className="mb-4">
          <div className="single__member">
            <div className="single__member-img">
              <img src={item.imgUrl} alt="" className="w-100" />

              <div className="single__member-social">
                <Link to={item.fbUrl}>
                  <i class="ri-facebook-line"></i>
                </Link>
                <Link to={item.twitUrl}>
                  <i class="ri-twitter-line"></i>
                </Link>

                <Link target="_blank" to={item.linkedinUrl}>
                  <i class="ri-linkedin-line"></i>
                </Link>

                <Link to={item.instUrl}>
                  <i class="ri-instagram-line"></i>
                </Link>
              </div>
            </div>

            <h6 className="text-center mb-0 mt-3">{item.name}</h6>
            <p className="section__description text-center">
              {item.experience}
            </p>
          </div>
        </Col>
      ))}
    </>
  );
};

export default OurMembers;