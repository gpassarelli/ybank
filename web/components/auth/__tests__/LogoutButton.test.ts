import { shallowMount, Wrapper, createLocalVue } from '@vue/test-utils'
import { BootstrapVue } from 'bootstrap-vue'
import LogoutButton from '../LogoutButton.vue'
const localVue = createLocalVue()
localVue.use(BootstrapVue)

// Component config
let wrapper: Wrapper<LogoutButton>
describe('LogoutButton', () => {
  beforeEach(() => {
    wrapper = shallowMount(LogoutButton, {
      localVue,
      propsData: { }
    })
  })

  test('it mounts', () => {
    expect(wrapper.contains('.LogoutButton')).toBe(true)
  })
})
