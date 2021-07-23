import { defineComponent, App, PropType, SetupContext, Transition } from 'vue';
import './index.scss';
import AweButton from '../awe-button';

const DrawerProps = {
  show: {
    type: Boolean as PropType<false>,
    default: false
  },
  title: {
    type: String as PropType<''>,
    default: 'md'
  },
  confirm: {
    type: Function as PropType<() => void>,
    default: () => {}
  },
  cancel: {
    type: Function as PropType<() => void>,
    default: () => {}
  }
};

const AweDrawer = defineComponent({
  name: 'AweDrawer',
  props: DrawerProps,
  setup (props, { slots, emit }: SetupContext) {
    const closeDrawer = () => {
      emit('close', false);
    };

    const thisConfirm = () => {
      props.confirm();
      closeDrawer();
    };

    const thisCancel = () => {
      props.cancel();
      closeDrawer();
    };

    return () => (
      <Transition name="awedrawer">
        {props.show
          ? <div class="awe-drawer-wrapper">
          <div class="awe-drawer-backdrop" role="button" tabindex={-1} onClick={closeDrawer}>
          </div>
          <div class="awe-drawer">
            <div class="awe-drawer-header">
              <div class="title">
                {props.title}
              </div>
              <div class="close">
                <span
                  class="icon-close"
                  onClick={closeDrawer}
                />
              </div>
            </div>
            {slots.default && slots.default()}
            <div class="awe-drawer-footer">
              <AweButton
                type="primary"
                onClick={thisConfirm}
              >
                确认
          </AweButton>
              <AweButton onClick={thisCancel}>
                取消
          </AweButton>
            </div>
          </div>
        </div>
          : null}

      </Transition>
    );
  }
});

AweDrawer.install = function (app: App) {
  app.component(AweDrawer.name, AweDrawer);
};

export default AweDrawer;
