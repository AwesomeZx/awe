import { defineComponent, App, SetupContext, PropType, toRef } from 'vue';
import classNames from '../../src/utils/className';
import './index.scss';

const BadgeProps = {
  content: {
    type: String as PropType<''>,
    default: ''
  }
};

const AweBadge = defineComponent({
  name: 'AweBadge',
  props: BadgeProps,
  setup (props, { slots }: SetupContext) {
    const content = toRef(props, 'content');
    const classString = classNames([
      'awe-badge-common',
      content.value === '' ? 'awe-badge-default' : 'awe-badge-content'
    ]);

    return () => (
      <div class="awe-badge">
        {slots.default && slots.default()}
        <span class={classString}>
          { content.value }
        </span>
      </div>
    );
  }
});

AweBadge.install = function (app: App) {
  app.component(AweBadge.name, AweBadge);
  return app;
};

export default AweBadge;
