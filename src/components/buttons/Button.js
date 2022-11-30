import "./Button.scss";

export default function Button(props) {
    const classes = props.className ? `button ${props.className}` : "button"

    return (
        <button {...props} className = {classes}>
            {props.children}
        </button>
    );
}