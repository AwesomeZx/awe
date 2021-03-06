import { defineComponent, PropType, App, SetupContext } from 'vue';
import classNames from '../../src/utils/className';
import './index.scss';

const AvatarProps = {
  size: {
    type: String as PropType<''>,
    default: 'md'
  },
  shape: {
    type: String as PropType<''>,
    default: 'square'
  },
  src: {
    type: String as PropType<''>,
    default: ''
  },
  alt: {
    type: String as PropType<''>,
    default: ''
  }
};

const AweAvatar = defineComponent({
  name: 'AweAvatar',
  props: AvatarProps,
  setup (props, { slots }: SetupContext) {
    const avatarClass = () => {
      const classList = ['aweavatar'];
      if (props.size && typeof props.size === 'string') {
        classList.push(`aweavatar-${props.size}`);
      }
      if (props.shape) {
        classList.push(`aweavatar-${props.shape}`);
      }
      return classNames(classList);
    };
    const sizeStyle = () => {
      return typeof props.size === 'number'
        ? {
            height: `${props.size}px`,
            width: `${props.size}px`,
            lineHeight: `${props.size}px`
          }
        : {};
    };
    const bgStyle = () => {
      if (props.src) {
        return {};
      } else {
        return {
          background: '#CCCCCC'
        };
      }
    };
    const renderSolt = () => (
      <div>
        {slots.default && slots.default()}
      </div>
    );

    const renderImg = () => (
      <img class="aweavatar-img" src={props.src} alt={props.alt}/>
    );

    const rederContent = () => {
      if (props.src) {
        return renderImg();
      }
      return renderSolt();
    };
    return () => (
      <div class={avatarClass()} style={{ ...sizeStyle(), ...bgStyle() }}>
        {rederContent()}
      </div>
    );
  }
});

AweAvatar.install = function (app: App) {
  app.component(AweAvatar.name, AweAvatar);
  return app;
};

export default AweAvatar;
