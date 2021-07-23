import { defineComponent, App, SetupContext } from 'vue';
import './index.scss';

const ToggleProps = {
  disabled: {
    type: Boolean,
    default: false
  },
  checked: {
    type: Boolean,
    default: false
  }
};

const AweToggle = defineComponent({
  name: 'AweToggle',
  props: ToggleProps,
  setup (props, { emit }: SetupContext) {
    const handleChange = () => {
      emit('updateModel', props.checked);
    };

    return () => (
      <div class="awe-toggle">
        <label>
          <input
            id="toggle"
            checked={props.checked}
            type="checkbox"
            style="display: none;"
            disabled={props.disabled}
            onChange={handleChange}
          />
          <span
            class="awe-toggle-body"
          />
        </label>
      </div>
    );
  }
});

AweToggle.install = function (app: App) {
  app.component(AweToggle.name, AweToggle);
};

export default AweToggle;
