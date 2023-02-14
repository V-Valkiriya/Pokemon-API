import React, {useEffect, useState} from 'react';
import TextField from '@mui/material/TextField';
import {Button} from "@mui/material";
import './Form.css'
import axios from 'axios';
import PokemonItem from "../PokemonItem";

const Form = () => {
    const [name, setName] = useState('')
    const [result, setResult] = useState(null)
    const [error, setError] = useState(false)


    const onSubmit = async() => {
        try {
            const {data} = await axios.get("https://pokeapi.co/api/v2/pokemon/" + name)
            const normalizeData = {
                name: data.name,
                image: data.sprites['front_default']
            }
            setResult(normalizeData)
            setError(false)
        } catch(e) {
            setError(true)
            setResult(null)
            console.log(e)
        }
    }


    return (
        <>
        <div className='form'>  
                <TextField
                    value={name}
                    id="outlined-multiline-flexible"
                    label="Multiline"
                    multiline
                    maxRows={4}
                    onChange={(e) => setName(e.target.value)}
                />
            <Button onClick={onSubmit} className='find-btn' variant='contained'>Find Pokemon</Button>
        </div>
        {result && (
            <div className='item'><img src={result.image} alt='pokemon' />
                <h3>{result.name}</h3></div>
        )}
        {error && (
            <div className='item'>
                <p>There is no pokemon by provided name</p>
            </div>
        )}
        </>
    );
};

export default Form;
