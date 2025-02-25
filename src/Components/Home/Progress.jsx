import React, { useEffect, useRef } from 'react';


const Progress = () => {
    const progressBars = [
        { label: "quality control (QC) and assurance (QA)", percentages: "99%", percentage: 99 },
        { label: "Pharmaceutical Excellence Achieved", percentages: " 90%", percentage: 90 },
        { label: "Clinical Trial Safety Evaluation", percentages: "95% ", percentage: 95 },
       
      ];
    
      const progressRefs = useRef([]);
    
      useEffect(() => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                const bar = entry.target;
                const percentage = bar.getAttribute("data-percentage");
                bar.style.width = `${percentage}%`;
              }
            });
          },
          {
            threshold: 0.1,
          }
        );
    
        progressRefs.current.forEach((ref) => {
          if (ref) {
            observer.observe(ref);
          }
        });
    
    
      }, []);
  return (
   <>
   <div className="mb-5 pb-5 overflow-hidden">
    <div className="container py-5">
        <div className="row">
        <div
              className="col-12 col-md-6 p-0 m-0 "
              data-aos="fade-right"
              data-aos-duration="1600"
              data-aos-once="true"
            >
              <div className="h-100 allimg">
                <div className="desc1"></div>
                <img
                  src={require("../../Assets/Images/whychooseus_image.jpeg")}
                  alt="not found"
                  className="img-fluid w-100 h-100  object-fit-cover"
                />
              </div>
            </div>

            <div
              className="col-12 col-md-6 p-0 m-0 product_high "
              data-aos="fade-left"
              data-aos-duration="1600"
              data-aos-once="true"
            >
              <div className="h-100 p-5 d-flex flex-column justify-content-between">
              <h1
              className="titletext text-white pb-2"
              data-aos="zoom-in"
             data-aos-once="true"
              data-aos-duration="1500"
            >
             Distinguished Solutions
            </h1>
            <p className='pera text-secondary fw-medium' data-aos="fade-up"
              
              data-aos-duration="1500"
              data-aos-once="true">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere in, est nam a obcaecati autem impedit qui sequi eveniet ex. est nam a obcaecati autem impedit qui sequi eveniet ex.
            </p>
                <div className="pt-1">
                  {progressBars.map((bar, index) => (
                    <div key={index} className="mb-4 text-white">
                      <div className="d-flex justify-content-between">
                        <div className='pb-1 text-capitalize'>
                          {bar.label}
                        </div>
                        <div className="text-end">{bar.percentages}</div>
                      </div>
                      <div
                        className="progress rounded-0 barshadow"
                        style={{ height: "20px",backgroundColor:"#ffffffa8" }}
                      >
                        <div
                          ref={(el) => (progressRefs.current[index] = el)}
                          className="progress-bar "
                          role="progressbar"
                          style={{
                            width: "0%",
                            backgroundImage:"var(--bgcolor)",
                            //   "linear-gradient(to right, var(--darkgreen--), var(--green--), var(--white--))",
                            transition: "width 1s ease-in-out",
                          }}
                          aria-valuenow={bar.percentage}
                          aria-valuemin="0"
                          aria-valuemax="100"
                          data-percentage={bar.percentage}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
            
              </div>
            </div>
        </div>
    </div>
   </div>
   </>
  );
}

export default Progress;
