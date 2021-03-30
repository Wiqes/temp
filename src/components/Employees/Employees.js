import { WithRequest } from '@hoc/WithRequest/WithRequest';
import { useState, useEffect } from 'react';
import axios from '@services/axios';
import { useStyles } from './style';

export const Employees = () => {
  const classes = useStyles();

  const [employees, setEmployees] = useState([]);
  const [params, setParams] = useState('employees');

  useEffect(() => {
    async function fetchData() {
      const resp = await axios.get(`${params}`);
      if (resp?.data) {
        setEmployees(resp.data);
      }
    }

    fetchData();
  }, [params]);

  return (
    <WithRequest axios={axios}>
      <div className={classes.root}>
        <div>
          {employees.map((e) => (
            <div key={e.employee_name}>{e.employee_name}</div>
          ))}
        </div>
        <button type="button" onClick={() => setParams('employees')}>
          refetch
        </button>
        <button type="button" onClick={() => setParams('not_found')}>
          error
        </button>
      </div>
    </WithRequest>
  );
};
