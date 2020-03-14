import axios from 'axios'

export default {
    getUsers: () => {
        return axios.get(
            `https://randomuser.me/api/?results=1000&nat=us&inc=login,name,email,dob,phone,picture`
        )
    }
}
// documentation implies certain keys of interest can be called via url manipulation
// &inc=name,email,dob,phone,picture
// this prevents highly sensitive data such as SSN from being loaded in the object!