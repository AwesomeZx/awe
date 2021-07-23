import './../assets/font/iconfont.scss';
import { App } from 'vue';
import aweIcon from '../packages/awe-icon';
import aweTag from '../packages/awe-tag';
import aweAlert from '../packages/awe-alert';
import aweAvatar from '../packages/awe-avatar/index';
import aweButton from '../packages/awe-button/index';
import aweButtonGroup from '../packages/awe-button-group';
import aweBadge from '../packages/awe-badge';
import aweSteps from '../packages/awe-steps';
import aweStep from '../packages/awe-step';
import aweCard from '../packages/awe-card';
import aweLoader from '../packages/awe-loader';
import aweCol from '../packages/awe-col';
import aweRow from '../packages/awe-row';
import aweList from '../packages/awe-list';
import aweRate from '../packages/awe-rate';
import aweCheckbox from '../packages/awe-checkbox';
import aweSidenav from '../packages/awe-sidenav';
import aweMessage from '../packages/awe-message';
import aweDrawer from '../packages/awe-drawer';
import awePagination from '../packages/awe-pagination';
import aweProgress from '../packages/awe-progress';
import aweToggle from '../packages/awe-toggle';
import aweTable from '../packages/awe-table';
import aweUpload from '../packages/awe-upload';
import aweTooltip from '../packages/awe-tooltip';
import aweInput from '../packages/awe-input';
import aweModal from '../packages/awe-modal';

import aweSidenavItem from '../packages/awe-sidenav-item';
import aweSubSidenav from '../packages/awe-sub-sidenav';

// import aweToast from '../packages/aweToast';
// import aweTree from '../packages/aweTree';
// import locale from './locale/index';

const components = [
  aweIcon,
  aweAlert,
  aweButton,
  aweBadge,
  aweLoader,
  aweButtonGroup,
  aweInput,
  aweCol,
  aweRow,
  // aweToast,
  aweTable,
  awePagination,
  aweModal,
  aweProgress,
  aweDrawer,
  aweAvatar,
  aweUpload,
  aweList,
  aweCard,
  aweToggle,
  aweRate,
  // aweTree,
  aweTooltip,
  aweTag,
  aweSidenav,
  aweSidenavItem,
  aweSubSidenav,
  aweSteps,
  aweStep,
  aweCheckbox
];

const install = function (app: App) {
  components.forEach(component => {
    app.use(component as unknown as { install: () => any });
  });
  app.config.globalProperties.$aweMessage = aweMessage;
  return app;
};

export {
  aweIcon,
  aweAlert,
  aweButton,
  aweBadge,
  aweLoader,
  aweButtonGroup,
  aweInput,
  aweCol,
  aweRow,
  // aweToast,
  aweTable,
  awePagination,
  aweModal,
  aweProgress,
  aweDrawer,
  aweAvatar,
  aweUpload,
  aweList,
  aweCard,
  aweToggle,
  aweRate,
  // aweTree,
  aweTooltip,
  aweTag,
  aweSidenav,
  aweSidenavItem,
  aweSubSidenav,
  aweSteps,
  // aweStep,
  // aweCheckbox
};

export default {
  install
};
