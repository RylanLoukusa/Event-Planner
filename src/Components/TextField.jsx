
import { PropTypes } from "prop-types";
import { React, useState, useEffect } from "react";

const TextField = (props) => {
    const [text, setText] = useState(`${props.action} ${props.label}`); //sets input value
    const [fieldLabel, setFieldLabel] = useState(""); //sets label value

    //removes default text value upon inputFocus
    const handleInputFocus = () => {
        if (text === `${props.action} ${props.label}`) {
            setText("");
        }
    };

    //inserts default text value upon inputBlur
    const handleInputBlur = () => {
        if (text === "") {
            setText(`${props.action} ${props.label}`);
        }
    };

    //sets label depending on props.action
    const labelDisplay = () => {
        if (props.action === "Confirm") {
            setFieldLabel(`${props.action} ${props.label}`);
        } else if (props.action === "Enter") {
            setFieldLabel(props.label);
        }
    };  

    return (
        <div style={{ width: '80%' }}>

            <form style={Styles.SelectionView}>
                {useEffect(() => { labelDisplay() }, [props.label, props.action])}
                <label style={Styles.InputPrompt}>{fieldLabel}</label>
                <input
                    type="text"
                    value={text}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                    onChange={(event) => { setText(event.target.value); }}

                />
            </form>

        </div>
    )
}

TextField.propTypes = {
    action: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
};

export default TextField;

const Styles = {

    Setup: {
        backgroundColor: 'white',
        alignItems: 'center',
    },

    Buttons: {
        backgroundColor: 'orange',
        margin: 10,
    },

    ButtonText: {
        textAlign: 'center',
    },

    SelectionView: {
        borderWidth: 4,
        padding: 5,
        paddingBottom: 10,
        margin: 10,
        textAlign: 'right',
        width: '100%'
    },

    HeaderText: {
        fontWeight: 'bold',
        textSize: 25,
    },

    TitleText: {
        fontSize: 40,
        paddingBottom: 50,
        color: 'grey',
        textAlign: 'center',
    },

    Input: {
        padding: 5,
        margin: 20,
        borderWidth: 1,
    },

    Header: {
        padding: 20,
        textAlign: 'center',
        fontSize: 20,
    },

    InputPrompt: {
        color: 'orange',
        fontSize: 15,
        margin: 10,
    }
}