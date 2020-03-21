// eslint-disable
// this is an auto generated file. This will be overwritten

export const getContact = `query GetContact($id: ID!) {
  getContact(id: $id) {
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
export const listContacts = `query ListContacts(
  $filter: ModelContactFilterInput
  $limit: Int
  $nextToken: String
) {
  listContacts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getCompany = `query GetCompany($id: ID!) {
  getCompany(id: $id) {
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
export const listCompanys = `query ListCompanys(
  $filter: ModelCompanyFilterInput
  $limit: Int
  $nextToken: String
) {
  listCompanys(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getAddress = `query GetAddress($id: ID!) {
  getAddress(id: $id) {
    id
    line1
    line2
    city
    country
  }
}
`;
export const listAddresss = `query ListAddresss(
  $filter: ModelAddressFilterInput
  $limit: Int
  $nextToken: String
) {
  listAddresss(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      line1
      line2
      city
      country
    }
    nextToken
  }
}
`;
export const getProduct = `query GetProduct($id: ID!) {
  getProduct(id: $id) {
    id
    description
    unitCost
  }
}
`;
export const listProducts = `query ListProducts(
  $filter: ModelProductFilterInput
  $limit: Int
  $nextToken: String
) {
  listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      description
      unitCost
    }
    nextToken
  }
}
`;
export const getItem = `query GetItem($id: ID!) {
  getItem(id: $id) {
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
export const listItems = `query ListItems(
  $filter: ModelItemFilterInput
  $limit: Int
  $nextToken: String
) {
  listItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      product {
        id
        description
        unitCost
      }
      quantity
    }
    nextToken
  }
}
`;
export const getOrderIndividual = `query GetOrderIndividual($id: ID!) {
  getOrderIndividual(id: $id) {
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
export const listOrderIndividuals = `query ListOrderIndividuals(
  $filter: ModelOrderIndividualFilterInput
  $limit: Int
  $nextToken: String
) {
  listOrderIndividuals(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
      }
      items {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getOrderCompany = `query GetOrderCompany($id: ID!) {
  getOrderCompany(id: $id) {
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
export const listOrderCompanys = `query ListOrderCompanys(
  $filter: ModelOrderCompanyFilterInput
  $limit: Int
  $nextToken: String
) {
  listOrderCompanys(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      orderNumber
      date
      delivered
      customer {
        id
        corporationName
        businessName
        status
        certificateNo
        creditDays
      }
      items {
        nextToken
      }
    }
    nextToken
  }
}
`;
