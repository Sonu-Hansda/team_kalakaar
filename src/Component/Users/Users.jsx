import Person from './Person';
import './users.css';
import pic1 from '../../assets/Images/pic1.jpg';
import pic2 from '../../assets/Images/pic2.jpg';
import pic3 from '../../assets/Images/pic3.jpg';
import plus from '../../assets/Images/plus.png';
function Users() {
  return (
    <div className="users_container">
      <div style={{width: `${window.innerWidth > 1200 ? 49: 100}%`}}>
        <Person image={pic1} head={'Person1'} time={'23 Min ago'} />
        <Person image={pic2} head={'Person2'} time={'5 Hours ago'} />
      </div>
      <div style={{width: `${window.innerWidth > 1200 ? 49: 100}%`}}>
        <Person image={pic3} head={'Person3'} time={'8 Hours ago'} />
        <Person image={plus} head={'More'} />
      </div>

    </div>
  )
}

export default Users