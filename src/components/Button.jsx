function Button({ id, text, onClick, isSelected }) {
    return <button className={isSelected ? "btn btn-warning" : "btn btn-secondary"} key={id} onClick={onClick}>{text}</button>
}

export default Button;