import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import UserProfile from "./userProfile";
import {strings} from "../../localization/strings";
import Done from "./done";
import ToDo from "./toDo";


class TabsContainer extends React.Component {

    render() {
        return (
            <Tabs>
                <Tab label={strings.toDoTabHeader}>
                    <div>
                        <ToDo />
                    </div>
                </Tab>
                <Tab
                    label={strings.doneTabHeader}
                    //data-route="/home"
                    //onActive={handleActive}
                >
                    <div>
                        <Done />
                    </div>
                </Tab>
                <Tab label={strings.userProfileTabHeader}>
                    <div>
                        <UserProfile />
                    </div>
                </Tab>
            </Tabs>
        );
    }
}
export default TabsContainer;