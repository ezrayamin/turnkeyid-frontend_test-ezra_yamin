import React from 'react'
import AOS from 'aos'
import '../css/home.css'
import subheader_bg from '../asset/subheader_bg.jpg'
import 'aos/dist/aos.css'

import TopNavigation from '../components/navigation'

const HomePage = () => {
    React.useEffect(() => {
        AOS.init({
            duration: 4000
        })
    }, [])

    const servicesText = [
        {
            heading: 'Offshore Company Setup.',
            paragraph: 'Setup your offshore company at various offshore sites to start your broker business.'
        },
        {
            heading: 'Fully Branded MT4/MT5 Whitelabel',
            paragraph: 'With our services, you can incorporate MT4 and/or MT5 whitelabel with your own brand, to provide the most suitable trading platform for your clients.'
        },
        {
            heading: 'CRM',
            paragraph: 'Use our CRM to help your client manage their account, manage KYC, fund management, and receive reports. You can use the CRM to maintain and profile your customers data.'
        }
    ]

    const MapServices = () => {
        return (
            servicesText.map((text, index) => {
                return (
                    <div key={index} className="each-service">
                        <div className="service-header">
                            <h5 className="white-text">{text.heading}</h5>
                        </div>
                        <div className="service-paragraph">
                            <p className="white-text">{text.paragraph}</p>
                        </div>
                    </div>
                )
            })
        )
    }

    const contactText = [
        {
            iconClass: 'fas fa-phone',
            text: '+62-8123-1425-090'
        },
        {
            iconClass: 'fas fa-map-marker-alt',
            text: 'Biz Lofts uResidence Jl. Boulevard Diponegoro No. 105 Karawaci, Tangerang 15810'
        },
        {
            iconClass: 'fas fa-envelope',
            text: 'info@turnkey.id'
        }
    ]

    const MapContact = () => {
        return (
            contactText.map((contact, index) => {
                return (
                    <div key={index} className="each-contact">
                        <i className={contact.iconClass} style={{ color: 'orange', fontSize: '2em' }}></i>
                        <div className="contact-paragraph">
                            <p className="white-text">{contact.text}</p>
                        </div>
                    </div>
                )
            })
        )
    }

    return (
        <div className="home-body">
            <TopNavigation />
            <div className="motto-container">
                <h3 className="white-text">Crafting Your Fit-To-Market Broker Bussines .</h3>
            </div>
            <div className="centralize-content" data-aos="fade-up"
                data-aos-duration="3000">
                <div className="demo-wrap">
                    <img
                        className="demo-bg"
                        src={subheader_bg}
                        alt=""
                    />
                    <div className="demo-content">
                        <h3 className="subheader-text">Turnkey.id provides an all-in-one broker building service</h3>
                    </div>
                </div>
                <div data-aos="fade-right"  className="services-container">
                    <MapServices />
                </div>
                <i data-aos="fade-up" className="fas fa-user" id="profpic-testi"></i>
                <div data-aos="fade-up" className="testi-container">
                    <p className="white-text">“Machine learning is the future of modern technology, and by combining it with the application of the financial industry, it will prove interesting for stakeholders in the future.“</p>
                    <p className="white-text">-Suhartono</p>
                    <p className="subheader-text">VP Synergy Directorate Strategic and Portfolio Telkom Indonesia</p>
                </div>
                <div className="footer">
                    <h3 className="white-text">Get in Touch with Us</h3>
                    <div className="email-form">
                        <input placeholder="e-mail" />
                        <button className="button-input">request</button>
                    </div>
                </div>
                <div className="services-container">
                    <MapContact />
                </div>
                <div className="copyright">
                <p className="white-text">© Copyright 2020 Turnkey ID. All Rights Reserved.</p>
                </div>
            </div>
            {/* <Modal show={loginModal} onHide={!loginModal}>
                <LoginBox/>
            </Modal> */}
        </div>
    )
}
export default HomePage