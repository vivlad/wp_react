import React, {Component} from 'react';
import { connect } from 'react-redux';

import Header from '../../components/Header';
import '../../App.css';
import * as homeActions from '../../actions/homeActions';

class Home extends Component {
    render(){
        return(
            <div>
                <Header/>
                Home
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    loadPosts: payload => dispatch( homeActions.loadPosts ),
});

const mapStateToProps = state => ({
    posts: state.homeReducers.posts,
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);