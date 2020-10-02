import React from "react";
import './ContactUsInfo.styled.scss';

const ContactUsInfo = () => {
    const dataInfo = [
        {
            icon: <i className="fas fa-map-marker-alt"/>,
            title: 'Address',
            content: ['2020 Patterson Ave, Of. 20 New YorsK, NY, 26303']
        },
        {
            icon: <i className="fas fa-phone"/>,
            title: 'Phone',
            content: ['+084 1800 33 678', '+084 1800 33 688']
        },
        {
            icon: <i className="far fa-envelope"/>,
            title: 'Email',
            content: ['contact@example.com', 'contact@example.com']
        },
        {
            icon: <i className="far fa-clock"/>,
            title: 'Opening Hours',
            content: ['Monday - Friday: 9.30am–5:30pm', 'Saturday: 9am–1pm']
        }
    ];

    const renderInfo = () => {
        return dataInfo.map((info, idx) => {
            return (
                <div key={idx} className="contact__info__col">
                    <div className="info__col--icon">
                        {info.icon}
                    </div>
                    <div className="info__col--text">
                        <h2>{info.title}</h2>
                        {
                            info.content.map((c, idx1) => {
                                return <span key={idx1}>{c}</span>
                            })
                        }
                    </div>
                </div>
            )
        })
    }
    return (
        <div className="contact__info__container">
            {renderInfo()}
        </div>
    )
}

export default ContactUsInfo;
