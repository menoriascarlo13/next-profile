// import { setChangeCountries } from '@/services/centraEndpoints';

import styles from './Countries.module.css';

const Countries = ({ countries, countryAuto }: any) => {
  const onChangeCountrHandler = () => {
    const changeCountry = async () => {
      // const res = await setChangeCountries(e.target.value);
      //   await setChangeCountries(e.target.value);
    };

    changeCountry();
  };

  return (
    <select className={styles.Country} onChange={onChangeCountrHandler}>
      {countryAuto && (
        <option key={countryAuto.country.name} value={countryAuto.country.name}>
          {countryAuto.country.name}
        </option>
      )}

      {countries.length > 0 &&
        countries.map(
          ({ country, name }: any) =>
            countryAuto.country.name !== name && (
              <option key={country} value={country}>
                {name}
              </option>
            )
        )}
    </select>
  );
};

export default Countries;
