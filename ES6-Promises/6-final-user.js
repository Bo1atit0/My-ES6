import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';


export default function handleProfileSignup(firstName, lastName, fileName) {
    return Promise.allSettled([
        signUpUser(firstName, lastName), 
        uploadPhoto(fileName)
    ])
    .then((results) => {
        const newStatusArray = results.map((result) => ({
            status: result.status,
            value: result.status === 'rejected'? result.reason : result.value
            
        }))
        // console.log('Status:', newStatusArray)
    })
    
}