import React, { Component } from 'react'
import { connect }          from 'react-redux'
import DocumentTitle        from 'react-document-title'
import                           '../../css/build/BeerList.css'
import * as APIService      from '../../api/APIService'
import BeerList             from '../views/BeerList'

class BeerListC extends Component {

    getContent() {
        APIService.getAllBeers(2, 80);
    }

    componentDidMount() {
        this.getContent();
    }

    render() {
        return (
            <div className="max-width">
                <DocumentTitle title={"Beer List - Berr.IO"} />
                <div className="pushDown col s12"></div>
                <BeerList beers={this.props.beerList} />
            </div>
        );
    }
}

const mapStateToProps = function(store) {

    return {
        beerList: store.api.beerList
    };
};

export default connect(mapStateToProps)(BeerListC);
