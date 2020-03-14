import axios from 'axios'

export default {
    getUsers: () => {
        return axios.get(
            `https://randomuser.me/api/?results=1000&nat=us&inc=name,email,dob,cell,picture`
        )
    }
}