import { api, getResponseData } from "./index";

export default class TrabajosRealizadosApi {
  static newWork(data) {
    const newWorkData = {
      nameWork: data.nameWork,
      description: data.description,
      linkImg: data.linkImg,
    };
    return api.post("works/crearTrabajo", newWorkData).then(getResponseData);
  }

  static listaWork() {
    return api.get("works/listarTrabajos").then(getResponseData);
  }

  static getWork(workId) {
    return api.get("works/verTrabajo?workId=" + workId).then(getResponseData);
  }

  static editWork(data) {

    const editWorkData = {
      workId: data.workId,
      nameWork: data.nameWork,
      description: data.description,
      linkImg: data.linkImg,
    };

    return api.put("works/actualizarTrabajo", editWorkData).then(getResponseData);
  }

  static deleteWork(workId) {
    return api.delete("works/eliminarTrabajo/" + workId).then(getResponseData);
  }
}
