import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import renderHTML from 'react-render-html';

import ShortcodeParser from '../../utils/shortcodes';
import Header from '../../components/Header';
import * as postsActions from '../../actions/postsActions';
import './post.css';

class Post extends Component {

    componentDidMount(){
      this.props.loadSinglePost( this.props.match.params.id );
    }
    
    render(){
        let postContent = 'Loading...';

        if( ! this.props.message ) {
          postContent = 'Post not found';
        }

        if( this.props.singleError ) {
          postContent = 'Something wrong with API. Try to reload page';
        }

        if( null !== this.props.post && this.props.post.content ) {
            postContent = this.props.post.content.rendered;
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
    loadSinglePost: id => dispatch( postsActions.loadSinglePost(id) ),
});

const mapStateToProps = state => ({
    post: state.postReducers.post,
    singleError: state.postReducers.singleError,
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Post));