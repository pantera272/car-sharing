import { getAllUser } from '../../../redux/workersReducer';
import ButtonSmall from '../../common/ButtonSmall/ButtonSmall';
import styles from './WorkerListsController.module.scss';
import { useSelector } from 'react-redux';
import clsx from 'clsx';

const WorkerListsController = () => {

  const workers = useSelector(state => getAllUser(state));
  console.log(workers);

  return (
    <div className={styles.container}>
      <div className={styles.tableHead}>
        <table>
          <thead>
            <tr>
              <th className={styles.column20}>Name and Surname</th>
              <th className={styles.column20}>Phone number</th>
              <th className={styles.column20}>Email</th>
              <th className={clsx(styles.column40, styles.last)}>Action</th>
            </tr>  
          </thead>
        </table>
      </div>
      <div className={styles.tableBody}>
        <table>
          <tbody>
            {workers.map(worker =>
              <tr key={worker.id}>
                <td className={styles.column20}>{worker.name + ' ' + worker.surname}</td>
                <td className={styles.column20}>{worker.phone}</td>
                <td className={styles.column20}>{worker.email}</td>
                <td className={styles.column40}>
                  <ButtonSmall name='More info' variant='blue' />
                  <ButtonSmall name='Edit' variant='blue' className={styles.buttonMargin}/>
                  <ButtonSmall name='Remove' variant='blue' />
                </td>
              </tr> 
            )} 
          </tbody>  
        </table> 
      </div>   
    </div>
  )
}

export default WorkerListsController;