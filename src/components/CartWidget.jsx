import React from 'react';

export default function CartWidget() {
    return (
        <div className="cart-widget">
            <a href=""><img src="https://cdn-icons-png.flaticon.com/512/107/107831.png" width="50rem" style={{backgroundColor:"white"}}></img></a>
            <div className="qty-display">0</div>
        </div>
    );
}