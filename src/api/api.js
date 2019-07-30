const axios = require('axios');

class API {
    constructor({ url }) {
        this.url = url
        this.endpoints = {}
    }


    createEntity(entity) {
        this.endpoints[entity.name] = this.createBasicEndpoints(entity)
    }

    createEntities(arrayOfEntity) {
        arrayOfEntity.forEach(this.createEntity.bind(this))
    }

    createBasicEndpoints( {name} ) {
        var endpoints = {}

        const resourceURL = `${this.url}/${name}`

        endpoints.getAll = ({ category } = {}) => axios.get(resourceURL,{ params: { category } })

        endpoints.getOne = ({ id }) => axios.get(`${resourceURL}/${id}`)

        return endpoints
    }

}

export default API;