import { defineComponent, App, HTMLAttributes, SetupContext } from 'vue';

export interface IconProps extends HTMLAttributes {
  name?: string;
}

const AweIcon = defineComponent({
  name: 'AweIcon',
  setup (_:IconProps, { attrs }: SetupContext) {
    const props = attrs as IconProps;
    const { name } = props;
    return () => (
        <i class={'iconfont ' + name}/>
    );
  }
});

AweIcon.install = function (app: App) {
  app.component(AweIcon.name, AweIcon);
  return app;
};

export default AweIcon;
