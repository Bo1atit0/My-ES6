import {uploadPhoto, createUser} from './utils.js'
export default async function asyncUploadUser() {
    let photo;
    let user;

    try {
        photo = await uploadPhoto()
        user = await createUser()

        return {photo, user}
    }
    catch(error) {
        return{photo: null, user: null}
    }
}