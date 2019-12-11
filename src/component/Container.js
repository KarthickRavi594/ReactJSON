import React from 'react';
import { Column, Row } from 'simple-flexbox';
import {Apple} from '../images/Apple.jpg'
class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className="container">
                <Column>
                    <div className="p-2 col-example text-left Heading">Shopping Cart</div>
                    <div className="List">
                        <Row>
                            <div className="design img">
                                <img src={Apple} width="50" height="50" />
                            </div>
                            <div className="design product">
                                <Column>
                                    <div className="ProductName"></div>
                                    <div className="ProductDesc"></div>
                                </Column>
                            </div>
                            <div className="design QuantityMeasure">
                                <Row>
                                    <a href="">-</a>
                                    <div className=""></div>
                                    <a href="">+</a>
                                </Row>
                            </div>
                            <div className="design Price">
                                Price Value
                            </div>
                        </Row>
                    </div>
                </Column>
            </div>
        )
    }
}

export default Container;