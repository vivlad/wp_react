import React, {Component} from 'react';
import renderHTML from 'react-render-html';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';



class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            imageURL: '',
        }
    }

    getFeaturedImageURL = ( mediaId, size ) => {
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
            this.setState({
                imageURL: imageData.media_details.sizes[`${size}`].source_url,
            });
        })
        .catch( e => console.log('Fetching image falied') );
    }

    componentDidMount(){
        this.getFeaturedImageURL( this.props.featuredMediaId, 'thumbnail' )
    }

    render(){
        return (
            <article className="atricleItem clearfix">
                <Link className="overlayLink" to={`/post/${this.props.postid}`}>&nbsp;</Link>
                <div 
                className="featuredImage"
                style={{backgroundImage: `url(${this.state.imageURL})`}}
                ></div>
                <div className="articleInfoWrapper">
                    <div className="articleTitle">{this.props.title}</div>
                    <div className="excerpt">{renderHTML(this.props.excerpt)}</div>
                </div>
                
            </article>
        );
    }
}

const mapStateToProps = state => ({
    baseURL: state.homeReducers.baseURL,
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Header);