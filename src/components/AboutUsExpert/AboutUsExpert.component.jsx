import React from "react";
import './AboutUsExpert.styled.scss';
import clientAvatar_1 from './../../assets/about-us/client-avatar_1.jpg';
import clientAvatar_2 from './../../assets/about-us/client-avatar_2.jpg';
import clientAvatar_3 from './../../assets/about-us/client-avatar_4.jpg';


const AboutUsExpert = () => {
    const dataExpert = [
        {
            avatar: clientAvatar_1,
            name: 'Marianne Loreno',
            jobTitle: 'Design',
            content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium dolor',
        },
        {
            avatar: clientAvatar_2,
            name: 'Giovani Bacardo',
            jobTitle: 'Head Chief',
            content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium dolor',
        },
        {
            avatar: clientAvatar_3,
            name: 'Riga Pelore',
            jobTitle: 'Photographer',
            content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium dolor',
        }
    ];
    const renderArticle = () => {
        return dataExpert.map((expert, idx) => {
            return (
                <div key={idx} className="about-us__expert__article">
                    <div className="expert__article--img">
                        <img src={expert.avatar} alt={`Avatar ${idx + 1}`}/>
                    </div>
                    <div className="expert__article--name">
                        <h3>{expert.name}</h3>
                    </div>
                    <div className="expert__article--job">
                        <p>{expert.jobTitle}</p>
                    </div>
                    <div className="expert__article--content">
                        <p>{expert.content}</p>
                    </div>
                    <div className="expert__article--social">
                        <span><i className="fab fa-facebook"/></span>
                        <span><i className="fab fa-twitter"/></span>
                        <span><i className="fab fa-youtube"/></span>
                        <span><i className="fab fa-google-plus-g"/></span>
                    </div>
                </div>
            )
        })
    }
    return (
        <div className="about-us__expert__container">
            <div className="about-us__expert__header">
                <div className="expert__header--title">
                    <h1>
                        <span className='highlight-text'>OUR ORGANIC</span> EXPERTS
                    </h1>
                </div>
                <div className="expert__header--paragraph">
                    <p>
                        Ad mea harum elitr audire, te mea invidunt gubergren constituto.
                        Aliquam postulant eam ne, cu falli decore eam.
                    </p>
                </div>
            </div>
            <div className="about-us__expert__article__container">
                {renderArticle()}
            </div>
        </div>
    )
}

export default AboutUsExpert;
