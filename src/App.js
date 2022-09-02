import React, { useState, useEffect } from 'react';
import { BryntumGrid } from '@bryntum/grid-react';
import './App.scss';
import { DataStore } from './store/DataStore';

function App() { 
    const [toggleForm, setToggleForm] = useState(false);
    const [data, setData] = useState(DataStore.data);
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
        stripe: true,
        filter: true,
        rowReorder: true,
        columnReorder: true,
        
    });
    const [formData, setFormData] = useState({
        id: '',
        countryName: '',
        code: '',
        capital: '',
        continent: '',
        currency: '',
        languages: ''
    });
    
    useEffect(() => {
        const subscription = DataStore.onData().subscribe(data => {
            setData(data);
        });
        return () => subscription.unsubscribe();   
    } , []);

    const triggerToggle = () => {
        setToggleForm(!toggleForm);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // to increment the id of the new record
        formData.id = data.length + 1;

        // to add the new record to the data array
        DataStore.sendData([...data, formData]);

        // to reset the form
        setFormData({
            id: '',
            countryName: '',
            code: '',
            capital: '',
            continent: '',
            currency: '',
            languages: ''
        });
        // to close the form
        setToggleForm(!toggleForm);

    }

    return (
        <>
            <div className='content-container'>
                <div className='new-content'>
                    <button className='btn-primary' onClick={triggerToggle}>Add new</button> 
                </div>

                { toggleForm && <div>
                    <form className='form-container'>
                        <input 
                            type="text" 
                            placeholder="Country Name" 
                            name='countryName'  
                            id='countryName'
                            className='form-input' 
                            onChange={(e) => setFormData({...formData, countryName: e.target.value})} 
                            value={formData.countryName}
                        />
                        <input 
                            type="text" 
                            placeholder="Code" 
                            name='code' 
                            id='code' 
                            className='form-input'
                            onChange={(e) => 
                                setFormData({...formData, 
                                code: e.target.value})
                            } 
                            value={formData.code}
                        />
                        <input 
                            type="text" 
                            placeholder="Capital" 
                            name='capital'
                            id='capital'
                            className='form-input'
                            onChange={(e) =>
                                setFormData({...formData,
                                capital: e.target.value})
                            }
                            value={formData.capital}
                        /> <br />
                        <input 
                            type="text" 
                            placeholder="Continent" 
                            name='continent'
                            id='continent'
                            className='form-input'
                            onChange={(e) =>
                                setFormData({...formData,
                                continent: e.target.value})
                            }
                            value={formData.continent}
                            
                        />
                        <input 
                            type="text" 
                            placeholder="Currency" 
                            name='currency'
                            id='currency'
                            className='form-input'
                            onChange={(e) =>
                                setFormData({...formData,
                                currency: e.target.value})
                            }
                            value={formData.currency}
                        />
                        <input 
                            type="text" 
                            placeholder="Languages" 
                            name='languages'
                            id='languages'
                            className='form-input'
                            onChange={(e) =>
                                setFormData({...formData,
                                languages: e.target.value})
                            }
                            value={formData.languages}
                        />
                        <div>
                            <button className='btn-primary' onClick={handleSubmit}>Submit</button>
                        </div>
                        <br />
                    </form>
                        </div>}
                <BryntumGrid data={data}  columns={columns}   features={features} />
            </div>
        </>
    );
}

export default App;
