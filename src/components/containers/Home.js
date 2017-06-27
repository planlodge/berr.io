import React, { Component } from 'react';
import { connect } from 'react-redux';
//import InfiniteScroll from 'redux-infinite-scroll';
import DocumentTitle from 'react-document-title';
import '../../css/Home.css';
import '../../css/BeerFocus.css';
import '../../css/owl.carousel.min.css';
import '../../css/owl.theme.default.min.css';
import * as APIService from '../../api/APIService';
import PopularBeerList from '../views/PopularBeerList';
import TrendingBeerList from '../views/TrendingBeerList';
import BeerFocus from '../views/BeerFocus';
import { Parallax } from 'react-parallax';

class Home extends Component {

    getContent() {
        APIService.getAllBeers(1, 20);
        APIService.getRecentBeers(3, 20);
        APIService.getRandomBeer();
    }

    componentDidMount() {
        this.getContent();
    }

    render() {
        return (
            <div className="">
                <DocumentTitle title={"Berr.IO"} />
                <Parallax className="banner" bgImage="assets/images/beerBg.jpg" strength={400} />
                <h2 className="left-padding">Popular/ Trending</h2>
                <PopularBeerList beers={this.props.popularBeers} />
                <h2 className="left-padding">Beer Focus</h2>
                <BeerFocus {...this.props.randomBeer} />
                <h2 className="left-padding">New Releases</h2>
                <TrendingBeerList beers={this.props.recentBeers} />
            </div>
        );
    }
}

const mapStateToProps = function(store) {

    //console.log("Store", store.api);
    return {
        popularBeers: store.api.popularBeers,
        recentBeers: store.api.recentBeers,
        randomBeer: store.api.randomBeer
    };
};

export default connect(mapStateToProps)(Home);
