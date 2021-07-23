
import { defineComponent, App, HTMLAttributes, SetupContext } from 'vue';
import './index.scss';

export interface SideNavProps extends HTMLAttributes {

}

const AweSidenav = defineComponent({
  name: 'AweSidenav',
  setup (_:SideNavProps, { slots }:SetupContext) {
    return () => (
      <div class="awe-sidenav">
        <div class="awe-child">
          {slots.default && slots.default()}
        </div>
      </div>
    );
  }
});

AweSidenav.install = function (app:App) {
  app.component(AweSidenav.name, AweSidenav);
  return app;
};

export default AweSidenav;
