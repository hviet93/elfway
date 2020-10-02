import React from "react";
import './Widget.styled.scss';

import widgetImg_1 from './../../assets/home/background/bg-home-widget_1.jpg';
import widgetImg_2 from './../../assets/home/background/bg-home-widget_2.jpg';
import widgetImg_3 from './../../assets/home/background/bg-home-widget_3.jpg';

const Widget = () => {
     const renderWidget = () => {
         const widgetData = [
             {
                 img: widgetImg_1,
                 icon: <i className="fas fa-carrot"/>,
                 text: 'Fruits & Veges'
             },
             {
                 img: widgetImg_2,
                 icon: <i className="fas fa-coffee"/>,
                 text: 'Breakfast & Cereal'
             },
             {
                 img: widgetImg_3,
                 icon: <i className="fas fa-bread-slice"/>,
                 text: 'Bread & Pastries'
             }
         ]
        return widgetData.map((w, idx) => {
            return (
                <div key={idx} className='widget'>
                    <img className="widget__image" src={w.img} alt={`Widget ${idx + 1}`} />
                    <div className="widget__backcolor"/>
                    <div className="widget__content">
                        <div className="widget__content--icon">{w.icon}</div>
                        <div className="widget__content--text">{w.text}</div>
                    </div>
                </div>
            );
        });
    }
    return (
        <div className={`widget__container`}>
            {renderWidget()}
        </div>
    );
}

export default Widget;
