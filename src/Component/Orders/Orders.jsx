import React from 'react'
import './Orders.css'

export default function Orders() {
    console.log(window.innerWidth)
    return (
        <table className='order_cont poppins-regular'>
            <tr>
                {window.innerWidth > 1200 && <th>Product Name</th>}
                <th>Product Number</th>
                <th>Amount</th>
                <th>Status</th>
                {window.innerHeight > 1200 && <td>&nbsp;</td>}
            </tr>
            <tr>
                {window.innerWidth > 1200 && <td>Mobile</td>}
                <td>9,06,756</td>
                <td>Due</td>
                <td><span style={{ color: '#F7D060' }}>Pending</span></td>
                {window.innerWidth > 1200 && <td>Detail</td>}
            </tr>
            <tr>
                {window.innerWidth > 1200 && <td>Laptop</td>}
                <td>98,762</td>
                <td>Refundabe</td>
                <td><span style={{ color: '#FF0060' }}>Declined</span></td>
                {window.innerWidth > 1200 && <td>Detail</td>}
            </tr>
            <tr>
                {window.innerWidth > 1200 && <td>Airpods</td>}
                <td>1,95345</td>
                <td>Paid</td>
                <td><span style={{ color: '#195bce' }}>Active</span></td>
                {window.innerWidth > 1200 && <td>Detail</td>}
            </tr>
        </table>
    )
}
