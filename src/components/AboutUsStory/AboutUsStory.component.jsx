import React from "react";
import './AboutUsStory.styled.scss';

import storyImg_1 from './../../assets/about-us/about-story-1.jpg';
import storyImg_2 from './../../assets/about-us/about-story-2.jpg';
import storyImg_3 from './../../assets/about-us/about-story-3.jpg';

const AboutUsStory = () => {
    const storyData = [
        {
            image: storyImg_1,
            title: 'What Do We Do?',
            paragraph: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto'
        },
        {
            image: storyImg_2,
            title: 'Our Mission',
            paragraph: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto'
        },
        {
            image: storyImg_3,
            title: 'History Of Us',
            paragraph: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto'
        }
    ];

    const renderStories = () => {
        return storyData.map((story, idx) => {
            return (
                <div key={idx} className="about-us__story">
                    <div className="story__img">
                        <img src={story.image} alt={`Story ${idx + 1}`}/>
                    </div>
                    <div className="story__content">
                        <div className="story__content--title">
                            <h2>{story.title}</h2>
                        </div>
                        <div className="story__content--paragraph">
                            <p>{story.paragraph}</p>
                        </div>
                    </div>
                </div>
            )
        })
    }

    return (
        <div className="about-us__story__container">
            {renderStories()}
        </div>
    )
}

export default AboutUsStory;
