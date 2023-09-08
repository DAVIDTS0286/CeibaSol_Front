import { api, getResponseData } from "./index";

export default class ServiceApi {

    static newService(data) {

        const newServiceData = {
            nameService: data.nameService,
            subService: data.subService,
            linkImg: data.linkImg,
        };
        return api
            .post("services/crearServicio", newServiceData)
            .then(getResponseData);
    }
    static listServices() {
            return api
            .get("services/listarServicios")
            .then(getResponseData);
    }
    static getService(serviceId) {
        return api
            .get("services/verServicio?serviceId=" + serviceId)
            .then(getResponseData);
    }
    static editService(data) {

        const editServiceData = {
            serviceId: data.serviceId,
            nameService: data.nameService,
            subService: data.subService,
            linkImg: data.linkImg
        };
        return api
            .put("services/actualizarServicio", editServiceData)
            .then(getResponseData);
    }
    static deleteService(serviceId) {
        return api.delete("services/eliminarServicio/" + serviceId).then(getResponseData);
      }
}
