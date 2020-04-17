import { shallowMount, Wrapper, createLocalVue } from '@vue/test-utils'
import { BootstrapVue } from 'bootstrap-vue'
import AsyncActionButton from '../AsyncActionButton.vue'
const localVue = createLocalVue()
localVue.use(BootstrapVue)

// Component config
let wrapper: Wrapper<AsyncActionButton>
describe('AsyncActionButton', () => {
  beforeEach(() => {
    wrapper = shallowMount(AsyncActionButton, {
      localVue,
      propsData: { }
    })
  })

  test('it mounts', () => {
    expect(wrapper.contains('.AsyncActionButton')).toBe(true)
  })
})
