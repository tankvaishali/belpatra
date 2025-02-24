import React from "react";


const Homeservice = () => {
  let servicedata = [
    {
      name: "WHO - GMP complaint third party manufacturing",
      content:
        "We are best known in the market for providing WHO-GMP compliant third party manufacturing, regulatory support, manufacturing and packaging services and for various types of pharmaceutical products.",
      src: require("../../Assets/Images/home-version-three-revenue-traffiic-icon4.png")
    },
    {
      name: "Generic Drugs",
      content:
        "Belpatra Pharmachem is one of the largest generic pharmaceutical companies in India manufacturing generic drugs and has a prominent presence in various developing markets around the world.",
      src: require("../../Assets/Images/home-version-three-revenue-traffiic-icon1.png")
    },
    {
      name: "Contract Manufacturing",
      content:
        "Belpatra Pharmachem leverages its cost base in India combined with its extensive experience and technology platforms to provide high quality, competitive custom manufacturing services to a global client base. The facility has been inspected by multiple international regulatory bodies, including GMP, WHO and ISO certificates.",
      src: require("../../Assets/Images/home-version-three-revenue-traffiic-icon2.png")
    }
  ];

  return (
    <>
      <div className="service_bg w-100  py-4">
        <div className="container py-5">
          <div>
            <h1
              className="titletext text-center pb-3 text-white mx-auto"
              data-aos="zoom-in"
              data-aos-delay="50"
              data-aos-duration="1800"
            >
              Our Services
            </h1>
            <div className="pera text-secondary py-3 text-center fw-medium pt-4">
              Belpatra Pharmachem is one of the largest contract manufacturers of
              tablets, capsules, liquids, ointments, and creams in India today.
              Our strong consumer associations, quality pharmaceuticals, and
              trusted certification make us a trusted global generic brand.
            </div>

            <div className="row g-3 g-lg-5 d-flex justify-content-center align-items-stretch my-4 text-white">
              {servicedata.map((x, i) => {
                return (
                  <div key={i} className="col-12 col-md-6 col-lg-4" >
                    <div className="h-100 d-flex flex-column text-center">
                      <div className="cardcss p-4 flex-grow-1">
                        <div class="serviceicon ">
                 <img src={x.src} alt="" className="img-fluid"/>
                        </div>
                        <h5 className=" pinkcolor fw-medium py-3">{x.name}</h5>
                        <p className="pera ">{x.content}</p>
                        
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homeservice;
