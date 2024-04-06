
import { PropTypes } from "prop-types";
import { React, useState } from "react";

const QuestionnaireTextField = (props) => {
    const [text, setText] = useState("Enter Answer");

    //removes default text value upon inputFocus
    const handleInputFocus = () => {
            setText("");
    };

    //inserts default text value upon inputBlur
    const handleInputBlur = () => {
        if (text === "") {
            setText("Enter Answer");
        }
    };

    return (
        <div>

            <form style={{ textAlign: 'left'}}>
                <label style={Styles.InputPrompt}>{props.label}</label><br></br>
                <input
                    type="text"
                    value={text}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                    onChange={(event) => { setText(event.target.value); }}
                    style={Styles.Input}
                />
            </form>

        </div>
    )
}

QuestionnaireTextField.propTypes = {
    label: PropTypes.string.isRequired,
}

export default QuestionnaireTextField;

const Styles = {

    Setup: {
        backgroundColor: 'white',
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
        borderStyle: 'solid',
        borderRadius: 2,
        borderWidth: 1,

        width: '100%',
        height: 100,

        marginBottom: 30,
        padding: 5,

        fontSize: 15,
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