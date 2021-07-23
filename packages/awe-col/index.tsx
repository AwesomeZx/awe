import { defineComponent, App, HTMLAttributes, SetupContext } from 'vue';
import classNames from '../../src/utils/className';
import './index.scss';

export interface ColProps extends HTMLAttributes {
  span?: string | number;
  offset?: string | number;
}

const AweCol = defineComponent({
  name: 'AweCol',
  setup (_:ColProps, { slots, attrs }: SetupContext) {
    const props = attrs as ColProps;
    const { span, offset } = props;
    const classString = classNames([
      'awe-col',
      span ? `awe-col-${span}` : '',
      offset ? `offset-${offset}` : ''
    ]);
    return () => (
      <div class={classString}>
         {slots.default && slots.default()}
      </div>
    );
  }
});

AweCol.install = function (app: App) {
  app.component(AweCol.name, AweCol);
  return app;
};

export default AweCol;
