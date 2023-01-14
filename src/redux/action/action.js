import ActionTypes from '../constants/constants'

export const  personalInformation = (data) => {
    return {
        type:ActionTypes.PERSONAL_INFORMATION,
        payload:data
    }
}

export const personalInformationSuccess = (data) => {
    return {
        type:ActionTypes.PEROSONAL_INFORMATION_SUCCESS,
        payload:data
    }
}

export const contactInformation = (data) => {
    return {
        type:ActionTypes.CONTACT_INFORMATION,
        payload:data
    }
}

export const educationalInformation = (data) => {
    return {
        type:ActionTypes.EDUCATIO_INFORMATION,
        payload:data
    }
}

export const qualificationInformation = (data) => {
    return {
        type:ActionTypes.QUALIFICATION_INFORMATION,
        payload:data
    }
}


export const referencesInformation = (data) => {
    return {
        type:ActionTypes.REFERENCES_INFORMATION,
        payload:data
    }
}

export const skillInformation= (data) => {
    return {
        type:ActionTypes.SKILL_INFORMATION,
        payload:data
    }
}

export const workInformation = (data) => {
    return {
        type:ActionTypes.WORK_INFORMATION,
        payload:data
    }
}

