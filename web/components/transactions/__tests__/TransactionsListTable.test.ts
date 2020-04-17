import {Wrapper, createLocalVue, mount, shallowMount} from '@vue/test-utils'
import { BootstrapVue } from 'bootstrap-vue'
import TransactionsListTable from '../TransactionsListTable.vue'
import {mockTransaction} from "~/lib/ybank/models/__mocks__/transaction";
const localVue = createLocalVue()
localVue.use(BootstrapVue)

// Component config
let wrapper: Wrapper<TransactionsListTable >
const transaction = mockTransaction()
const transactionsList = [transaction, transaction, transaction]
describe('TransactionsListTable', () => {
  beforeEach(() => {
    wrapper = shallowMount(TransactionsListTable, {
      localVue,
      propsData: {
        transactions: transactionsList
      }
    })
  })

  test('it mounts', () => {
    expect(wrapper.contains('.TransactionsListTable')).toBe(true)
  })
})
