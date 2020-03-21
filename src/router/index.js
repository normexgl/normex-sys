import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import CustomersCompany from '@/components/customers/Company'
import CustomersIndividual from '@/components/customers/Individual'
import ProductsProducts from '@/components/products/Products'
import OrdersOrders from '@/components/orders/Orders'
import InvoicesInvoices from '@/components/invoices/Invoices'


Vue.use(Router)

export default new Router({
    routes: [
      {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
          breadCrumb: [
            { text: 'Home', active: true }
          ]
        }
      },
      {
        path: '/customers/Company',
        name: 'Company',
        component: CustomersCompany,
        meta: {
          breadCrumb: [
            { text: 'Customers', active: true },
            { text: 'Company', active: true }
          ]
        }
      },
      {
        path: '/customers/Individual',
        name: 'Individual',
        component: CustomersIndividual,
        meta: {
          breadCrumb: [
            { text: 'Customers', active: true },
            { text: 'Individual', active: true }
          ]
        }
      },
      {
        path: '/products/Products',
        name: 'Products',
        component: ProductsProducts,
        meta: {
          breadCrumb: [
            { text: 'Products', active: true }
          ]
        }
      },
      {
        path: '/orders/Orders',
        name: 'Orders',
        component: OrdersOrders,
        meta: {
          breadCrumb: [
            { text: 'Orders', active: true }
          ]
        }
      },
      {
        path: '/invoices/Invoices',
        name: 'Invoices',
        component: InvoicesInvoices,
        meta: {
          breadCrumb: [
            { text: 'Invoices', active: true }
          ]
        }
      }
    ]
})