import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import CarModel from "./carModel";
import {strings} from "../../localization/strings";
import CarType from "./carType";
import CarWashType from "./carWashType";
import BalanceHistory from "./balanceHistory";


class TabsContainer extends React.Component {


    render() {
        return (
            <Tabs>
                <Tab label={strings.washTypeHeader} >
                    <div>
                        <CarWashType data={this.props.data} />
                    </div>
                </Tab>
                <Tab label={strings.carTypeHeader}>
                    <div>
                        <CarType data={this.props.data}/>
                    </div>
                </Tab>
                <Tab label={strings.carModelHeader}>
                    <div>
                        <CarModel data={this.props.data}/>
                    </div>
                </Tab>
                <Tab label={strings.balanceHistoryHeader}>
                    <div>
                        <BalanceHistory data={this.props.data}/>
                    </div>
                </Tab>
            </Tabs>
        );
    }
}
export default TabsContainer;