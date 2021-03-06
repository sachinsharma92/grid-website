import Link from "next/link";
import React from "react";
import ButtonOutline from "../../common/buttonOutline";
import Split from "../Split";

const serviceList = [
  {
    title: 'Design Audit',
    imgUrl: 'https://images.unsplash.com/photo-1566796215784-fa1dad4e559e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia optio dolore, quaerat fugiat consequuntur debitis provident.'
  },
  {
    title: 'UX/UI design',
    imgUrl: 'https://images.unsplash.com/photo-1535928968605-9418aa1e574c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia optio dolore, quaerat fugiat consequuntur debitis provident.'
  },
  {
    title: 'Branding',
    imgUrl: 'https://images.unsplash.com/photo-1516146544193-b54a65682f16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia optio dolore, quaerat fugiat consequuntur debitis provident.'
  },
  {
    logo: 'img/sb-log.svg',
    extraDescription: 'Building beautyful and scalable web and mobile applications',
    title: 'Development',
    imgUrl: 'https://images.unsplash.com/photo-1532681022781-73c806c845b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia optio dolore, quaerat fugiat consequuntur debitis provident.'
  }
]

const OurServicesComponent = () => {
  return (
    <section className="our-services-component">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="intro">
              <Split>
                <h2
                  className="extra-title wow words chars splitting d-flex align-items-end"
                  data-splitting
                >
                  Our Services <span className="text-theme" style={{ bottom: 16, left: 5 }} />
                </h2>
              </Split>
              <div className="sub-title">
                <h6>Beyond just design, creating value at all stages of the product journey.</h6>
              </div>
            </div>
          </div>

          <div className="col-sm-12">
            <div className="typo-grid">
              {serviceList.map((item) => (
                <div className="item">
                  <a className="link">
                    <h1 className="h1">{item.title}</h1>
                    <img className="content-img" src={item.imgUrl} alt="img1" />
                  </a>
                  <div className="content-right">
                    {item.extraDescription && <><img className="logo-img" src={item.logo} alt="img1" />
                      <p className="extra-description">
                        {item.extraDescription}
                      </p></>}
                    <p className="description">
                      {item.description}
                    </p>
                    <Link href="/blog-details/blog-details-dark">
                      <a className="read-more mt-20 cursor-pointer"> <span>Read More</span>
                        <img src="img/long-right-arrow.svg" className="img-style" alt="" /></a>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="info-msg">
              <div className="">
                <h4 className="title4">
                  Love reading? <br /> We???ve got more.
                </h4>
                <ButtonOutline buttonText="View our services" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServicesComponent;
