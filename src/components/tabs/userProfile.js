import React, { Component } from 'react';
import {strings} from "../../localization/strings";
import AccountCircle from 'material-ui/svg-icons/action/account-circle';
import DirectionsCar from 'material-ui/svg-icons/maps/directions-car';
import Dial from 'material-ui/svg-icons/communication/dialpad';
import Email from 'material-ui/svg-icons/communication/email';
import Date from 'material-ui/svg-icons/action/date-range';
import {Avatar, List, ListItem} from "material-ui";

class UserProfile extends Component {

    constructor(props){
        super(props);

    }

    render() {

        return  <section style={{width: "80%",margin:"auto"}}>
                    <List>
                        <ListItem
                            disabled={true}
                            leftAvatar={
                                <Avatar icon={<AccountCircle />} />
                            }
                        >
                            Otra tab
                        </ListItem>
                    </List>
                </section>

    }
}

export default UserProfile