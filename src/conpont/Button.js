import '../stylesheet/Button.css';

function Button({ text, isButtonClick, driveClick }) {
    return (
        <button
            className={isButtonClick ? 'button-click' : 'button-restart'}
            onClick={driveClick}>
            {text}
        </button>
    );
}

export default Button;
