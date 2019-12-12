import React from 'react'
import { Column, Row } from 'simple-flexbox';

class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className="cart">
                <Column>
                    <div className="Heading">My Cart</div>
                    <div className="cartList1">
                        <Row>
                            <div className="design img">
                                <img src="" width="50" height="50" />
                            </div>
                            <div className="design_product">
                                <Column>
                                    <div className="ProductName"></div>
                                    <div className="ProductDesc"></div>
                                    <div className="design Price">
                                        Price Value
                                    </div>
                                </Column>
                            </div>
                        </Row>
                    </div>
                </Column>
            </div>
        )
    }
}

export default Cart;