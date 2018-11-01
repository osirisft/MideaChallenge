
import React from 'react';

class ShoppingCentreList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      shoppingCentres: props.shoppingCentres
    };
  }

  render() {
    const shoppingCentres = [];
    this.props.shoppingCentres.map(
      (shoppingCentre) =>
        { shoppingCentres.push(<ShoppingCentre key={shoppingCentre._id} shoppingCentre={shoppingCentre}/>); }
      );

    return (
			<table>
				<tbody>
					<tr>
						<th>Name</th>
						<th>City</th>
						<th>Address</th>
            <th>Postcode</th>
					</tr>
					{shoppingCentres}
				</tbody>
			</table>
		)
  }
}

class ShoppingCentre extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.shoppingCentre.name}</td>
        <td>{this.props.shoppingCentre.city}</td>
        <td>{this.props.shoppingCentre.address}</td>
        <td>{this.props.shoppingCentre.postcode}</td>
      </tr>
    )
  }
}
export default ShoppingCentreList;
