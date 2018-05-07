//JavaScript
import React from 'react';
import ReactDOM from 'react-dom';
import { core as ZingChart } from 'zingchart-react';

ZC.LICENSE = ['33d8215984455e7d4bea27defb60ec56','0a9a6c1ae0d77fde662ad2fb5da9af9b'];

class ZingChartForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {chartConfig: {
      type: 'bar',
      title: {
        text: 'Change Me Please'
      },
      subtitle: {
        text: 'Click On Bar For Event To Fire'
      },
      series : [
        {
          values : [35,42,67,89,25,34,67,85]
        }
      ]
    }};

    // assign event handler for input
    this.handleChange = this.handleChange.bind(this);

    // example bind events in react
    // null for event bound to all charts. Or specific chart id for single chart
    // zingchart.bind('myChart', 'node_click', (e) => {
    zingchart.bind(null, 'node_click', (e) => {
      console.log(`Node Click Value is: ${e.value}`);
    });
  }

  // update state
  handleChange(event) {
    // copy the chartConfig and update the property you want
    var copyConfig = JSON.parse(JSON.stringify(this.state.chartConfig));
    copyConfig.title.text = event.target.value;
    // set the state of the whole chart JSON
    this.setState({chartConfig: copyConfig});
  }

  // component renders a ZingChart and
  render() {
    return (
      <section>
        <ZingChart id="myChart" height="500px" width="500px" data={this.state.chartConfig} />
        <label>
          Chart Title:
          <input type="text" value={this.state.chartConfig.title.text} onChange={this.handleChange} />
        </label>
      </section>
    );
  }
}

ReactDOM.render(
<ZingChartForm />,
  document.getElementById('myContainer')
);
