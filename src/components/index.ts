import { generateRandomString } from '~/util/Random-util'
import Search from '../components/Search/index.vue'
import NumberFormItem from '../pages/right-pages/index.vue'

export const componentList = [
  {
    name: 'my-Search',
    element: Search,
    props: {
      width: '100px',
      height: '100px',
    },
    tools: {
      default: [
        {
          formName: ['width', 'height'],
          formType: NumberFormItem,
          formKey: generateRandomString(),
          formLabel: '基础属性',
          props: {

          },
        },
      ],
      my: [],
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
