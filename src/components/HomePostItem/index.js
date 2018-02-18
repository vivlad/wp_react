import React from 'react';
import renderHTML from 'react-render-html';

const Header = props => (
    <article>
        <div className="featuredImage">{props.featuredMedia}</div>
        <div className="articleInfoWrapper">
            <div className="articleTitle">{props.title}</div>
            <div className="excerpt">{renderHTML(props.excerpt)}</div>
        </div>
        
    </article>
);

export default Header;