// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateContact = `subscription OnCreateContact {
  onCreateContact {
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
export const onUpdateContact = `subscription OnUpdateContact {
  onUpdateContact {
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
export const onDeleteContact = `subscription OnDeleteContact {
  onDeleteContact {
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
export const onCreateCompany = `subscription OnCreateCompany {
  onCreateCompany {
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
export const onUpdateCompany = `subscription OnUpdateCompany {
  onUpdateCompany {
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
export const onDeleteCompany = `subscription OnDeleteCompany {
  onDeleteCompany {
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
export const onCreateAddress = `subscription OnCreateAddress {
  onCreateAddress {
    id
    line1
    line2
    city
    country
  }
}
`;
export const onUpdateAddress = `subscription OnUpdateAddress {
  onUpdateAddress {
    id
    line1
    line2
    city
    country
  }
}
`;
export const onDeleteAddress = `subscription OnDeleteAddress {
  onDeleteAddress {
    id
    line1
    line2
    city
    country
  }
}
`;
export const onCreateProduct = `subscription OnCreateProduct {
  onCreateProduct {
    id
    description
    unitCost
  }
}
`;
export const onUpdateProduct = `subscription OnUpdateProduct {
  onUpdateProduct {
    id
    description
    unitCost
  }
}
`;
export const onDeleteProduct = `subscription OnDeleteProduct {
  onDeleteProduct {
    id
    description
    unitCost
  }
}
`;
export const onCreateItem = `subscription OnCreateItem {
  onCreateItem {
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
export const onUpdateItem = `subscription OnUpdateItem {
  onUpdateItem {
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
export const onDeleteItem = `subscription OnDeleteItem {
  onDeleteItem {
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
export const onCreateOrderIndividual = `subscription OnCreateOrderIndividual {
  onCreateOrderIndividual {
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
export const onUpdateOrderIndividual = `subscription OnUpdateOrderIndividual {
  onUpdateOrderIndividual {
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
export const onDeleteOrderIndividual = `subscription OnDeleteOrderIndividual {
  onDeleteOrderIndividual {
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
export const onCreateOrderCompany = `subscription OnCreateOrderCompany {
  onCreateOrderCompany {
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
export const onUpdateOrderCompany = `subscription OnUpdateOrderCompany {
  onUpdateOrderCompany {
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
export const onDeleteOrderCompany = `subscription OnDeleteOrderCompany {
  onDeleteOrderCompany {
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
