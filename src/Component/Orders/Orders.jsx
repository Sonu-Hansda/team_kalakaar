import React from 'react'
import './Orders.css'
import pic1 from '../../assets/Images/pic1.jpg'
import pic2 from '../../assets/Images/pic1.jpg'
import pic3 from '../../assets/Images/pic1.jpg'

export default function Orders() {
    return (
        <table className='order_cont poppins-regular'>
            <tr>
                <th>Product Name</th>
                <th>Product Number</th>
                <th>Amount</th>
                <th>Status</th>
                <th>&nbsp;s</th>
            </tr>
            <tr>
                <td>Mobile</td>
                <td>9,06,756</td>
                <td>Due</td>
                <td><span color='#F7D060'>Pending</span></td>
                <td>Detail</td>
            </tr>
            <tr>
                <td>Laptop</td>
                <td>98,762</td>
                <td>Refundabe</td>
                <td>Declined</td>
                <td>Detail</td>
            </tr>
            <tr>
                <td>Airpods</td>
                <td>1,95345</td>
                <td>Paid</td>
                <td>Active</td>
                <td>Detail</td>
            </tr>
        </table>
    )
}
