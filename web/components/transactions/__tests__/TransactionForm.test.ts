import {mount, Wrapper, createLocalVue, shallowMount} from '@vue/test-utils'
import { BootstrapVue } from 'bootstrap-vue'
import TransactionForm from '../TransactionForm.vue'
const localVue = createLocalVue()
localVue.use(BootstrapVue)

// Component config
let wrapper: Wrapper<TransactionForm>
describe('TransactionForm', () => {
  beforeEach(() => {
    wrapper = shallowMount(TransactionForm, {
      localVue,
      propsData: { }
    })
  })

  test('it mounts', () => {
    expect(wrapper.contains('.TransactionForm')).toBe(true)
  })
})
