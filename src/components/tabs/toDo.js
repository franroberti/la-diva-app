import React, { Component } from 'react';
import {strings} from "../../localization/strings";
import FileFolder from 'material-ui/svg-icons/file/folder';
import {Avatar, List, ListItem} from "material-ui";
import {Pie} from 'react-chartjs-2';

var randomScalingFactor = function() {
    return Math.round(Math.random() * 100);
};

var data = {
    datasets: [{
        data: [
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
        ],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
        ],
        label: 'Dataset 1'
    }],
        labels: [
        "Red",
        "Orange",
        "Yellow",
        "Green",
        "Blue"
    ]
};

class ToDo extends Component {

    constructor(props){
        super(props);

    }


    render() {
        return  <section style={{width: "80%",margin:"auto"}}>
            {<Pie data={data} />}

            {/*<List>*/}
                {/*<ListItem*/}
                    {/*disabled={true}*/}
                    {/*leftAvatar={*/}
                        {/*<Avatar icon={<FileFolder />} />*/}
                    {/*}*/}
                {/*>*/}

                {/*</ListItem>*/}
            {/*</List>*/}
        </section>

    }
}

export default ToDo;