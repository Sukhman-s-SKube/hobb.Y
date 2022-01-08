import React from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';
import Moment from "react-moment";
import {deleteComment} from "../../actions/post";

const CommentItem = ({postID, comment:{_id, text, name, avatar, user, date}, auth, deleteComment}) => {
    return (
        <div className="post bg-white p-1 my-1">
            <div>
                <Link to={`/profile/user/${user}`}>
                    <img
                        className="round-img"
                        src={avatar}
                        alt=""
                    />
                    <h4>{name}</h4>
                </Link>
            </div>
            <div>
                <p className="my-1">
                    {text}
                </p>
                <p className="post-date">
                    <Moment format='YYYY/MM/DD'>{date}</Moment>
                </p>
                {!auth.loading && auth.user._id === user && <button
                    type="button"
                    className="btn btn-danger"
                    onClick={e => deleteComment({id:postID, commentId: _id})}
                >
                    <i className="fas fa-times"></i>
                </button>}
            </div>
        </div>
    );
};

CommentItem.propTypes = {
    deleteComment: PropTypes.func.isRequired,
    postID: PropTypes.string.isRequired,
    comment: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state =>({
   auth: state.auth
});

export default connect(mapStateToProps,{deleteComment})(CommentItem);
