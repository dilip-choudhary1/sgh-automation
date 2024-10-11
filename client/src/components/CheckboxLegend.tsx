import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { green, pink, purple, red } from '@mui/material/colors';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';


const theme = createTheme({
    palette: {

    },
});


export default function CheckboxLegend({
    categoryFilter,
    setCategoryFilter
}: {
    categoryFilter: string[],
    setCategoryFilter: React.Dispatch<React.SetStateAction<string[]>>
}) {

    const handleChange = (e: any) => {
        if(e.target.checked){
            setCategoryFilter([...categoryFilter, e.target.name])
        } else {
            setCategoryFilter(categoryFilter.filter((item) => item!=e.target.name))
        }
    }

    return (
        <ThemeProvider theme={theme}>

            <FormGroup className='w-full'>

                {
                    ['fabricItems', 'furniture', 'lighting', 'total'].map((category, key) => {
                        return (
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        defaultChecked
                                        icon={<RadioButtonUncheckedIcon />}
                                        checkedIcon={<RadioButtonCheckedIcon />}
                                        onChange={handleChange}
                                        name={category}

                                    />
                                }
                                key={key}
                                label={category}
                            />
                        )
                    })
                }



            </FormGroup>
        </ThemeProvider>
    );
}
