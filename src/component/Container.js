import React from 'react';
import { Column, Row } from 'simple-flexbox';
import { Apple } from '../images/Apple.jpg';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import images from '../images/Apple.jpg';

class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stockDetails: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3456/')
            .then(res => {
                this.setState({ stockDetails: res.data })
                console.log(this.state.stockDetails)
            })
    }

    render() {
        
        const list = this.state.stockDetails.map((prod, index) => {
            const a = "'"+`${prod.product_image_path}`+"'"
            console.log('Path -> ',a);
            return (<div className="List1" >
                <Row >
                    <div className="design img" >
                        {a}
                        <img src={require(a)} alt="img" width="50" height="50" />
                    </div>
                    <div className="design product" >
                        <Column >
                            <div className="ProductName" >{prod.product_name}</div>
                            <div className="ProductDesc" >{prod.product_description}</div>
                        </Column>
                    </div>
                    <div className="design QuantityMeasure" >
                        <Row >
                            <Button variant="light"> - </Button>
                            <div className="quantity" > 1 </div>
                            <Button variant="light"> + </Button>
                            
                        </Row>
                    </div>
                    <div className="design Price" >
                        {prod.product_price}
                    </div>
                    <div className="design">
                        <Button variant="light">Add</Button>
                    </div>
                </Row>
            </div>
        )})
        return (
            <div >
                <Column>
                    <div className="p-2 col-example text-left Heading">Shopping Cart</div>
                    {list}
                </Column>
            </div>
        )
    }
}

export default Container;