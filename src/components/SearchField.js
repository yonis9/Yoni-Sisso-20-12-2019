import React  from 'react';
import './SearchField.css';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete'


const SearchField = ({ onSearchChange, searchOutputs, setLocation }) => {



    return (
        <div id='search-con'>
            
        <Autocomplete
        id="combo-box-demo"
        options={searchOutputs}
        getOptionLabel={option => option.LocalizedName +', ' +option.Country.LocalizedName}
        onChange={(event, value) => setLocation(value)}
        style={{ width: '50%' }}
        renderInput={params => (
            <TextField {...params} label="Choose your location" variant="outlined" fullWidth onChange={onSearchChange}/>
        )}
        />


        </div>
    )
}

export default SearchField;