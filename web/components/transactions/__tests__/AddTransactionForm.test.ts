import {mount, Wrapper, createLocalVue, shallowMount} from '@vue/test-utils'
import { BootstrapVue } from 'bootstrap-vue'
import AddTransactionForm from '../AddTransactionForm.vue'
const localVue = createLocalVue()
localVue.use(BootstrapVue)

// Component config
let wrapper: Wrapper<AddTransactionForm>
describe('AddTransactionForm', () => {
  beforeEach(() => {
    wrapper = shallowMount(AddTransactionForm, {
      localVue,
      propsData: { }
    })
  })

  test('it mounts', () => {
    expect(wrapper.contains('.AddTransactionForm')).toBe(true)
  })
})
