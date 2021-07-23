import { defineComponent, App, SetupContext, Transition, PropType } from 'vue';
import './index.scss';
import classNames from '../../src/utils/className';
import AweButton from '../awe-button';

const ModalProps = {
  show: {
    type: Boolean as PropType<false>,
    default: false
  },
  size: {
    type: String as PropType<''>,
    default: 'md'
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

const AweModal = defineComponent({
  name: 'AweModal',
  props: ModalProps,
  setup (props, { slots, emit }: SetupContext) {
    const modalClass = () => {
      return classNames(['awe-modal', `${props.size}`]);
    };

    const closeModal = () => {
      emit('close', false);
    };

    const aweconfirm = () => {
      props.confirm();
      closeModal();
    };

    const awecancel = () => {
      props.cancel();
      closeModal();
    };

    return () => (
      <Transition name="aweModal">
        {props.show
          ? <div class="awe-modal-wrapper">
          <div class="awe-modal-backdrop" role="button" tabindex={-1} onClick={closeModal} />
          <div class={modalClass()}>
            <div class="awe-modal-content">
              <div class="awe-modal-header">
                <div class="title">
                  {props.title}
                </div>
                <div class="close">
                  <span class="icon-close" onClick={closeModal} />
                </div>
              </div>
              {slots.default && slots.default()}
              <div class="awe-modal-footer">
                <AweButton type="primary" onClick={aweconfirm}>确认</AweButton>
                <AweButton onClick={awecancel}>取消</AweButton>
              </div>
            </div>
          </div>
        </div >
          : null}
      </Transition>
    );
  }
});

AweModal.install = function (app: App) {
  app.component(AweModal.name, AweModal);
  return app;
};

export default AweModal;
