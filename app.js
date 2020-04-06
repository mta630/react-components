var GroceryList = (props) => (
  <ul>
    {props.items.map((item, index) =>
    <GroceryListItem key={index} item={item}/>
    )}
  </ul>
);

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hover: false
    };

  }

  onListItemHover() {
    this.setState({
      hover : !this.state.hover
    });
  }

  render() {
    var style = {
      cursor: 'pointer',
      fontWeight: this.state.hover ? 'bold' : 'normal'
    };

  	return (
      <li style={style} onMouseOver={this.onListItemHover.bind(this)}>{this.props.item}</li>
  	);
  }

}

ReactDOM.render(<GroceryList items={['Milk', 'Eggs', 'Juice']}/>, document.getElementById('app'));