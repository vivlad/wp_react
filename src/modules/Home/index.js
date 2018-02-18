import React, {Component} from 'react';
import { connect } from 'react-redux';

import Header from '../../components/Header';
import HomePostItem from '../../components/HomePostItem';
import '../../App.css';
import * as homeActions from '../../actions/homeActions';

class Home extends Component {

    loadHomePosts = () => {
        const baseURL = this.props.baseURL;
        const endpoint = '/posts/'; 
        const requestParams = {
            method: 'GET',
        };
        fetch( baseURL + endpoint, requestParams )
        .then( data => data.json() )
        .then( payload => {
            this.props.loadPosts( payload );
            this.loadAllThumbs( payload );
        })
        .catch( err => console.log(err) );
    }

    loadAllThumbs = ( posts ) => {
        posts.forEach((post, idx) => {
            this.getFeaturedImageURL( post.featured_media, idx );
        });
    }

    getFeaturedImageURL = ( mediaId, idxOfPost ) => {
        const baseURL = this.props.baseURL;
        const endpoint = `/media/${mediaId}`;
        const header = new Headers({
            'Access-Control-Allow-Origin':'*',
        });
        const requestParams = {
            method: 'GET',
            header: header,
        };
        fetch( baseURL + endpoint, requestParams )
        .then( data => data.json() )
        .then( (imageData) => {
            this.props.loadImages(idxOfPost, imageData);
        })
        .catch( e => console.log('Fetching image falied') );
    }

    componentDidMount() {
        this.loadHomePosts();
    }

    render(){
        return(
            <div>
                <Header />
                <section>
                    { this.props.posts &&
                        this.props.posts.map( ( item, idx ) => {
                            const featuredImageUrl = item.featImage ? item.featImage.media_details.sizes.thumbnail.source_url : '';
                            return (
                                <HomePostItem
                                key={idx}
                                title={item.title.rendered}
                                excerpt={item.excerpt.rendered}
                                featuredMedia={featuredImageUrl}
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
    loadPosts: payload => dispatch( homeActions.loadPosts(payload) ),
    loadImages: (idxOfPost, imageData) => dispatch( homeActions.loadImages(idxOfPost, imageData) ),
});

const mapStateToProps = state => ({
    posts: state.homeReducers.posts,
    baseURL: state.homeReducers.baseURL,
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);