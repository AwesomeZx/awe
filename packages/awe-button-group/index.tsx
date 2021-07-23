import { defineComponent, App, HTMLAttributes, SetupContext } from 'vue';
import './index.scss';
export interface ButtonGroupProps extends HTMLAttributes {}

const AweButtonGroup = defineComponent({
  name: 'AweButtonGroup',
  setup (_:ButtonGroupProps, { slots }: SetupContext) {
    return () => (
      <div class="awe-button-group">
        {slots.default && slots.default()}
      </div>
    );
  }
});

AweButtonGroup.install = function (app: App) {
  app.component(AweButtonGroup.name, AweButtonGroup);
  return app;
};

export default AweButtonGroup;
