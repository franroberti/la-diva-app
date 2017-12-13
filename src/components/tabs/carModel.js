import React, { Component } from 'react';
import {strings} from "../../localization/strings";
import {Pie} from 'react-chartjs-2';
import {listToLabelAndValues} from "./utils";

class CarModel extends Component {

    constructor(props){
        super(props);

    }

    formatData(){

        var data = {
            datasets: [{
                data: [
                ],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ]
            }],
            labels: [
            ]
        };
        var result = listToLabelAndValues(this.props.data,"marca","precio");
        data.datasets[0].data = result.values;
        data.labels = result.labels;

        return  <Pie data={data}
                     width={400}
                     height={400}/>;
    }

    render() {

        return <section style={{width: "80%",margin:"auto"}}>
            {this.formatData()}
        </section>
    }
}

export default CarModel