import React from "react";
import "./HomeWrapper.css";
import service1 from "../../assets/images/service.png";
import service2 from "../../assets/images/service-02.png";
import service3 from "../../assets/images/service-03.png";
import service4 from "../../assets/images/service-04.png";
import service5 from "../../assets/images/service-05.png";

const HomeWrapper = () => {
    return (
        <div className="services">
            <div className="service-item">
                <img src={service1} alt="Free Shipping" />
                <div>
                    <h4>Free Shipping</h4>
                    <p>From all orders over $5</p>
                </div>
            </div>
            <div className="service-item">
                <img src={service2} alt="Daily Surprise Offers" />
                <div>
                    <h4>Daily Surprise Offers</h4>
                    <p>Save up to 25% off</p>
                </div>
            </div>
            <div className="service-item">
                <img src={service3} alt="Support 24/7" />
                <div>
                    <h4>Support 24/7</h4>
                    <p>Shop with an expert</p>
                </div>
            </div>
            <div className="service-item">
                <img src={service4} alt="Affordable Prices" />
                <div>
                    <h4>Affordable Prices</h4>
                    <p>Get Factory Default Price</p>
                </div>
            </div>
            <div className="service-item">
                <img src={service5} alt="Secure Payments" />
                <div>
                    <h4>Secure Payments</h4>
                    <p>100% Protected Payment</p>
                </div>
            </div>
        </div>
    );
};

export default HomeWrapper;
