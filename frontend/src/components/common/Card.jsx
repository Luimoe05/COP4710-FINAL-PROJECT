function Card({ icon, title, headerAction, children }) {
  return (
    <div className="card">
      <div className="card__header">
        <h3>
          {icon && <i className={icon}></i>}
          {' '}{title}
        </h3>
        {headerAction}
      </div>
      <div className="card__body">{children}</div>
    </div>
  )
}

export default Card
