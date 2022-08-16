import React, { useState, useEffect } from 'react';
import { BryntumGrid } from '@bryntum/grid-react';
import './App.scss';
import { dataStore } from './store/data-store';

function App() { 
    const [data, setData] = useState(dataStore.data);
    const [columns, setColumns] = useState([
        { text : 'Country Name', field : 'countryName', flex : 2 },
        { text : 'Code', field : 'code', flex: 1},
        { text : 'Capital', field : 'capital', flex : 1 },
        { text : 'Continent', field : 'continent', flex : 1 },
        { text : 'Currency', field : 'currency', flex : 1 },
        { text : 'Languages', field : 'languages', flex : 1 }
    ]);
    const [features, setFeatures] = useState({
        cellEdit     : true,
        regionResize : false,
        stripe: true
    });
    
    useEffect(() => {
        const subscription = dataStore.onData().subscribe(data => {
            setData(data);
        });
        return () => subscription.unsubscribe();   
    } , []);

    

    return (
        
        <BryntumGrid data={data}  columns={columns}   features={features} />
        
    );
}

export default App;
