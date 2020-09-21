import * as functions from 'firebase-functions';

import { auth, firestore } from "./firebase";
import { CollectionEnum } from './enums/collection.enum';

export const registerUser = functions.https.onRequest((request, response) => {
    const { body } = request
        auth
            .createUser(body)
            .then((data: any) => {
                const { role } = body
                const { uid, email } = data

                firestore
                    .collection(CollectionEnum.USERS)
                    .doc(uid).set({ email, role })
                    .then(() => response.set('Access-Control-Allow-Origin', '*').sendStatus(201))
                    .catch(err => response.status(400).send(err.message))
            })
            .catch(err => response.status(400).send(err.message))
})

export const roleUser =  functions.https.onRequest((request, response) => {
    const { id } = request.query
    firestore
    .collection(CollectionEnum.USERS)
    .doc(id as string)
    .get()
    .then(snapshot => {
        const data: any  = snapshot.data()
        const role = data.role
        response.set('Access-Control-Allow-Origin', '*').status(200).send(role)
    })
    .catch(err => response.status(400).send(err.message))
})

//Testar o stor
export const registerPet = functions.https.onRequest((request, response) => {
    const { body } = request

    firestore
    .collection(CollectionEnum.PETS)
    .add(body)
    .then(() => response.set('Access-Control-Allow-Origin', '*').sendStatus(201))
    .catch(err => response.status(400).send(err))
})

export const listPet = functions.https.onRequest((request, response) => {
        firestore
        .collection(CollectionEnum.PETS)
        .get()
        .then(snapshot => {
            const docs = snapshot.docChanges();
            const result = docs.map(item => {{
                return {
                    id: item.doc.ref.id,
                    ...item.doc.data()
                }
            }})
            response.set('Access-Control-Allow-Origin', '*').status(200).send(result)
        })
        .catch(err => response.status(400).send(err))   
})

export const deletePet = functions.https.onRequest((request, response) => {
    const { id } = request.query;
    firestore
    .collection(CollectionEnum.PETS).doc(id as string)
    .delete()
    .then(() => response.set('Access-Control-Allow-Origin', '*').sendStatus(204))
    .catch(err => response.status(404).send(err))
})