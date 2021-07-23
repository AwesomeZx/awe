import { defineComponent, App, PropType, SetupContext } from 'vue';
import './index.scss';
import { guid } from '../../src/utils/util';

const CheckboxProps = {
  checked: {
    type: Boolean as PropType<false>,
    default: false
  },
  defaultChecked: {
    type: Boolean as PropType<false>,
    default: false
  },
  disabled: {
    type: Boolean as PropType<false>,
    default: false
  }
};

const AweCheckbox = defineComponent({
  name: 'AweCheckbox',
  props: CheckboxProps,
  setup (props, { slots }: SetupContext) {
    const id = guid();
    const checkeval = () => {
      if (props.checked) {
        return props.checked;
      }
      return false;
    };
    return () => (
      <div class="awe-checkbox">
        <input id={id} class={[props.disabled ? 'awe-checkbox-disble' : '']} disabled={props.disabled} type="checkbox" checked={checkeval()}/>
        <label for={id} class={[props.disabled ? 'awe-checkbox-disble' : '']}/>
        <div class="slot-text">
          {slots.default && slots.default()}
        </div>
      </div>
    );
  }
});

AweCheckbox.install = function (app: App) {
  app.component('AweCheckbox', AweCheckbox);
};

export default AweCheckbox;
