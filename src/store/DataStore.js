import { Subject } from 'rxjs';

const subject = new Subject();

let   data = [        
    {
    id        : 1,
    countryName      : 'Brasil',
    code : 'BR',
    capital  : 'Brasília',
    continent      : 'South America',
    currency      : 'BRL',
    languages     : 'Portuguese'
    },
    {
        id        : 2,
        countryName      : 'Bahamas',
        code : 'BS',
        capital  : 'Nassau',
        continent      : 'North America',
        currency      : 'BSD',
        languages     : 'English'
        },
        {
            id        : 3,
            countryName      : 'Botswana',
            code : 'BW',
            capital  : 'Gaborone',
            continent      : 'Africa',
            currency      : 'BWP',
            languages     : 'English, Tswana'
            },
            {
                id        : 4,
                countryName      : 'Colombia',
                code : 'CO',
                capital  : 'Bogotá',
                continent      : 'South America',
                currency      : 'COP',
                languages     : 'Spanish'
                },
                {
                    id        : 5,
                    countryName      : 'Costa Rica',
                    code : 'CRC',
                    capital  : 'Brasília',
                    continent      : 'North America',
                    currency      : 'CR',
                    languages     : 'Spanish'
                    },
                    {
                        id        : 6,
                        countryName      : 'Ecuador',
                        code : 'EC',
                        capital  : 'Quito',
                        continent      : 'South America',
                        currency      : 'USD',
                        languages     : 'Spanish'
                        }]


export const dataStore = {
    sendData: (data) => { subject.next([...data] ); },
    onData: () => subject.asObservable(),
    data,
};