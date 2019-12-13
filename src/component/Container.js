import React from 'react';
import { Column, Row } from 'simple-flexbox';
import { Apple } from '../images/Apple.jpg';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { createStore } from 'redux';
import { CounterReducer } from './StoreReducer';

class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stockDetails: [],
            cart: []
        }
        this.addToCart = this.addToCart.bind(this);
        this.quantityCount = this.quantityCount.bind(this);
    }

    addToCart(e) {
        console.log(e.target.value);
        // let obj = {}
        // this.state.stockDetails.map(productList=>{
        //     if(productList.product_id===e.target.value){
        //         obj = productList
        //     }
        // })

    }
    
    quantityCount(e) {
        let flag=0;
        console.log('->', e.target.value)
        let decryptValue = e.target.value.split(' ');
        let countValue = decryptValue[2]
        const store = createStore(CounterReducer);
        store.subscribe(function () {
            countValue = store.getState();
            flag = 1;
        });
        const Action = {
            type: decryptValue[0],
            count_Value : decryptValue[2]
        }
        store.dispatch(Action);
        if(flag===1){
            console.log('After Flag',countValue)
            this.state.stockDetails.map(product=>{  
                if(product.product_id == decryptValue[1]){
                    console.log(product);
                    console.log('->',countValue)
                    product.product_default = countValue
                }
            })
        }
        console.log('After Increment -> ',this.state.stockDetails);
        this.render();
    }

    componentDidMount() {
        axios.get('http://localhost:3456/')
            .then(res => {
                this.setState({ stockDetails: res.data })
                console.log(this.state.stockDetails);
            })
    }

    render() {

        const list = this.state.stockDetails.map((prod, index) => {
            const a = prod.product_image_path
            // var imagePath = require(a);
            console.log('Path -> ', a);
            return (<div className="List1" >
                <Row >
                    <div className="design img" >
                        {/* {a} */}
                        {/* <img src={a} alt="img" width="50" height="50" /> */}
                        <img src={require('../images/Samsung.jpg')} alt="img" width="50" height="50" />
                    </div>
                    <div className="design product" >
                        <Column >
                            <div className="ProductName" >{prod.product_name}</div>
                            <div className="ProductDesc" >{prod.product_description}</div>
                        </Column>
                    </div>
                    <div className="design QuantityMeasure" >
                        <Row >
                            <Button variant="light" onClick={this.quantityCount} value={"DECREMENT "+prod.product_id+" "+prod.product_default}> - </Button>
                            <div className="quantity"> {prod.product_default} </div>
                            <Button variant="light" onClick={this.quantityCount} value={"INCREMENT "+prod.product_id+" "+prod.product_default}> + </Button>

                        </Row>
                    </div>
                    <div className="design Price" >
                        {prod.product_price}
                    </div>
                    <div className="design">
                        <Button variant="light" value={prod.product_id} onClick={this.addToCart}>Add</Button>
                    </div>
                </Row>
            </div>
            )
        })
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