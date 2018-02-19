import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import renderHTML from 'react-render-html';

import ShortcodeParser from '../../utils/shortcodes';
import Header from '../../components/Header';
import * as homeActions from '../../actions/homeActions';
import './post.css';

class Post extends Component {

    constructor(props) {
        super(props);

        this.state = {
            postID: this.props.match.params.id,
        }
    }

    loadHomePosts = (id) => {
        const baseURL = this.props.baseURL;
        const endpoint = `/posts/${id}`; 
        const requestParams = {
            method: 'GET',
        };
        fetch( baseURL + endpoint, requestParams )
        .then( data => data.json() )
        .then( payload => {
            this.props.loadPosts( [payload] );
        })
        .catch( err => console.log(err) );
    }

    componentDidMount(){
        if( this.props.posts.length === 0 ) {
            this.loadHomePosts( this.state.postID );
        }
    }
    
    render(){
        const postID = this.state.postID;
        const postsArray = this.props.posts;
        let postContent = 'Loading...';
        if( postsArray.length > 0 ) {
            const postData = postsArray.filter( post => parseInt(post.id) === parseInt(postID) );
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
    loadPosts: payload => dispatch( homeActions.loadPosts(payload) ),
});

const mapStateToProps = state => ({
    posts: state.homeReducers.posts,
    baseURL: state.homeReducers.baseURL,
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Post));