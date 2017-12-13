import React, { Component } from 'react';
import {strings} from "../localization/strings";
import {AutoComplete, Avatar} from "material-ui";
import SearchIcon from 'material-ui/svg-icons/action/search';


const MAX_SEARCH_RESULTS = 5;

class Search extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return  <div style={{textAlign:"center"}}>
                    <AutoComplete
                        hintText={strings.plateInputPlaceholder}
                        filter={AutoComplete.caseInsensitiveFilter}
                        maxSearchResults={MAX_SEARCH_RESULTS}
                        dataSource={this.props.source !== undefined ? this.props.source:[]}
                        onUpdateInput={(e) => this.handlePlateChange(e)}
                    />
                    <Avatar icon={<SearchIcon />} />
                </div>

    }
}

export default Search;
