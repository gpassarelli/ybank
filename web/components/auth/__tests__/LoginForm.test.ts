import { mount, Wrapper, createLocalVue } from '@vue/test-utils'
import { BootstrapVue } from 'bootstrap-vue'
import LoginForm from '../LoginForm.vue'
const localVue = createLocalVue()
localVue.use(BootstrapVue)

// Component config
let wrapper: Wrapper<LoginForm>
describe('LoginForm', () => {
  beforeEach(() => {
    wrapper = mount(LoginForm, {
      localVue,
      propsData: { }
    })
  })

  test('it mounts', () => {
    expect(wrapper.contains('.LoginForm')).toBe(true)
  })
})
