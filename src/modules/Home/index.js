import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Header from '../../components/Header';
import HomePostItem from '../../components/HomePostItem';
import '../../App.css';
import * as postsActions from '../../actions/postsActions';

class Home extends Component {

    loadHomePosts = () => {
        this.props.loadPosts();
    }

    componentDidMount() {
        this.loadHomePosts();
    }

    render(){
        return(
            <div>
                <Header />
                <section className="postsContainer">
                    { this.props.posts &&
                        this.props.posts.map( ( item, idx ) => {
                            return (
                                <HomePostItem
                                key={idx}
                                postid={item.id}
                                featuredMediaId={item.featured_media}
                                title={item.title.rendered}
                                excerpt={item.excerpt.rendered}
                                />
                            )
                        } )
                    }
                </section>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    loadPosts: () => dispatch( postsActions.loadPosts() ),
});

const mapStateToProps = state => ({
    posts: state.postReducers.posts,
    baseURL: state.postReducers.baseURL,
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home));