import React, {Component} from 'react';

class Class_Lifecycles extends Component {
    constructor(props) {
        console.log('constructor')
        super(props);
        this.state={
            name:'old state'
        }
    }


    handleClick = () => {
        this.setState({ name: 'state changed' }
        )
    }

    componentDidMount() {
        console.log('componentDidMount');

    }


   shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('should update')
       return true
   }

   componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('did update')
   }

   componentWillUnmount() {
        console.log('unmount')
   }

    static getDerivedStateFromProps(nextProps, prevState) {
     console.log('derived state from props')
    }

    render() {
        console.log('render')
        return (
            <div>
                {this.state.name}

                <b>Change State</b>
                <button onClick={this.handleClick}>Button</button>
            </div>
        );
    }
}

export default Class_Lifecycles;