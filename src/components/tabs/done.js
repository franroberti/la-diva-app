import React, { Component } from 'react';
import {strings} from "../../localization/strings";
import FileFolder from 'material-ui/svg-icons/file/folder';
import {Avatar, List, ListItem} from "material-ui";

class Done extends Component {

    constructor(props){
        super(props);

    }


    render() {
        return  <section style={{width: "80%",margin:"auto"}}>
            <List>
                <ListItem
                    disabled={true}
                    leftAvatar={
                        <Avatar icon={<FileFolder />} />
                    }
                >
                    otra otra tab
                </ListItem>
            </List>
        </section>

    }
}

export default Done;