import React from 'react';
import renderHTML from 'react-render-html';
import { Link } from 'react-router-dom';

const Header = props => (
    <article className="atricleItem clearfix">
        <Link className="overlayLink" to={`/post/${props.postid}`}>&nbsp;</Link>
        <div 
        className="featuredImage"
        style={{backgroundImage: `url(${props.featuredMedia})`}}
        ></div>
        <div className="articleInfoWrapper">
            <div className="articleTitle">{props.title}</div>
            <div className="excerpt">{renderHTML(props.excerpt)}</div>
        </div>
        
    </article>
);

export default Header;