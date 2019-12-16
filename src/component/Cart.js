import React from 'react'
import { Column, Row } from 'simple-flexbox';
import Button from 'react-bootstrap/Button';

class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cartObject : []
        }
        this.removeCart = this.removeCart.bind(this);
        
    }
    removeCart(e){
        console.log('To Remove Cart -> ',e.target.value)
        this.setState(prevState => ({
            cartObject: prevState.cartObject.filter(task => task.product_id !== e.target.value)
        }));
    }

    render() {
        const data = this.props.data
        const cartData = data.map((cartDetails, index) => (
            <div className="cartList1">
                <Row>
                    <div className="design img">
                        <img src="" width="50" height="50" />
                    </div>
                    <div className="design_product">
                        <Column>
                            <div className="ProductName">{cartDetails.product_name}</div>
                            <div className="ProductDesc"></div>
                            <div className="design Price">
                                {cartDetails.product_price}
                            </div>
                        </Column>
                    </div>
                    <div className="Remove">
                        <Button variant="light" value={cartDetails} onClick={this.removeCart}>Remove</Button>
                    </div>
                </Row>
            </div>
        ))
        return (
            <div className="cart">
                <Column>
                    <div className="Heading">My Cart</div>
                    {cartData}
                </Column>
            </div>
        )
    }
}

export default Cart;