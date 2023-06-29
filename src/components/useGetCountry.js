import {useEffect, useState} from 'react';

export const useGetCountry = () => {
  const [isLoading, setLoading] = useState(true);
  const [countries, setCountries] = useState([]);

  useEffect(() => {

    fetch('https://countriesnow.space/api/v0.1/countries/').
        then(res => res.json()).
        then(res => {
          setCountries(res.data.map((element) => ({label: element.country, value: element})));
          setLoading(false);
        });
  }, []);

  return {countries, isLoading};
};
