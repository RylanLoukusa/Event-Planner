import { React, useState } from "react";

const DrinkSelect = () => {
    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleOptionChange = (event) => {
        const option = event.target.value;

        //Check if option is already selected
        if (selectedOptions.includes(option)) {
            setSelectedOptions(selectedOptions.filter((item) => item !== option));
        } else {
            //Make sure no more than 2 options are selected
            if (selectedOptions.length < 2) {
                setSelectedOptions([...selectedOptions, option]);
            }
        }
    }

    return (
        <div>
            <p style={Styles.InputPrompt}>What drinks would you like? (required - choose 2)</p>

            <label style={Styles.DrinkOption}>
                <input
                    type="checkbox"
                    name="drink"
                    value="Pepsi"
                    checked={selectedOptions.includes("Pepsi")}
                    onChange={handleOptionChange}
                /> Pepsi
            </label>

            <label style={Styles.DrinkOption}>
                <input
                    type="checkbox"
                    name="drink"
                    value="Diet Pepsi"
                    checked={selectedOptions.includes("Diet Pepsi")}
                    onChange={handleOptionChange}
                /> Diet Pepsi
            </label>

            <label style={Styles.DrinkOption}>
                <input
                    type="checkbox"
                    name="drink"
                    value="Root Beer"
                    checked={selectedOptions.includes("Root Beer")}
                    onChange={handleOptionChange}
                /> Root Beer
            </label>

            <label style={Styles.DrinkOption}>
                <input
                    type="checkbox"
                    name="drink"
                    value="Starry"
                    checked={selectedOptions.includes("Starry")}
                    onChange={handleOptionChange}
                /> Starry
            </label>

            <label style={Styles.DrinkOption}>
                <input
                    type="checkbox"
                    name="drink"
                    value="Lemonade"
                    checked={selectedOptions.includes("Lemonade")}
                    onChange={handleOptionChange}
                /> Lemonade
            </label>

            <label style={Styles.DrinkOption}>
                <input
                    type="checkbox"
                    name="drink"
                    value="Dr. Pepper"
                    checked={selectedOptions.includes("Dr. Pepper")}
                    onChange={handleOptionChange}
                /> Dr. Pepper
            </label>

            <label style={Styles.DrinkOption}>
                <input
                    type="checkbox"
                    name="drink"
                    value="Orange Crush"
                    checked={selectedOptions.includes("Orange Crush")}
                    onChange={handleOptionChange}
                /> Orange Crush
            </label>

            <label style={Styles.DrinkOption}>
                <input
                    type="checkbox"
                    name="drink"
                    value="Water"
                    checked={selectedOptions.includes("Water")}
                    onChange={handleOptionChange}
                /> Water
            </label>

        </div>
    );
}

export default DrinkSelect;

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
    },

    DrinkOption: {
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'orange',
        borderRadius: 5,
    },
}