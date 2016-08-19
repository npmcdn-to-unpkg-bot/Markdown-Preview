var InputBox = React.createClass({
  getInitialState: function() {
    return {value: 'Hello!'};
  },
  handleChange: function(event){
    this.setState({value:event.target.value});
  },
  render: function() {
    return (
      <div>
        <input type='text' value={this.state.value} onChange={this.handleChange}/>
        <OutputBox value={this.state.value}/>
      </div>
    );
  }
})

var OutputBox = React.createClass({
  render: function() {
    return (
      <input type='text' value={this.props.value} readOnly/>
    )
  }
})

ReactDOM.render(
  <InputBox />,
  document.getElementById('input')
);
