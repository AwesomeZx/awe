import { defineComponent, App, PropType, toRefs } from 'vue';
import classNames from '../../src/utils/className';
import './index.scss';

const ListProps = {
  data: {
    type: Object as PropType<[]>,
    default: []
  },
  size: {
    type: String as PropType<string>,
    default: 'md'
  },
  bordered: {
    type: Boolean as PropType<boolean>,
    default: false
  },
  hover: {
    type: Boolean as PropType<boolean>,
    default: false
  }
};

const AweList = defineComponent({
  name: 'AweList',
  props: ListProps,
  setup (props) {
    const { data, size, bordered, hover } = toRefs(props);

    const ulClass = () => {
      const ulClassList = ['awe-list', bordered.value ? 'bordered' : ''];
      return classNames(ulClassList);
    };

    const listClass = () => {
      const classList = [];
      if (size.value && typeof size.value === 'string') {
        classList.push(`li${size.value}`);
      }
      if (bordered.value) {
        classList.push('bordered');
      }
      if (hover.value) {
        classList.push('hover');
      }
      return classNames(classList);
    };

    return () => (
      <ul class={ulClass()}>
        {data.value.map(dataItem => {
          return <li class={listClass()}>{dataItem}</li>;
        })}
      </ul>
    );
  }
});

AweList.install = function (app: App) {
  app.component(AweList.name, AweList);
  return app;
};

export default AweList;
