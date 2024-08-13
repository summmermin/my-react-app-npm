import {Component} from 'react';

class TimerCl extends Component {
    constructor(props) {
        super(props);
        console.log(this);
        this.state = {time: 0};
    }

    updateTime = () => {
        this.setState({time: this.state.time + 1});
    };

    render() {
        return <div>
            <div>count</div>
            <div>{this.state.time}</div>
            <button onClick={this.updateTime}>더하기</button>
        </div>;
    }
}

export default TimerCl;
