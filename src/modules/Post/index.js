import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import renderHTML from 'react-render-html';

import ShortcodeParser from '../../utils/shortcodes';
import Header from '../../components/Header';
import * as postsActions from '../../actions/postsActions';
import * as config from '../../utils/config';
import './post.css';

class Post extends Component {

    constructor(props) {
        super(props);

        const postsArray = this.props.posts;
        const postID = this.props.match.params.id;
        this.state = {
            postID,
        }
    }

    componentDidMount(){
      this.props.loadSinglePost( this.state.postID );
    }
    
    render(){
        const postsArray = this.props.posts;
        let postData = postsArray.length > 0 ? postsArray.filter( post => parseInt(post.id) === parseInt(this.state.postID) ) : [];
        let postContent = 'Loading...';

        if( postData.length > 0 ) {
            postContent = postData[0].content.rendered;
            postContent = ShortcodeParser( postContent );
        }
       
        return (
            <div>
                <Header />
                <div className="postContent">
                    {renderHTML(postContent)}
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    loadPosts: payload => dispatch( postsActions.loadPosts(payload) ),
    loadSinglePost: id => dispatch( postsActions.loadSinglePost(id) ),
});

const mapStateToProps = state => ({
    posts: state.postReducers.posts,
    baseURL: state.postReducers.baseURL,
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Post));