import { defineComponent, App, HTMLAttributes, SetupContext } from 'vue';
import AweLoader from '../awe-loader';
import AweIcon from '../awe-icon';
import classNames from '../../src/utils/className';
import './index.scss';

const initDefaultProps = {
  type: 'default',
  icon: '',
  loading: false,
  size: ''
};

export interface ButtonProps extends HTMLAttributes {
  type?: string;
  disabled?: boolean;
  size?: string;
  icon?: string;
  loading?: boolean;
}

const AweButton = defineComponent({
  name: 'AweButton',
  setup (_: ButtonProps, { slots, attrs }: SetupContext) {
    const props = attrs as ButtonProps;
    const buttonProps = { ...initDefaultProps, ...props };
    const { size, disabled, loading, icon, type } = buttonProps;
    const classString = classNames([
      'awebutton',
      type,
      disabled ? 'awebutton-disabled' : '',
      size
    ]);
    const renderIcon = () => {
      if (loading || icon) {
        return (
          <span class="awebutton-icon">
            {loading && <AweLoader size="xs" show={true}/>}
            {icon && !loading && <AweIcon name={icon} />}
          </span>
        );
      }
    };

    return () => (
        <button class={classString} disabled={disabled}>
          <div class="awebutton-content">
            {renderIcon()}
            <span class="awebutton-slot">{slots.default && slots.default()}</span>
          </div>
        </button>
    );
  }
});

AweButton.install = function (app: App) {
  app.component(AweButton.name, AweButton);
  return app;
};

export default AweButton;
