import React from "react";
import './AboutUsClient.styled.scss';

import clientImg from './../../assets/about-us/client.png';

import clientAvatar_1 from './../../assets/about-us/client-avatar_1.jpg';
import clientAvatar_2 from './../../assets/about-us/client-avatar_2.jpg';
import clientAvatar_3 from './../../assets/about-us/client-avatar_3.jpg';
import clientAvatar_4 from './../../assets/about-us/client-avatar_4.jpg';

const AboutUsClient = () => {
    const dataClient = [
        {
            avatar: clientAvatar_1,
            name: 'John Doe',
            jobTitle: 'Design',
            content: ' Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, ' +
                'totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.'
        },
        {
            avatar: clientAvatar_2,
            name: 'Jane Gray',
            jobTitle: 'CEO & co',
            content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium' +
                ' oloremque laudantium totam rem aperiam eaque ipsa quae inventore veritatis architecto'
        },
        {
            avatar: clientAvatar_3,
            name: 'James Harris',
            jobTitle: 'Front-end Developer',
            content: ' Et quasi accusantium perspiciatis unde omnis iste natus error sit doloremque laudantium, ' +
                'totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.'
        },{
            avatar: clientAvatar_4,
            name: 'Diana Joe',
            jobTitle: 'Back-end Developer',
            content: ' Voluptatem accusantium perspiciatis unde omnis iste natus error sit doloremque laudantium, totam rem aperiam, ' +
                'eaque ipsa quae ab illo inventore veritatis et quasi architecto.'
        }
    ]

    const renderArticleContent = () => {
        const client = dataClient[0];

        return (
            <div className="article__content">
                <div className="article__content--paragraph">
                    <p>
                        {client.content}
                    </p>
                </div>
                <div className="article__content--artist">
                    <div className="content__artist--avatar">
                        <img src={client.avatar} alt="Avatar"/>
                        <span className="double__quote_style">
                            <i className="fas fa-quote-right"/>
                        </span>
                    </div>
                    <div className="content__artist--info">
                        <div className="artist__info--name">
                            <p>{client.name}</p>
                        </div>
                        <div className="artist__info--job">
                            <p>{client.jobTitle}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="about-us__client--container">
            <div className="about-us__client__header">
                <div className="client__header--title">
                    <h1><span className="highlight-text">CLIENT</span> SAYS</h1>
                </div>
                <div className="client__header--paragraph">
                    <p>
                        Cras mattis consectetur purus sit amet fermentum.
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                    </p>
                </div>
            </div>
            <div className="about-us__client__article">
                <div className="client__article__img">
                    <img src={clientImg} alt="Client"/>
                </div>
                <div className="client__article__container">
                    {renderArticleContent()}
                </div>
            </div>
        </div>
    )
}

export default AboutUsClient;
