import React from 'react'
import Button from '@mui/material/Button';

const inputStyle = {
    width: '70vw',
    height: '50px',
    gap: '90px',
    borderRadius: '7px',
    color: 'black',
    backgroundColor: 'white',
    paddingLeft: '15px',
    paddingRight: '15px',
}

const containerStyle = {

}

const buttonStyle = {
    width: '100px',
    height: '50px',
    marginLeft: '10px',
    marginTop: '20px'
}

export default function InputComponent({ Input, setInput, handleApi }) {

    const handleForm = (event: React.SubmitEvent<HTMLFormElement>) => {

        event.preventDefault()
        const formData = new FormData(event.currentTarget);
        setInput(Number(formData.get('input')))
        console.log(Input);
        handleApi(Number(formData.get('input')))
    }

    return (
        <>
            <div className="container" style={containerStyle}>
                <div className="row">
                    <form action="" onSubmit={handleForm}>
                        <input type="number" name="input" id="input" style={inputStyle} min={1} required />
                        <Button type='submit' variant="contained" sx={buttonStyle}>Extract</Button>
                    </form>
                </div>
            </div>
        </>
    )
}
