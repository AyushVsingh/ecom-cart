import React from 'react';

class CartItem extends React.Component {
    render() {
        console.log('this.props', this.props);
        const { price, title, qty } = this.props.product;
        return (
            <div className="cart-item">
                {this.props.jsx}
                <div className="left-block">
                    <img style={styles.image} />
                </div>
                <div className="right-block">
                    <div style={{ fontSize: 25 }}>{title}</div>
                    <div style={{ color: '#777' }}>Rs {price} </div>
                    <div style={{ color: '#777' }}>Qty: {qty} </div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
                        <img
                            alt="increase"
                            className="action-icons"
                            src="https://www.svgrepo.com/show/507821/plus-circle.svg"
                            onClick={() => this.props.onIncreaseQuantity(this.props.product)}
                        />
                        <img
                            alt="decrease"
                            className="action-icons"
                            src="https://www.svgrepo.com/show/507785/minus-circle.svg"
                            onClick={() => this.props.onDecreaseQuantity(this.props.product)}
                        />
                        <img
                            alt="delete"
                            className="action-icons"
                            src="https://www.svgrepo.com/show/502608/delete-2.svg"
                            onClick={() => this.props.onDeleteQuantity(this.props.product)}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}

export default CartItem;