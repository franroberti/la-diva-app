import React, { Component } from 'react';
import {strings} from "../localization/strings";
import Search from "./search";
import Tabs from "./tabs/tabs";
import {fetchAll} from "../actions/allActions";
import {connect} from "react-redux";
import {Loader} from "./loader/loader";
import {Switch, Route, BrowserRouter} from 'react-router-dom'

const mapStateToProps = (store)  => {
    return {
        store: store.all
    }
};

class Client extends Component {

    constructor(props){
        super(props);
    }

    componentWillMount(){
        this.props.dispatch(fetchAll());
    }

    render() {

        if(this.props.store.all_fetching){
            return <Loader />
        }

        // return (
        //     <BrowserRouter>
        //         <Switch >
        //             <Route exact path='/' component={Search} />
        //             <Route path='/address' component={Tabs} />
        //         </Switch>
        //     </BrowserRouter>
        // )

        return  <section>
                   <Search />
                   <Tabs data={this.props.store.carsWashed} />
               </section>

    }
}

export default connect(mapStateToProps)(Client);