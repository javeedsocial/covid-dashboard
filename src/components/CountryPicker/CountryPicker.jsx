import React, {useEffect, useState} from 'react';
import {NativeSelect , FormControl} from '@material-ui/core';

import {fetchCountries} from '../../api';
import styles from './ConutryPickerModule.css';

const CountryPicker = ({handleCountryChange}) => { 

    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(() => {
        const fetchAPI = async() => {
            setFetchedCountries(await fetchCountries());
        }
        fetchAPI();
    }, [setFetchedCountries])

console.log(fetchedCountries);


return (
    <FormControl className={styles.formControl}>
        <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)} style={{color:"lightgrey", fontSize:"20px"}}>
        <option value="">Choose Country to get the Current state</option>
        {fetchedCountries.map((country, i) => <option key ={i} value = {country}>{country}</option>)}
        </NativeSelect>
    </FormControl>
)
}

export default CountryPicker;
