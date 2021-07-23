import { defineComponent, App } from 'vue';
import './index.scss';
import classNames from '../../src/utils/className';

interface stepProps {
  title?: string
  description?: string,
  index?: number,
  vertical?: boolean,
  isLatest?: boolean,
  active?: boolean,
}

const AweStep = defineComponent({
  name: 'AweStep',
  setup (_:stepProps, { slots, attrs }) {
    const { active, vertical, index, isLatest, title, description } = attrs as stepProps;

    const aweStepClass = () => {
      const classList = ['awe-step', active ? 'active' : '', vertical ? '' : 'awe-step-center'];
      return classNames(classList);
    };

    const iconClass = () => {
      const classList = ['icon', active ? 'active' : ''];
      return classNames(classList);
    };

    console.log(isLatest);
    console.log(vertical);

    return () => (
      <div class={aweStepClass()}>
        <div>
          <div class={iconClass()}>{index + 1}</div>
          { !isLatest && vertical && <div class="vertical-line" /> }
        </div>
        <div class="content">
          <div class="title">{title}</div>
          <div class="description">{description}</div>
        </div>
        { !isLatest && !vertical && <div class="line" /> }
        {slots.default && slots.default()}
      </div>
    );
  }
});

AweStep.install = function (app: App) {
  app.component(AweStep.name, AweStep);
  return app;
};

export default AweStep;
