// eslint-disable
// this is an auto generated file. This will be overwritten

export const createContact = `mutation CreateContact($input: CreateContactInput!) {
  createContact(input: $input) {
    id
    firstName
    lastName
    phoneNumber
    email
    title
    address {
      id
      line1
      line2
      city
      country
    }
  }
}
`;
export const updateContact = `mutation UpdateContact($input: UpdateContactInput!) {
  updateContact(input: $input) {
    id
    firstName
    lastName
    phoneNumber
    email
    title
    address {
      id
      line1
      line2
      city
      country
    }
  }
}
`;
export const deleteContact = `mutation DeleteContact($input: DeleteContactInput!) {
  deleteContact(input: $input) {
    id
    firstName
    lastName
    phoneNumber
    email
    title
    address {
      id
      line1
      line2
      city
      country
    }
  }
}
`;
export const createCompany = `mutation CreateCompany($input: CreateCompanyInput!) {
  createCompany(input: $input) {
    id
    corporationName
    businessName
    address {
      id
      line1
      line2
      city
      country
    }
    status
    certificateNo
    creditDays
    contacts {
      items {
        id
        firstName
        lastName
        phoneNumber
        email
        title
      }
      nextToken
    }
  }
}
`;
export const updateCompany = `mutation UpdateCompany($input: UpdateCompanyInput!) {
  updateCompany(input: $input) {
    id
    corporationName
    businessName
    address {
      id
      line1
      line2
      city
      country
    }
    status
    certificateNo
    creditDays
    contacts {
      items {
        id
        firstName
        lastName
        phoneNumber
        email
        title
      }
      nextToken
    }
  }
}
`;
export const deleteCompany = `mutation DeleteCompany($input: DeleteCompanyInput!) {
  deleteCompany(input: $input) {
    id
    corporationName
    businessName
    address {
      id
      line1
      line2
      city
      country
    }
    status
    certificateNo
    creditDays
    contacts {
      items {
        id
        firstName
        lastName
        phoneNumber
        email
        title
      }
      nextToken
    }
  }
}
`;
export const createAddress = `mutation CreateAddress($input: CreateAddressInput!) {
  createAddress(input: $input) {
    id
    line1
    line2
    city
    country
  }
}
`;
export const updateAddress = `mutation UpdateAddress($input: UpdateAddressInput!) {
  updateAddress(input: $input) {
    id
    line1
    line2
    city
    country
  }
}
`;
export const deleteAddress = `mutation DeleteAddress($input: DeleteAddressInput!) {
  deleteAddress(input: $input) {
    id
    line1
    line2
    city
    country
  }
}
`;
export const createProduct = `mutation CreateProduct($input: CreateProductInput!) {
  createProduct(input: $input) {
    id
    description
    unitCost
  }
}
`;
export const updateProduct = `mutation UpdateProduct($input: UpdateProductInput!) {
  updateProduct(input: $input) {
    id
    description
    unitCost
  }
}
`;
export const deleteProduct = `mutation DeleteProduct($input: DeleteProductInput!) {
  deleteProduct(input: $input) {
    id
    description
    unitCost
  }
}
`;
export const createItem = `mutation CreateItem($input: CreateItemInput!) {
  createItem(input: $input) {
    id
    product {
      id
      description
      unitCost
    }
    quantity
  }
}
`;
export const updateItem = `mutation UpdateItem($input: UpdateItemInput!) {
  updateItem(input: $input) {
    id
    product {
      id
      description
      unitCost
    }
    quantity
  }
}
`;
export const deleteItem = `mutation DeleteItem($input: DeleteItemInput!) {
  deleteItem(input: $input) {
    id
    product {
      id
      description
      unitCost
    }
    quantity
  }
}
`;
export const createOrderIndividual = `mutation CreateOrderIndividual($input: CreateOrderIndividualInput!) {
  createOrderIndividual(input: $input) {
    id
    orderNumber
    date
    delivered
    customer {
      id
      firstName
      lastName
      phoneNumber
      email
      title
      address {
        id
        line1
        line2
        city
        country
      }
    }
    items {
      items {
        id
        quantity
      }
      nextToken
    }
  }
}
`;
export const updateOrderIndividual = `mutation UpdateOrderIndividual($input: UpdateOrderIndividualInput!) {
  updateOrderIndividual(input: $input) {
    id
    orderNumber
    date
    delivered
    customer {
      id
      firstName
      lastName
      phoneNumber
      email
      title
      address {
        id
        line1
        line2
        city
        country
      }
    }
    items {
      items {
        id
        quantity
      }
      nextToken
    }
  }
}
`;
export const deleteOrderIndividual = `mutation DeleteOrderIndividual($input: DeleteOrderIndividualInput!) {
  deleteOrderIndividual(input: $input) {
    id
    orderNumber
    date
    delivered
    customer {
      id
      firstName
      lastName
      phoneNumber
      email
      title
      address {
        id
        line1
        line2
        city
        country
      }
    }
    items {
      items {
        id
        quantity
      }
      nextToken
    }
  }
}
`;
export const createOrderCompany = `mutation CreateOrderCompany($input: CreateOrderCompanyInput!) {
  createOrderCompany(input: $input) {
    id
    orderNumber
    date
    delivered
    customer {
      id
      corporationName
      businessName
      address {
        id
        line1
        line2
        city
        country
      }
      status
      certificateNo
      creditDays
      contacts {
        nextToken
      }
    }
    items {
      items {
        id
        quantity
      }
      nextToken
    }
  }
}
`;
export const updateOrderCompany = `mutation UpdateOrderCompany($input: UpdateOrderCompanyInput!) {
  updateOrderCompany(input: $input) {
    id
    orderNumber
    date
    delivered
    customer {
      id
      corporationName
      businessName
      address {
        id
        line1
        line2
        city
        country
      }
      status
      certificateNo
      creditDays
      contacts {
        nextToken
      }
    }
    items {
      items {
        id
        quantity
      }
      nextToken
    }
  }
}
`;
export const deleteOrderCompany = `mutation DeleteOrderCompany($input: DeleteOrderCompanyInput!) {
  deleteOrderCompany(input: $input) {
    id
    orderNumber
    date
    delivered
    customer {
      id
      corporationName
      businessName
      address {
        id
        line1
        line2
        city
        country
      }
      status
      certificateNo
      creditDays
      contacts {
        nextToken
      }
    }
    items {
      items {
        id
        quantity
      }
      nextToken
    }
  }
}
`;
