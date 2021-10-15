import React from "react";

class Forms extends React.Component {
    render() {
        return (
            <form>
                <fieldset>
                    <label htmlFor="name">
                        Nome:
                        <input
                        id='name'
                        type="text"
                        maxLength='40'
                        required/>
                    </label>
                    <label htmlFor="email">
                        Email:
                        <input
                        id='email'
                        type="email"
                        maxLength='50'
                        required/>
                    </label>
                    <label htmlFor="cpf">
                        CPF:
                        <input
                        id='cpf'
                        type="text"
                        maxLength='11'
                        required/>
                    </label>
                </fieldset>
            </form>
        )
    }
}

export default Forms;