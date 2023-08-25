export interface IResponseUser {
  id: {
    name: string
    value: string
  }
  cell: string
  phone: string
  nat: string
  email: string
  gender: 'male' | 'female'
  dob: {
    age: number
    date: string
  }
  location: {
    street: {
      name: string
      number: number
    }
    city: string
    state: string
    country: string
    postcode: number
    timezone:{
      description: string
      offset: string
    }
  }
  name?: {
    first: string
    last: string
    title: string
  }
  first_name?: string
  last_name?: string
  picture: {
    thumbnail: string
    large: string
    medium: string
  }
  registered:{
    age: number
    date: string
  }
  login: {
    md5: string
    password: string
    salt: string
    sha1: string
    sha256: string
    username: string
    uuid: string
  }
}

export interface IResponseListUser {
  page?: number
  per_page?: number
  total?: number
  total_pages?: number
  results?: IResponseUser[]
}
