//Get establishment + image por ID 
const { response } = require('express');
const Establishments = require("../model/enade");
const service = require("../services/enadeService");
const Output = require("../model/output");

class EstablishmentsController {

    async executaConta(req, res) {

        if (req.body.metodo == "I") {
            await service.executaConta(req.body).then(
                response => {
                    return res.status(200).json(response);
                }
            )
                .catch(error => {
                    return res.status(500).json(error)
                })
        }
        else if (req.body.metodo =="R"){
        await     service.recursivo(req.body.numInf,req.body.numMax,1).then(
                response => {
                    return res.status(200).json(response);
                }
            )
                .catch(error => {
                    return res.status(500).json(error)
                })
        }
    }
}

module.exports = new EstablishmentsController();