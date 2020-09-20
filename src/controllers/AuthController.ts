import { Request, Response } from "express";
import { auth, firestore } from "../firebase";
import { CollectionEnum } from "../enums/collection.enum";

class AuthController {
    register(request: Request, response: Response){
        const { body } = request
        auth
        .createUser(body)
        .then(data => {
            const { role } = body
            const { uid, email } = data
            firestore
            .collection(CollectionEnum.USERS)
            .doc(uid).set({ email, role })
            .then(() => response.sendStatus(201))
            .catch(err => response.status(400).send(err.message))
        })
        .catch(err => response.status(400).send(err.message))
    }

    delete(request: Request, response: Response){
        const { id } = request.params
        auth
        .deleteUser(id)
        .then(() => {
            firestore
            .collection(CollectionEnum.USERS)
            .doc(id)
            .delete()
            .then(() => response.sendStatus(204))
            .catch(err => response.status(400).send(err))
        })
        .catch(err => response.status(404).send(err))
    }
}

export default AuthController