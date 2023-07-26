import Header from '../../common/Header/Header';
import MenuWorkers from '../../common/MenuWorkers/MenuWorkers';
import WorkerListsController from '../../features/WorkerLists/WorkerListsController';
import styles from './WorkerAdminPanel.module.scss';

const WorkerAdminPanel = () => {
  return (
    <div>
      <Header />
      <MenuWorkers />
      <WorkerListsController />
    </div>
  )
}

export default WorkerAdminPanel