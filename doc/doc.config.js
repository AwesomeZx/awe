import { getLang } from './util/lang';

const localLang = getLang();
const developmentGuideString = localLang === 'en-US' ? 'Development Guide' : '开发指南';
const componentsString = localLang === 'en-US' ? 'Components' : '组件';
const aboutString = localLang === 'en-US' ? 'About' : '介绍';
const layoutString = localLang === 'en-US' ? 'Layout' : '布局';
const baseComponentsString = localLang === 'en-US' ? 'Base Components' : '基础组件';
const dataString = localLang === 'en-US' ? 'Data' : '数据';
const dataEntryString = localLang === 'en-US' ? 'Data Entry' : '数据录入';

export default {
  headerConfig: {
    logo: {
      href: 'https://awesomezx.github.io/awe',
      image: 'https://avatars3.githubusercontent.com/u/51054939?s=400&u=8d6342ba8bf5106086c26318ee290452501c6dff&v=4',
      title: 'Ninecat'
    },
    lang: 'zh-CN',
    versions: ['1.0.0', '1.1.0'],
    githubLink: 'https://github.com/awesomezx/awe',
    simulators: []
  },
  navConfig: [
    {
      name: developmentGuideString,
      groups: [
        {
          list: [
            {
              path: '/aweAbout',
              title: aboutString,
              component: () => {
                if (localLang === 'en-US') {
                  return import('./markdown/aweAbout/en-US/index.md');
                } else {
                  return import('./markdown/aweAbout/zh-CN/index.md');
                }
              }
            }
          ]
        }
      ]
    },
    {
      name: componentsString,
      groups: [
        {
          groupName: layoutString,
          list: [
            {
              path: '/aweGrid',
              title: 'Grid',
              component: () => {
                if (localLang === 'en-US') {
                  return import('./markdown/aweGrid/en-US/index.md');
                } else {
                  return import('./markdown/aweGrid/zh-CN/index.md');
                }
              }
            }
          ]
        },
        {
          groupName: baseComponentsString,
          list: [
            {
              path: '/aweButton',
              title: 'Button',
              component: () => {
                if (localLang === 'en-US') {
                  return import('./markdown/aweButton/en-US/index.md');
                } else {
                  return import('./markdown/aweButton/zh-CN/index.md');
                }
              }
            },
            {
              path: '/aweBadge',
              title: 'Badge',
              component: () => {
                if (localLang === 'en-US') {
                  return import('./markdown/aweBadge/en-US/index.md');
                } else {
                  return import('./markdown/aweBadge/zh-CN/index.md');
                }
              }
            },
            {
              path: '/aweLoader',
              title: 'Loader',
              component: () => {
                if (localLang === 'en-US') {
                  return import('./markdown/aweLoader/en-US/index.md');
                } else {
                  return import('./markdown/aweLoader/zh-CN/index.md');
                }
              }
            },
            {
              path: '/aweAlert',
              name: 'Alert',
              component: () => {
                if (localLang === 'en-US') {
                  return import('./markdown/aweAlert/en-US/index.md');
                } else {
                  return import('./markdown/aweAlert/zh-CN/index.md');
                }
              }
            },
            {
              path: '/aweMessage',
              name: 'Message',
              component: () => {
                if (localLang === 'en-US') {
                  return import('./markdown/aweMessage/en-US/index.md');
                } else {
                  return import('./markdown/aweMessage/zh-CN/index.md');
                }
              }
            },
            {
              path: '/aweModal',
              name: 'Modal',
              component: () => {
                if (localLang === 'en-US') {
                  return import('./markdown/aweModal/en-US/index.md');
                } else {
                  return import('./markdown/aweModal/zh-CN/index.md');
                }
              }
            },
            {
              path: '/aweDrawer',
              name: 'Drawer',
              component: () => {
                if (localLang === 'en-US') {
                  return import('./markdown/aweDrawer/en-US/index.md');
                } else {
                  return import('./markdown/aweDrawer/zh-CN/index.md');
                }
              }
            },
            {
              path: '/aweProgress',
              name: 'Progress',
              component: () => {
                if (localLang === 'en-US') {
                  return import('./markdown/aweProgress/en-US/index.md');
                } else {
                  return import('./markdown/aweProgress/zh-CN/index.md');
                }
              }
            },
            {
              path: '/aweCard',
              name: 'Card',
              component: () => {
                if (localLang === 'en-US') {
                  return import('./markdown/aweCard/en-US/index.md');
                } else {
                  return import('./markdown/aweCard/zh-CN/index.md');
                }
              }
            },
            {
              path: '/aweTooltip',
              name: 'Tooltip',
              component: () => {
                if (localLang === 'en-US') {
                  return import('./markdown/aweTooltip/en-US/index.md');
                } else {
                  return import('./markdown/aweTooltip/zh-CN/index.md');
                }
              }
            },
            {
              path: '/aweTag',
              name: 'Tag',
              component: () => {
                if (localLang === 'en-US') {
                  return import('./markdown/aweTag/en-US/index.md');
                } else {
                  return import('./markdown/aweTag/zh-CN/index.md');
                }
              }
            },
            {
              path: '/aweSidenav',
              name: 'Sidenav',
              component: () => {
                if (localLang === 'en-US') {
                  return import('./markdown/aweSidenav/en-US/index.md');
                } else {
                  return import('./markdown/aweSidenav/zh-CN/index.md');
                }
              }
            }
          ]
        },
        {
          groupName: dataString,
          list: [
            {
              path: '/aweAvatar',
              name: 'Avatar',
              component: () => {
                if (localLang === 'en-US') {
                  return import('./markdown/aweAvatar/en-US/index.md');
                } else {
                  return import('./markdown/aweAvatar/zh-CN/index.md');
                }
              }
            },
            {
              path: '/aweTable',
              name: 'Table',
              component: () => {
                if (localLang === 'en-US') {
                  return import('./markdown/aweTable/en-US/index.md');
                } else {
                  return import('./markdown/aweTable/zh-CN/index.md');
                }
              }
            },
            {
              path: '/aweList',
              name: 'List',
              component: () => {
                if (localLang === 'en-US') {
                  return import('./markdown/aweList/en-US/index.md');
                } else {
                  return import('./markdown/aweList/zh-CN/index.md');
                }
              }
            },
            {
              path: '/awePagination',
              name: 'Pagination',
              component: () => {
                if (localLang === 'en-US') {
                  return import('./markdown/awePagination/en-US/index.md');
                } else {
                  return import('./markdown/awePagination/zh-CN/index.md');
                }
              }
            },
            {
              path: '/aweTree',
              name: 'Tree'
            },
            {
              path: '/aweSteps',
              name: 'Steps',
              component: () => {
                if (localLang === 'en-US') {
                  return import('./markdown/aweSteps/en-US/index.md');
                } else {
                  return import('./markdown/aweSteps/zh-CN/index.md');
                }
              }
            }
          ]
        },
        {
          groupName: dataEntryString,
          list: [
            {
              path: '/aweInput',
              name: 'Input',
              component: () => {
                if (localLang === 'en-US') {
                  return import('./markdown/aweInput/en-US/index.md');
                } else {
                  return import('./markdown/aweInput/zh-CN/index.md');
                }
              }
            },
            {
              path: '/aweCheckbox',
              name: 'Checkbox',
              component: () => {
                if (localLang === 'en-US') {
                  return import('./markdown/aweCheckbox/en-US/index.md');
                } else {
                  return import('./markdown/aweCheckbox/zh-CN/index.md');
                }
              }
            },
            {
              path: '/aweUpload',
              name: 'Upload',
              component: () => {
                if (localLang === 'en-US') {
                  return import('./markdown/aweUpload/en-US/index.md');
                } else {
                  return import('./markdown/aweUpload/zh-CN/index.md');
                }
              }
            },
            {
              path: '/aweToggle',
              name: 'Toggle',
              component: () => {
                if (localLang === 'en-US') {
                  return import('./markdown/aweToggle/en-US/index.md');
                } else {
                  return import('./markdown/aweToggle/zh-CN/index.md');
                }
              }
            },
            {
              path: '/aweRate',
              name: 'Rate',
              component: () => {
                if (localLang === 'en-US') {
                  return import('./markdown/aweRate/en-US/index.md');
                } else {
                  return import('./markdown/aweRate/zh-CN/index.md');
                }
              }
            }
          ]
        }
      ]
    }]
};
