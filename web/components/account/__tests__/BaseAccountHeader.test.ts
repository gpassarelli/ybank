import { shallowMount, Wrapper, createLocalVue } from '@vue/test-utils'
import { BootstrapVue } from 'bootstrap-vue'
import BaseAccountHeader from '../BaseAccountHeader.vue'
const localVue = createLocalVue()
localVue.use(BootstrapVue)

// Component config
let wrapper: Wrapper<BaseAccountHeader>
describe('BaseAccountHeader', () => {
  beforeEach(() => {
    wrapper = shallowMount(BaseAccountHeader, {
      localVue,
      propsData: { }
    })
  })

  test('it mounts', () => {
    expect(wrapper.contains('.BaseAccountHeader')).toBe(true)
  })
})
