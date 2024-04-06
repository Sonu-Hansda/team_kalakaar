function Person(props) {
  return (
    <div className="person__container">
        <img src={props.image} alt="Icon Image" />
        <h1 className="person__primaryText poppins-semibold">{props.head}</h1>
        <p className="person__secondaryText poppins-regular">{props.time}</p>
    </div>
  )
}

export default Person