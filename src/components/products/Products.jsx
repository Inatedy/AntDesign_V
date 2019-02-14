import React, { Component } from 'react'
import { Row, Col, Card, Avatar, Icon } from 'antd'

class Products extends Component {
    constructor(props){
        super(props)
        this.state = {
            products: [
                {
                    nombre: "Paracetamol",
                    imagen: "http://cumafar.helencaltum.com/wp-content/uploads/2016/11/paracetamol.jpg",
                    precio: "$20.00"
                },
                {
                    nombre: "Paracetamol",
                    imagen: "http://cumafar.helencaltum.com/wp-content/uploads/2016/11/paracetamol.jpg",
                    precio: "$20.00"
                },
                {
                    nombre: "Paracetamol",
                    imagen: "http://cumafar.helencaltum.com/wp-content/uploads/2016/11/paracetamol.jpg",
                    precio: "$20.00"
                },
                {
                    nombre: "Paracetamol",
                    imagen: "http://cumafar.helencaltum.com/wp-content/uploads/2016/11/paracetamol.jpg",
                    precio: "$20.00"
                },
                {
                    nombre: "Paracetamol",
                    imagen: "http://cumafar.helencaltum.com/wp-content/uploads/2016/11/paracetamol.jpg",
                    precio: "$20.00"
                },
                {
                    nombre: "Paracetamol",
                    imagen: "http://cumafar.helencaltum.com/wp-content/uploads/2016/11/paracetamol.jpg",
                    precio: "$20.00"
                },
                {
                    nombre: "Paracetamol",
                    imagen: "http://cumafar.helencaltum.com/wp-content/uploads/2016/11/paracetamol.jpg",
                    precio: "$20.00"
                }
            ]
        }
    }
    render(){
        const { Meta } = Card
        return(
            <Row gutter={16}>
                {this.state.products.map((product, index)=>(
                    <Col key={index} span={8} style={{marginBottom: "16px"}}>
                    <Card 
                        cover={<img src={product.imagen} alt={product.nombre}/>}
                        actions={[<Icon type="dollar" />, <Icon type="shopping-cart" />]}
                    >
                        <Meta 
                            avatar={<Avatar src="https://avatars2.githubusercontent.com/u/6130385?s=460&v=4" />}
                            title={product.nombre}
                            description={product.precio}
                        />
                    </Card>
                    </Col>
                ))}
            </Row>
        )
    }
}

export default Products