import React, { Component } from 'react';
import {strings} from "../localization/strings";
import Search from "./search";
import Tabs from "./tabs/tabs";
import {fetchAll} from "../actions/allActions";
import {connect} from "react-redux";
import {Loader} from "./loader/loader";

const mapStateToProps = (store)  => {
    return {
        store: store.all
    }
};

class Client extends Component {

    constructor(props){
        super(props);

        this.state = {plate: ''};

    }

    componentWillMount(){
        this.props.dispatch(fetchAll());
    }

    render() {

        if(this.props.store.all_fetching){
            return <Loader />
        }

        return  <section>
                    <Search />
                    <Tabs />
                </section>

    }
}

export default connect(mapStateToProps)(Client);