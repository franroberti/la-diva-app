import React, { Component } from 'react';
import {Pie} from 'react-chartjs-2';
import {listToLabelAndValues} from "./utils";


class CarWashType extends Component {

    constructor(props){
        super(props);
    }

    sumarPrecio(L){
        var suma = 0;
        for(var i = 0; i<L.length; i++){
            suma += parseInt(L[i].precio);
        }
        return suma
    }

    formatData(){

        var data = {
            datasets: [{
                data: [
                ],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                ]
            }],
            labels: [
            ]
        };

        var result = listToLabelAndValues(this.props.data,"tipoDeLavado","precio");
        data.datasets[0].data = result.values;
        data.labels = result.labels;

        return  <Pie data={data}
                     width={400}
                     height={400}/>;
    }

    render() {

        return  <section >
                    {this.formatData()}
                </section>
    }
}

export default CarWashType;