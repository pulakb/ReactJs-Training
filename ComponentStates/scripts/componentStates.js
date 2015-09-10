writeToScreen('Initial', 'primary');

var Welcome = React.createClass({

    /*
     * Invoked once before the component is mounted. The return value will be used as the initial value of this.state.
    */
    getInitialState: function() {
        writeToScreen('GetInitialState', 'info');
        return {foo : 1};
    },

    /*
    * Invoked once and cached when the class is created. Values in the mapping will be set on this.props if
    * that prop is not specified by the parent component (i.e. using an in check).
    *
    * This method is invoked before any instances are created and thus cannot rely on this.props.
    * In addition, be aware that any complex objects returned by getDefaultProps()
    * will be shared across instances, not copied.
    * */
    getDefaultProps: function() {
        writeToScreen('GetDefaultProps', 'info');
        return {bar: 2};
    },

    update: function() {
        writeToScreen('Updating State', 'primary');
        this.setState({foo: 2});
    },

    render: function() {
        writeToScreen('Render', 'success');
        return (<div>
            This.state.foo: {this.state.foo} <br />
            This.state.bar: {this.props.bar}
            <br/>
            <hr/>
            <button className="btn btn-success"
                onClick={this.update}>
                Update State
            </button>
        </div>);
    },

    /* Lifecycle Methods */

    /* Invoked once, both on the client and server, immediately before the initial rendering occurs.
     * If you call setState within this method, render() will see the updated state and will be executed
     * only once despite the state change.*/

     componentWillMount: function() {
        writeToScreen('ComponentWillMount', 'warning');
    },

    /*
    * Invoked once, only on the client (not on the server), immediately after the initial rendering occurs.
    * At this point in the lifecycle, the component has a DOM representation which you can access via React.findDOMNode(this).
    * The componentDidMount() method of child components is invoked before that of parent components.
    *
    * If you want to integrate with other JavaScript frameworks, set timers using setTimeout or setInterval, or
    * send AJAX requests, perform those operations in this method.
    * */
    componentDidMount: function() {
        writeToScreen('ComponentDidMount', 'warning');
    },

    shouldComponentUpdate: function() {
        writeToScreen('ShouldComponentUpdate', 'info');
        return true;
    },

    componentWillReceiveProps: function(nextProps) {
        writeToScreen('ComponentWillRecieveProps', 'warning');
    },

    /* Invoked before rendering when new props or state are being received. This method is not called for the initial
     * render or when forceUpdate is used.
     * */
    componentWillUpdate: function() {
        writeToScreen('ComponentWillUpdate', 'warning');
    },

    /*
    * Invoked immediately after the component's updates are flushed to the DOM. This method is not called for the initial render.

    * Use this as an opportunity to operate on the DOM when the component has been updated.
    * */
    componentDidUpdate: function() {
        writeToScreen('ComponentDidUpdate', 'warning');
    },

    componentWillUnmount: function() {
        writeToScreen('componentWillUnmount', 'danger');
    }
});

var App = React.createClass({
    getInitialState: function() {
        return {id: 1};
    },

    update: function() {
        writeToScreen('Updating Props', 'primary');
        this.setState({id: 2});
    },

    render: function() {
        return (
            <div>
                <hr/>
                <Welcome bar={this.state.id} />
                <hr />
                <button type="button" className="btn btn-primary"
                    onClick={this.update}>
                    Update Props
                </button>
            </div>
        )
    }
});

React.render(
    <App />,
    document.getElementById('app')
);

var unmountBtn = document.getElementById('unmount');

unmountBtn.addEventListener('click', unmount);

function unmount() {
    writeToScreen('Unmounting', 'primary');

    /*
    * React.unmountComponentAtNode
     boolean unmountComponentAtNode(DOMElement container)
     Remove a mounted React component from the DOM and clean up its event handlers and state. If no component
     was mounted in the container, calling this function does nothing. Returns true if a component was unmounted
     and false if there was no component to unmount.
     * */
    React.unmountComponentAtNode(document.getElementById('app'));

    unmountBtn.remove();
}

function writeToScreen(msg, level) {
    var elem = document.getElementById('screen');
    elem.innerHTML += '<div class="log bg-' + level + '">' +
    '<span class="glyphicon glyphicon-ok"></span> &nbsp;&nbsp;' +
    msg +
    '</div>';
}