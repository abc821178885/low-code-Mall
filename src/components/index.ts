import { generateRandomString } from '~/util/Random-util'
import Search from '../components/Search/index.vue'
import ComponentSelection from '../pages/components-form/componentSelection.vue'

export const componentList = [
  {
    name: 'my-Search',
    element: Search,
    props: {
      width: '100px',
      height: '100px',
    },
    tools: {
      moduleKey: generateRandomString(),
      default: [
        {
          formName: ['name', 'width', 'height', 'titleContent', 'titleLayout', 'mouseEvent', 'backgroundColor', 'backgroundImage', 'dimension', 'position', 'distribution', 'rounded'],
          formType: ComponentSelection,
          props: {

          },
        },
        // {
        //   // 拓展属性
        // },
      ],
      my: [
        {
          formLabel: '组件设置',
        },
      ],
    },
  },
]

export default {
  install(app: { component: (arg0: any, arg1: any) => void }) {
    for (const item of componentList) {
      app.component(item.name, item.element)
    }
  },
}
