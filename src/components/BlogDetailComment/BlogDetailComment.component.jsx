import React from "react";
import './BlogDetailComment.styled.scss';
//import { Redirect } from 'react-router-dom';

import commentAvatarImg from './../../assets/blogs/comment-avatar.png';

const BlogDetailComment = () => {
    //const articleId = props.match ? props.match.params.blogId : 1;
    const articleId = window.location.pathname.split("/")[2];
    const commentData = [
        {
            comments: [
                {
                    commentId: '1',
                    name: 'Joe Doe',
                    commentDate: 'June 23, 2020 at 10:28 am',
                    content: 'This is exactly what i was looking for, thank you so much for these tutorials',
                    reply: [
                        {
                            replyId: '1',
                            replyName: 'Mike',
                            replyDate: 'June 23, 2020 at 10:28 am',
                            replyContent: 'It would be great to try this theme for my businesses',
                            userId: '2'
                        }
                    ],
                    userId: '1'
                },
                {
                    commentId: '2',
                    name: 'Elicia',
                    commentDate: 'June 26, 2020 at 11:30 am',
                    content: 'What a nice article. It keeps me reading more and more!',
                    reply: [],
                    userId: '2'
                }
            ],
            articleId: '1'
        },
        {
            comments: [
                {
                    commentId: '3',
                    name: 'Elicia',
                    commentDate: 'June 26, 2020 at 11:30 am',
                    content: 'What a nice article. It keeps me reading more and more!',
                    reply: [
                        {

                        }
                    ],
                    userId: '3'
                }
            ],
            articleId: '2'
        },
    ];
    const commentDataArr = commentData.filter(cmt => cmt.articleId === articleId);
    const countComment = () => {
        let countCmt = 0;

        commentDataArr.forEach(cmt => {
            countCmt += cmt.comments.length;
            countCmt += cmt.comments.reduce((count, rep) => {
                return count + rep.reply.length;
            }, 0);
        });

        return countCmt;
    }
    const renderComment = () => {
        if(commentDataArr.length > 0) {
            return commentDataArr[0].comments.map((cmt, idx) => {
                return (
                    <div key={idx} className="blog-detail__comment">
                        <div className="blog-detail__comment__section">
                            <div className="blog-detail__comment--avatar">
                                <img src={commentAvatarImg} alt="Avatar"/>
                            </div>
                            <div className="blog-detail__comment--content">
                                <div className="comment__content--header">
                           <span className="cmt__header--name">
                               {cmt.name}
                           </span>
                                    <span className="cmt__header--date">
                               {cmt.commentDate}
                           </span>
                                </div>
                                <div className="comment__content--text">
                                    <p>
                                        {cmt.content}
                                    </p>
                                </div>
                            </div>
                        </div>
                        {
                            cmt.reply.length > 0 ?
                                cmt.reply.map((rep, idxR) => {
                                    return (
                                        <div key={idxR} className="blog-detail__reply__section">
                                            <div className="blog-detail__comment--avatar">
                                                <img src={commentAvatarImg} alt="Avatar"/>
                                            </div>
                                            <div className="blog-detail__comment--content">
                                                <div className="comment__content--header">
                                               <span className="cmt__header--name">
                                                   {rep.replyName}
                                               </span>
                                                    <span className="cmt__header--date">
                                                   {rep.replyDate}
                                               </span>
                                                </div>
                                                <div className="comment__content--text">
                                                    <p>
                                                        {rep.replyContent}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                                : <div/>
                        }
                    </div>
                )
            });
        }
        else {
            /*return <Redirect to="/blogs"/>*/
            return <div className="blog-detail__comment"/>
        }
    }

    return (
        <div className="blog-detail__comment__container">
            <div className="blog-detail__comment__title">
                <h2>{countComment()} COMMENTS</h2>
            </div>
            <div className="blog-detail__comment__text">
                {renderComment()}
            </div>
        </div>
    )
}

export default BlogDetailComment;
