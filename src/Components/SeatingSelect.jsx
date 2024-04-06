import { React, useState } from "react";

const SeatingSelect = () => {
    const [selectedOption, setSelectedOption] = useState("");

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    }

    return (
        <div>
            <p style={Styles.InputPrompt}>Where would you like to sit? (required)</p>
            <label>
                <input
                    type="radio"
                    name="seating"
                    value="Front"
                    onChange={handleOptionChange}
                />
                Front
            </label>

            <label>
                <input
                    type="radio"
                    name="seating"
                    value="Middle"
                    onChange={handleOptionChange}
                />
                Middle
            </label>

            <label>
                <input
                    type="radio"
                    name="seating"
                    value="Back"
                    onChange={handleOptionChange}
                />
                Back
            </label>
        </div>
    );
}

export default SeatingSelect;

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